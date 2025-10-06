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

    console.log('Clearing all analytics data...');

    // Delete in correct order (pageviews first due to foreign key)
    const { error: pageviewsError } = await supabase
      .from('analytics_pageviews')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (pageviewsError) {
      console.error('Error deleting pageviews:', pageviewsError);
      throw new Error(`Failed to delete pageviews: ${pageviewsError.message}`);
    }

    const { error: sessionsError } = await supabase
      .from('analytics_sessions')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (sessionsError) {
      console.error('Error deleting sessions:', sessionsError);
      throw new Error(`Failed to delete sessions: ${sessionsError.message}`);
    }

    const { error: summaryError } = await supabase
      .from('analytics_daily_summary')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (summaryError) {
      console.error('Error deleting daily summary:', summaryError);
      throw new Error(`Failed to delete daily summary: ${summaryError.message}`);
    }

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
