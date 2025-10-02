import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { historicalData } = await req.json();

    if (!historicalData || !Array.isArray(historicalData)) {
      throw new Error('Historical data array is required');
    }

    console.log(`Migrating ${historicalData.length} days of historical data...`);

    let migratedDays = 0;
    let totalVisitors = 0;
    let totalPageviews = 0;
    let totalSessions = 0;
    let totalPageviewRecords = 0;

    // Insert data day by day
    for (const day of historicalData) {
      // Insert daily summary
      const { error: summaryError } = await supabase
        .from('analytics_daily_summary')
        .upsert({
          date: day.date,
          total_visitors: day.total_visitors || 0,
          total_pageviews: day.total_pageviews || 0,
          unique_sessions: day.unique_sessions || 0,
        }, {
          onConflict: 'date'
        });

      if (summaryError) {
        console.error(`Error inserting summary for ${day.date}:`, summaryError);
        continue;
      }

      // Insert sessions if provided
      if (day.sessions && Array.isArray(day.sessions)) {
        for (const session of day.sessions) {
          const { error: sessionError } = await supabase
            .from('analytics_sessions')
            .upsert({
              id: session.id,
              started_at: session.started_at,
              ended_at: session.ended_at,
              page_count: session.page_count,
              device_type: session.device_type,
              browser: session.browser,
              country: session.country,
            }, {
              onConflict: 'id'
            });

          if (!sessionError) {
            totalSessions++;
          }
        }
      }

      // Insert pageviews if provided
      if (day.pageviews && Array.isArray(day.pageviews)) {
        for (const pageview of day.pageviews) {
          const { error: pageviewError } = await supabase
            .from('analytics_pageviews')
            .insert({
              session_id: pageview.session_id,
              page_path: pageview.page_path,
              referrer: pageview.referrer,
              user_agent: pageview.user_agent,
              timestamp: pageview.timestamp,
            });

          if (!pageviewError) {
            totalPageviewRecords++;
          }
        }
      }

      migratedDays++;
      totalVisitors += day.total_visitors || 0;
      totalPageviews += day.total_pageviews || 0;
    }

    console.log(`Migration complete: ${migratedDays} days, ${totalVisitors} visitors, ${totalSessions} sessions, ${totalPageviewRecords} pageview records`);

    return new Response(
      JSON.stringify({ 
        success: true,
        migratedDays,
        totalVisitors,
        totalPageviews,
        totalSessions,
        totalPageviewRecords,
        message: `Successfully migrated ${migratedDays} days of historical analytics`
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in migrate-historical-analytics:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});
