-- Performance optimization: Add composite indexes for common query patterns
-- These indexes will significantly speed up analytics queries on smaller instances

-- Composite index for date-range queries on daily summary
CREATE INDEX IF NOT EXISTS idx_analytics_daily_summary_date_created 
ON public.analytics_daily_summary(date DESC, created_at DESC);

-- Composite index for common analytics dashboard queries  
CREATE INDEX IF NOT EXISTS idx_analytics_pageviews_timestamp_page 
ON public.analytics_pageviews(timestamp DESC, page_path);

-- Composite index for session analytics queries
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_started_device 
ON public.analytics_sessions(started_at DESC, device_type, browser);

-- Partial index for active sessions (NULL ended_at means active)
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_active 
ON public.analytics_sessions(started_at DESC)
WHERE ended_at IS NULL;