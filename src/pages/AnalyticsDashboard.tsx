import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Users, Eye, MousePointer, Activity } from 'lucide-react';
import { format, subDays } from 'date-fns';
import { toast } from 'sonner';

interface DailySummary {
  date: string;
  total_visitors: number;
  total_pageviews: number;
  unique_sessions: number;
}

interface TopPage {
  page_path: string;
  views: number;
}

const AnalyticsDashboard = () => {
  const [dailyData, setDailyData] = useState<DailySummary[]>([]);
  const [topPages, setTopPages] = useState<TopPage[]>([]);
  const [totalStats, setTotalStats] = useState({
    totalVisitors: 0,
    totalPageviews: 0,
    totalSessions: 0,
  });
  const [dateRange, setDateRange] = useState({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const [loading, setLoading] = useState(true);
  const [realtimePageviews, setRealtimePageviews] = useState(0);
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    fetchAnalytics();
    
    // Subscribe to real-time pageview inserts
    const pageviewChannel = supabase
      .channel('realtime-pageviews')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'analytics_pageviews'
        },
        (payload) => {
          console.log('New pageview:', payload);
          setRealtimePageviews(prev => prev + 1);
          setTotalStats(prev => ({
            ...prev,
            totalPageviews: prev.totalPageviews + 1
          }));
          toast.success('New visitor on your site!', {
            description: `Page: ${payload.new.page_path}`,
            duration: 3000,
          });
        }
      )
      .subscribe();

    // Subscribe to real-time session inserts
    const sessionChannel = supabase
      .channel('realtime-sessions')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'analytics_sessions'
        },
        (payload) => {
          console.log('New session:', payload);
          setActiveSessions(prev => prev + 1);
          setTotalStats(prev => ({
            ...prev,
            totalVisitors: prev.totalVisitors + 1,
            totalSessions: prev.totalSessions + 1
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(pageviewChannel);
      supabase.removeChannel(sessionChannel);
    };
  }, [dateRange]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      // Fetch daily summary data
      const { data: summaryData, error: summaryError } = await supabase
        .from('analytics_daily_summary')
        .select('*')
        .gte('date', format(dateRange.from, 'yyyy-MM-dd'))
        .lte('date', format(dateRange.to, 'yyyy-MM-dd'))
        .order('date', { ascending: true });

      if (summaryError) throw summaryError;

      const formattedData = (summaryData || []).map((item) => ({
        date: format(new Date(item.date), 'MMM dd'),
        total_visitors: item.total_visitors,
        total_pageviews: item.total_pageviews,
        unique_sessions: item.unique_sessions,
      }));

      setDailyData(formattedData);

      // Calculate totals
      const totals = (summaryData || []).reduce(
        (acc, item) => ({
          totalVisitors: acc.totalVisitors + item.total_visitors,
          totalPageviews: acc.totalPageviews + item.total_pageviews,
          totalSessions: acc.totalSessions + item.unique_sessions,
        }),
        { totalVisitors: 0, totalPageviews: 0, totalSessions: 0 }
      );

      setTotalStats(totals);

      // Fetch top pages
      const { data: pageviewsData, error: pageviewsError } = await supabase
        .from('analytics_pageviews')
        .select('page_path')
        .gte('timestamp', dateRange.from.toISOString())
        .lte('timestamp', dateRange.to.toISOString());

      if (pageviewsError) throw pageviewsError;

      // Count page views
      const pageCounts = (pageviewsData || []).reduce((acc: Record<string, number>, item) => {
        acc[item.page_path] = (acc[item.page_path] || 0) + 1;
        return acc;
      }, {});

      const topPagesArray = Object.entries(pageCounts)
        .map(([page_path, views]) => ({ page_path, views: views as number }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 10);

      setTopPages(topPagesArray);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
              <Badge variant="outline" className="gap-2 animate-pulse">
                <Activity className="h-3 w-3 text-green-500" />
                Live
              </Badge>
            </div>
            <p className="text-muted-foreground mt-2">Real-time website performance tracking</p>
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                {format(dateRange.from, 'MMM dd, yyyy')} - {format(dateRange.to, 'MMM dd, yyyy')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="range"
                selected={{ from: dateRange.from, to: dateRange.to }}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    setDateRange({ from: range.from, to: range.to });
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.totalVisitors.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Unique sessions tracked</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pageviews</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.totalPageviews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Pages viewed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.totalSessions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total sessions</p>
            </CardContent>
          </Card>
        </div>

        {/* Visitors Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Visitor Trend</CardTitle>
            <CardDescription>Daily unique visitors over time</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-[300px] flex items-center justify-center">Loading...</div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total_visitors" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-[300px] flex items-center justify-center">Loading...</div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topPages}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="page_path" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
