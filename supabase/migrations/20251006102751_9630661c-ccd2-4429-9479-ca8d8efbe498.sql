-- Fix RLS policy for analytics_pageviews to allow both anonymous and authenticated users to insert
-- This is needed because the analytics tracking should work for all visitors

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Allow public to insert pageviews" ON public.analytics_pageviews;

-- Create a new permissive policy that explicitly allows anyone (authenticated or not) to insert
CREATE POLICY "Allow anyone to insert pageviews"
ON public.analytics_pageviews
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Also ensure the policy for sessions is correct
DROP POLICY IF EXISTS "Allow public to insert sessions" ON public.analytics_sessions;

CREATE POLICY "Allow anyone to insert sessions"
ON public.analytics_sessions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);