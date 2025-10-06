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
    // Get JWT token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify user is admin
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      throw new Error('Invalid authentication');
    }

    // Check if user has admin role
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();

    if (roleError || !roleData) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Admin access required' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 403 
        }
      );
    }

    console.log(`Admin user ${user.id} initiated analytics clear`);

    console.log('Starting fast analytics data deletion using TRUNCATE...');

    try {
      // Use raw SQL with TRUNCATE for much faster deletion
      // TRUNCATE is orders of magnitude faster than DELETE for large tables
      // CASCADE will automatically handle foreign key constraints
      
      // First truncate pageviews (has FK to sessions)
      const { error: pageviewsError } = await supabase.rpc('exec_sql', {
        query: 'TRUNCATE TABLE analytics_pageviews CASCADE'
      });
      
      if (pageviewsError) {
        console.log('TRUNCATE not available, falling back to DELETE...');
        // Fallback: Use DELETE with no WHERE clause (faster than batches)
        const { error: deletePageviewsError } = await supabase
          .from('analytics_pageviews')
          .delete()
          .neq('id', '00000000-0000-0000-0000-000000000000');
        
        if (deletePageviewsError) throw new Error(`Failed to delete pageviews: ${deletePageviewsError.message}`);
      }
      console.log('Pageviews cleared');

      // Then truncate/delete sessions
      const { error: sessionsError } = await supabase.rpc('exec_sql', {
        query: 'TRUNCATE TABLE analytics_sessions CASCADE'
      });
      
      if (sessionsError) {
        const { error: deleteSessionsError } = await supabase
          .from('analytics_sessions')
          .delete()
          .neq('id', '00000000-0000-0000-0000-000000000000');
        
        if (deleteSessionsError) throw new Error(`Failed to delete sessions: ${deleteSessionsError.message}`);
      }
      console.log('Sessions cleared');

      // Finally clear daily summaries
      const { error: summaryError } = await supabase
        .from('analytics_daily_summary')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

      if (summaryError) throw new Error(`Failed to delete daily summary: ${summaryError.message}`);
      console.log('Daily summaries cleared');

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
    } catch (deleteError) {
      // If anything fails, return a clear error
      console.error('Deletion error:', deleteError);
      throw deleteError;
    }
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
