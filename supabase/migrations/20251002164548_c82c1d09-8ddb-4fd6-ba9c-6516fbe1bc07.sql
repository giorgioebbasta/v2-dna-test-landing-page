-- Create analytics tables for permanent tracking

-- Analytics pageviews table
CREATE TABLE public.analytics_pageviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  session_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Analytics sessions table
CREATE TABLE public.analytics_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  page_count INTEGER DEFAULT 1,
  device_type TEXT,
  browser TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Analytics daily summary table
CREATE TABLE public.analytics_daily_summary (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL UNIQUE,
  total_visitors INTEGER DEFAULT 0,
  total_pageviews INTEGER DEFAULT 0,
  unique_sessions INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.analytics_pageviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_daily_summary ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow public to insert pageviews (for tracking)
CREATE POLICY "Allow public to insert pageviews"
ON public.analytics_pageviews
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public to insert sessions"
ON public.analytics_sessions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public to update sessions"
ON public.analytics_sessions
FOR UPDATE
TO anon
USING (true);

-- Admin-only SELECT policies (for viewing analytics)
CREATE POLICY "Admin can view pageviews"
ON public.analytics_pageviews
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admin can view sessions"
ON public.analytics_sessions
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admin can view daily summary"
ON public.analytics_daily_summary
FOR SELECT
TO authenticated
USING (true);

-- Create indexes for performance
CREATE INDEX idx_pageviews_timestamp ON public.analytics_pageviews(timestamp);
CREATE INDEX idx_pageviews_session_id ON public.analytics_pageviews(session_id);
CREATE INDEX idx_pageviews_page_path ON public.analytics_pageviews(page_path);
CREATE INDEX idx_sessions_started_at ON public.analytics_sessions(started_at);
CREATE INDEX idx_daily_summary_date ON public.analytics_daily_summary(date);

-- Function to aggregate daily analytics
CREATE OR REPLACE FUNCTION public.aggregate_daily_analytics(target_date DATE)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.analytics_daily_summary (date, total_visitors, total_pageviews, unique_sessions)
  SELECT
    target_date,
    COUNT(DISTINCT session_id) as total_visitors,
    COUNT(*) as total_pageviews,
    COUNT(DISTINCT session_id) as unique_sessions
  FROM public.analytics_pageviews
  WHERE DATE(timestamp) = target_date
  ON CONFLICT (date) DO UPDATE SET
    total_visitors = EXCLUDED.total_visitors,
    total_pageviews = EXCLUDED.total_pageviews,
    unique_sessions = EXCLUDED.unique_sessions;
END;
$$;