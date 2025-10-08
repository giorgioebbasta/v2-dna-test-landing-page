-- Drop all analytics tables (in correct order due to foreign keys)
DROP TABLE IF EXISTS public.analytics_pageviews CASCADE;
DROP TABLE IF EXISTS public.analytics_sessions CASCADE;
DROP TABLE IF EXISTS public.analytics_daily_summary CASCADE;

-- Drop profiles table
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Drop user roles table
DROP TABLE IF EXISTS public.user_roles CASCADE;

-- Drop all custom functions
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role) CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.handle_profile_updated() CASCADE;
DROP FUNCTION IF EXISTS public.clear_analytics_data() CASCADE;
DROP FUNCTION IF EXISTS public.aggregate_daily_analytics(date) CASCADE;

-- Drop enum type
DROP TYPE IF EXISTS public.app_role CASCADE;