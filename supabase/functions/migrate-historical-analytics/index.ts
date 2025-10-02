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

    // Insert daily summary data
    for (const day of historicalData) {
      const { error } = await supabase
        .from('analytics_daily_summary')
        .upsert({
          date: day.date,
          total_visitors: day.visitors || 0,
          total_pageviews: day.pageviews || day.visitors || 0,
          unique_sessions: day.visitors || 0,
        }, {
          onConflict: 'date'
        });

      if (error) {
        console.error(`Error inserting data for ${day.date}:`, error);
      } else {
        migratedDays++;
        totalVisitors += day.visitors || 0;
        totalPageviews += day.pageviews || day.visitors || 0;
      }
    }

    console.log(`Migration complete: ${migratedDays} days, ${totalVisitors} total visitors`);

    return new Response(
      JSON.stringify({ 
        success: true,
        migratedDays,
        totalVisitors,
        totalPageviews,
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
