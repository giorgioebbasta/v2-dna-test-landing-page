-- Create a function to efficiently clear analytics data
-- This function uses TRUNCATE which is much faster than DELETE for large tables
CREATE OR REPLACE FUNCTION public.clear_analytics_data()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Truncate all analytics tables in the correct order (respecting foreign keys)
  TRUNCATE TABLE public.analytics_pageviews CASCADE;
  TRUNCATE TABLE public.analytics_sessions CASCADE;
  TRUNCATE TABLE public.analytics_daily_summary CASCADE;
END;
$$;