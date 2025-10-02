-- Add RLS policies for analytics tables to make data visible

-- Analytics daily summary policies
CREATE POLICY "Allow public read access to daily summary"
ON analytics_daily_summary
FOR SELECT
USING (true);

-- Analytics sessions policies
CREATE POLICY "Allow public read access to sessions"
ON analytics_sessions
FOR SELECT
USING (true);

-- Analytics pageviews policies
CREATE POLICY "Allow public read access to pageviews"
ON analytics_pageviews
FOR SELECT
USING (true);