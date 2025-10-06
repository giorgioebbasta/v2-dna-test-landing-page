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

    console.log('Clearing all analytics data in batches...');

    // Delete in batches to avoid statement timeout and URI length limits
    const batchSize = 500; // Reduced to avoid 414 Request-URI Too Large error
    let totalDeleted = 0;

    console.log('Batch deleting pageviews...');
    // Delete pageviews in batches (must be first due to foreign key)
    while (true) {
      const { data, error } = await supabase
        .from('analytics_pageviews')
        .select('id')
        .limit(batchSize);

      if (error) throw new Error(`Failed to fetch pageviews: ${error.message}`);
      if (!data || data.length === 0) break;

      const ids = data.map(row => row.id);
      const { error: deleteError } = await supabase
        .from('analytics_pageviews')
        .delete()
        .in('id', ids);

      if (deleteError) throw new Error(`Failed to delete pageviews: ${deleteError.message}`);
      
      totalDeleted += ids.length;
      console.log(`Deleted ${totalDeleted} pageviews so far...`);
    }

    console.log('Batch deleting sessions...');
    totalDeleted = 0;
    // Delete sessions in batches
    while (true) {
      const { data, error } = await supabase
        .from('analytics_sessions')
        .select('id')
        .limit(batchSize);

      if (error) throw new Error(`Failed to fetch sessions: ${error.message}`);
      if (!data || data.length === 0) break;

      const ids = data.map(row => row.id);
      const { error: deleteError } = await supabase
        .from('analytics_sessions')
        .delete()
        .in('id', ids);

      if (deleteError) throw new Error(`Failed to delete sessions: ${deleteError.message}`);
      
      totalDeleted += ids.length;
      console.log(`Deleted ${totalDeleted} sessions so far...`);
    }

    console.log('Deleting daily summaries...');
    const { error: summaryError } = await supabase
      .from('analytics_daily_summary')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (summaryError) throw new Error(`Failed to delete daily summary: ${summaryError.message}`);

    console.log('All analytics data cleared successfully');

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'All analytics data cleared successfully'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in clear-analytics:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});
