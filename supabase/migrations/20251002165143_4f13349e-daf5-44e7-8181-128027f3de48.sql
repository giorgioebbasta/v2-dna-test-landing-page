-- Enable realtime for analytics tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.analytics_pageviews;
ALTER PUBLICATION supabase_realtime ADD TABLE public.analytics_sessions;