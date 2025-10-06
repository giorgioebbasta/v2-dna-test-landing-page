import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Lovable analytics data structure
interface LovableAnalytics {
  timeSeries: {
    visitors: { total: number; data: Array<{ date: string; value: number }> };
    pageviews: { total: number; data: Array<{ date: string; value: number }> };
    sessionDuration: { data: Array<{ date: string; value: number }> };
  };
  lists: {
    page: { data: Array<{ label: string; value: number }> };
    source: { data: Array<{ label: string; value: number }> };
    device: { data: Array<{ label: string; value: number }> };
    country: { data: Array<{ label: string; value: number }> };
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify admin user
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      throw new Error('Invalid authentication');
    }

    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();

    if (roleError || !roleData) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Admin access required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 403 }
      );
    }

    console.log(`Admin user ${user.id} initiated Lovable analytics import`);

    // Get the analytics data from request body
    const analyticsData: LovableAnalytics = await req.json();

    // Parse device breakdown percentages
    const deviceStats = analyticsData.lists.device.data;
    const totalDeviceCount = deviceStats.reduce((sum, d) => sum + d.value, 0);
    const deviceDistribution = deviceStats.map(d => ({
      type: d.label.includes('android') ? 'mobile' : 
            d.label.includes('ios') ? 'mobile' :
            d.label.includes('desktop') ? 'desktop' : 'mobile',
      percentage: d.value / totalDeviceCount
    }));

    // Parse country breakdown
    const countryStats = analyticsData.lists.country.data;
    const totalCountryCount = countryStats.reduce((sum, c) => sum + c.value, 0);
    const countryDistribution = countryStats.map(c => ({
      code: c.label,
      percentage: c.value / totalCountryCount
    }));

    // Parse source breakdown
    const sourceStats = analyticsData.lists.source.data;
    const totalSourceCount = sourceStats.reduce((sum, s) => sum + s.value, 0);
    const sourceDistribution = sourceStats.map(s => ({
      name: s.label,
      percentage: s.value / totalSourceCount
    }));

    // Parse page breakdown
    const pageStats = analyticsData.lists.page.data;
    const totalPageCount = pageStats.reduce((sum, p) => sum + p.value, 0);
    const pageDistribution = pageStats.map(p => ({
      path: p.label,
      percentage: p.value / totalPageCount
    }));

    const browsers = ['Chrome', 'Safari', 'Firefox', 'Edge'];
    
    let totalSessions = 0;
    let totalPageviews = 0;

    // Process each day
    for (const dayData of analyticsData.timeSeries.visitors.data) {
      const date = dayData.date;
      const visitors = dayData.value;
      
      if (visitors === 0) continue;

      const pageviewData = analyticsData.timeSeries.pageviews.data.find(p => p.date === date);
      const durationData = analyticsData.timeSeries.sessionDuration.data.find(d => d.date === date);
      
      const pageviews = pageviewData?.value || 0;
      const avgDuration = durationData?.value || 60;

      console.log(`Processing ${date}: ${visitors} visitors, ${pageviews} pageviews`);

      // Create sessions for this day
      const sessionsToCreate = [];
      const pageviewsToCreate = [];

      for (let i = 0; i < visitors; i++) {
        const sessionId = crypto.randomUUID();
        
        // Distribute devices based on actual percentages
        const deviceRand = Math.random();
        let cumulative = 0;
        let deviceType = 'mobile';
        for (const dev of deviceDistribution) {
          cumulative += dev.percentage;
          if (deviceRand <= cumulative) {
            deviceType = dev.type;
            break;
          }
        }

        // Distribute countries based on actual percentages
        const countryRand = Math.random();
        cumulative = 0;
        let country = 'Unknown';
        for (const c of countryDistribution) {
          cumulative += c.percentage;
          if (countryRand <= cumulative) {
            country = c.code;
            break;
          }
        }

        const browser = browsers[Math.floor(Math.random() * browsers.length)];
        
        // Random time during the day
        const hourOffset = Math.floor(Math.random() * 24);
        const minuteOffset = Math.floor(Math.random() * 60);
        const startedAt = new Date(`${date}T${String(hourOffset).padStart(2, '0')}:${String(minuteOffset).padStart(2, '0')}:00Z`);
        const endedAt = new Date(startedAt.getTime() + (avgDuration * 1000));

        // Calculate pageviews for this session (distribute total across visitors)
        const sessionPageviews = Math.max(1, Math.round(pageviews / visitors));

        sessionsToCreate.push({
          id: sessionId,
          device_type: deviceType,
          browser: browser,
          country: country,
          started_at: startedAt.toISOString(),
          ended_at: endedAt.toISOString(),
          page_count: sessionPageviews,
        });

        // Create pageviews for this session
        for (let j = 0; j < sessionPageviews; j++) {
          // Distribute pages based on actual percentages
          const pageRand = Math.random();
          cumulative = 0;
          let pagePath = '/';
          for (const page of pageDistribution) {
            cumulative += page.percentage;
            if (pageRand <= cumulative) {
              pagePath = page.path;
              break;
            }
          }

          // Distribute sources based on actual percentages
          const sourceRand = Math.random();
          cumulative = 0;
          let referrer = null;
          for (const src of sourceDistribution) {
            cumulative += src.percentage;
            if (sourceRand <= cumulative) {
              referrer = src.name === 'Direct' ? null : `https://${src.name}`;
              break;
            }
          }

          const pvTime = new Date(startedAt.getTime() + (j * 10000));
          
          pageviewsToCreate.push({
            page_path: pagePath,
            referrer: referrer,
            user_agent: `${browser}/120.0`,
            session_id: sessionId,
            timestamp: pvTime.toISOString(),
          });
        }
      }

      // Batch insert sessions (max 1000 at a time)
      for (let i = 0; i < sessionsToCreate.length; i += 1000) {
        const batch = sessionsToCreate.slice(i, i + 1000);
        const { error: sessionError } = await supabase
          .from('analytics_sessions')
          .insert(batch);
        
        if (sessionError) {
          console.error('Error inserting sessions:', sessionError);
          throw sessionError;
        }
        totalSessions += batch.length;
      }

      // Batch insert pageviews (max 1000 at a time)
      for (let i = 0; i < pageviewsToCreate.length; i += 1000) {
        const batch = pageviewsToCreate.slice(i, i + 1000);
        const { error: pageviewError } = await supabase
          .from('analytics_pageviews')
          .insert(batch);
        
        if (pageviewError) {
          console.error('Error inserting pageviews:', pageviewError);
          throw pageviewError;
        }
        totalPageviews += batch.length;
      }

      // Insert daily summary
      const { error: summaryError } = await supabase
        .from('analytics_daily_summary')
        .insert({
          date: date,
          total_visitors: visitors,
          total_pageviews: pageviews,
          unique_sessions: visitors,
        });

      if (summaryError) {
        console.error('Error inserting daily summary:', summaryError);
      }
    }

    console.log(`Successfully imported ${totalSessions} sessions and ${totalPageviews} pageviews`);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Imported ${totalSessions} sessions and ${totalPageviews} pageviews`,
        sessions: totalSessions,
        pageviews: totalPageviews
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error) {
    console.error('Error in import-lovable-analytics function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    );
  }
});
