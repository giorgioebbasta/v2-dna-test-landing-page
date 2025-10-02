import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get target date from request or use yesterday by default
    const { date } = await req.json().catch(() => ({}));
    const targetDate = date || new Date(Date.now() - 86400000).toISOString().split('T')[0];

    console.log('Aggregating analytics for date:', targetDate);

    // Call the aggregation function
    const { error: aggregateError } = await supabase.rpc('aggregate_daily_analytics', {
      target_date: targetDate,
    });

    if (aggregateError) {
      console.error('Error aggregating analytics:', aggregateError);
      throw aggregateError;
    }

    console.log('Successfully aggregated analytics for', targetDate);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Analytics aggregated for ${targetDate}` 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in aggregate-analytics function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});
