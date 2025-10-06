-- Add explicit deny policies for analytics data modification
-- This prevents any unauthorized updates or deletions

-- Analytics pageviews: Only admins can update/delete
CREATE POLICY "Only admins can update pageviews"
  ON public.analytics_pageviews
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete pageviews"
  ON public.analytics_pageviews
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Analytics daily summary: Only admins can insert/update/delete
CREATE POLICY "Only admins can insert daily summary"
  ON public.analytics_daily_summary
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update daily summary"
  ON public.analytics_daily_summary
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete daily summary"
  ON public.analytics_daily_summary
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Analytics sessions: Only admins can delete
CREATE POLICY "Only admins can delete sessions"
  ON public.analytics_sessions
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));