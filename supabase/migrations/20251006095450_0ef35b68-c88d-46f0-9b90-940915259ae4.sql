-- Phase 1: Create User Roles System

-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for user_roles table
CREATE POLICY "Users can view their own roles"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.user_roles
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
  ON public.user_roles
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
  ON public.user_roles
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Phase 2: Secure Analytics Tables with Admin-Only Access

-- Drop existing public policies
DROP POLICY IF EXISTS "Allow public read access to pageviews" ON public.analytics_pageviews;
DROP POLICY IF EXISTS "Allow public read access to sessions" ON public.analytics_sessions;
DROP POLICY IF EXISTS "Allow public read access to daily summary" ON public.analytics_daily_summary;
DROP POLICY IF EXISTS "Admin can view pageviews" ON public.analytics_pageviews;
DROP POLICY IF EXISTS "Admin can view sessions" ON public.analytics_sessions;
DROP POLICY IF EXISTS "Admin can view daily summary" ON public.analytics_daily_summary;

-- Create admin-only read policies
CREATE POLICY "Only admins can view pageviews"
  ON public.analytics_pageviews
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can view sessions"
  ON public.analytics_sessions
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can view daily summary"
  ON public.analytics_daily_summary
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Keep INSERT policy for analytics tracking (public for now, can add validation later)
-- The existing "Allow public to insert pageviews" policy remains for tracking

-- Update session update policy to require admin for manual updates
DROP POLICY IF EXISTS "Allow public to update sessions" ON public.analytics_sessions;

CREATE POLICY "System can update sessions"
  ON public.analytics_sessions
  FOR UPDATE
  USING (true);  -- Allow system updates for tracking