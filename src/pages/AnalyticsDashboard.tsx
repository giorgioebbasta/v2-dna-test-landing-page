import { useEffect, useState, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Eye, 
  MousePointer, 
  Activity,
  TrendingUp,
  Clock,
  Monitor,
  Smartphone,
  Chrome
} from 'lucide-react';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { toast } from 'sonner';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface DailySummary {
  date: string;
  visitors: number;
  pageviews: number;
}

interface TopPage {
  page: string;
  views: number;
}

interface DeviceStats {
  name: string;
  value: number;
}

type TimePeriod = 'today' | '7d' | '30d' | '90d';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', '#94a3b8', '#cbd5e1'];

const AnalyticsDashboard = () => {
  const [period, setPeriod] = useState<TimePeriod>('30d');
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalPageviews: 0,
    totalSessions: 0,
    avgSessionDuration: 0,
    activeNow: 0,
  });
  const [chartData, setChartData] = useState<DailySummary[]>([]);
  const [topPages, setTopPages] = useState<TopPage[]>([]);
  const [deviceStats, setDeviceStats] = useState<DeviceStats[]>([]);
  const [browserStats, setBrowserStats] = useState<DeviceStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [realtimeCount, setRealtimeCount] = useState(0);

  const dateRange = useMemo(() => {
    const now = new Date();
    const ranges = {
      today: { from: startOfDay(now), to: endOfDay(now) },
      '7d': { from: subDays(now, 7), to: now },
      '30d': { from: subDays(now, 30), to: now },
      '90d': { from: subDays(now, 90), to: now },
    };
    return ranges[period];
  }, [period]);

  useEffect(() => {
    fetchAnalytics();
    fetchActiveUsers();

    // Real-time subscriptions
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
          setRealtimeCount(prev => prev + 1);
          setStats(prev => ({
            ...prev,
            totalPageviews: prev.totalPageviews + 1,
            activeNow: prev.activeNow + 1
          }));
          
          // Show toast for new visitors
          toast.success('New visitor!', {
            description: `Viewing: ${payload.new.page_path}`,
            duration: 2000,
          });
        }
      )
      .subscribe();

    const sessionChannel = supabase
      .channel('realtime-sessions')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'analytics_sessions'
        },
        () => {
          setStats(prev => ({
            ...prev,
            totalVisitors: prev.totalVisitors + 1,
            totalSessions: prev.totalSessions + 1
          }));
        }
      )
      .subscribe();

    // Refresh active users every 30 seconds
    const interval = setInterval(fetchActiveUsers, 30000);

    return () => {
      supabase.removeChannel(pageviewChannel);
      supabase.removeChannel(sessionChannel);
      clearInterval(interval);
    };
  }, [dateRange]);

  const fetchActiveUsers = async () => {
    try {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const { count } = await supabase
        .from('analytics_sessions')
        .select('*', { count: 'exact', head: true })
        .gte('started_at', fiveMinutesAgo.toISOString())
        .is('ended_at', null);

      setStats(prev => ({ ...prev, activeNow: count || 0 }));
    } catch (error) {
      console.error('Error fetching active users:', error);
    }
  };

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      // Fetch daily summary
      const { data: summaryData } = await supabase
        .from('analytics_daily_summary')
        .select('*')
        .gte('date', format(dateRange.from, 'yyyy-MM-dd'))
        .lte('date', format(dateRange.to, 'yyyy-MM-dd'))
        .order('date', { ascending: true });

      const formattedChart = (summaryData || []).map(item => ({
        date: format(new Date(item.date), period === 'today' ? 'HH:mm' : 'MMM dd'),
        visitors: item.total_visitors,
        pageviews: item.total_pageviews,
      }));

      setChartData(formattedChart);

      // Calculate totals
      const totals = (summaryData || []).reduce(
        (acc, item) => ({
          totalVisitors: acc.totalVisitors + item.total_visitors,
          totalPageviews: acc.totalPageviews + item.total_pageviews,
          totalSessions: acc.totalSessions + item.unique_sessions,
        }),
        { totalVisitors: 0, totalPageviews: 0, totalSessions: 0 }
      );

      // Fetch top pages
      const { data: pageviews } = await supabase
        .from('analytics_pageviews')
        .select('page_path')
        .gte('timestamp', dateRange.from.toISOString())
        .lte('timestamp', dateRange.to.toISOString());

      const pageCounts = (pageviews || []).reduce((acc: Record<string, number>, item) => {
        acc[item.page_path] = (acc[item.page_path] || 0) + 1;
        return acc;
      }, {});

      const topPagesArray = Object.entries(pageCounts)
        .map(([page, views]) => ({ page, views: views as number }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      setTopPages(topPagesArray);

      // Fetch device stats
      const { data: sessions } = await supabase
        .from('analytics_sessions')
        .select('device_type, browser')
        .gte('started_at', dateRange.from.toISOString())
        .lte('started_at', dateRange.to.toISOString());

      const deviceCounts = (sessions || []).reduce((acc: Record<string, number>, item) => {
        const device = item.device_type || 'unknown';
        acc[device] = (acc[device] || 0) + 1;
        return acc;
      }, {});

      const browserCounts = (sessions || []).reduce((acc: Record<string, number>, item) => {
        const browser = item.browser || 'unknown';
        acc[browser] = (acc[browser] || 0) + 1;
        return acc;
      }, {});

      setDeviceStats(
        Object.entries(deviceCounts)
          .map(([name, value]) => ({ name, value: value as number }))
          .sort((a, b) => b.value - a.value)
      );

      setBrowserStats(
        Object.entries(browserCounts)
          .map(([name, value]) => ({ name, value: value as number }))
          .sort((a, b) => b.value - a.value)
      );

      // Calculate average session duration
      const { data: completedSessions } = await supabase
        .from('analytics_sessions')
        .select('started_at, ended_at')
        .gte('started_at', dateRange.from.toISOString())
        .lte('started_at', dateRange.to.toISOString())
        .not('ended_at', 'is', null);

      const avgDuration = (completedSessions || []).reduce((acc, session) => {
        const duration = new Date(session.ended_at).getTime() - new Date(session.started_at).getTime();
        return acc + duration;
      }, 0) / (completedSessions?.length || 1);

      setStats({
        ...totals,
        avgSessionDuration: Math.floor(avgDuration / 1000),
        activeNow: stats.activeNow,
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
      toast.error('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const MetricCard = ({ 
    title, 
    value, 
    icon: Icon, 
    trend, 
    live 
  }: { 
    title: string; 
    value: string | number; 
    icon: any; 
    trend?: number;
    live?: boolean;
  }) => (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {live && (
            <Badge variant="outline" className="gap-1 animate-pulse">
              <Activity className="h-2 w-2 text-green-500" />
              Live
            </Badge>
          )}
        </div>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 text-xs ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="h-3 w-3" />
            {trend > 0 ? '+' : ''}{trend}% from last period
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">Analytics</h1>
                <Badge variant="secondary" className="gap-2">
                  <Activity className="h-3 w-3 text-green-500 animate-pulse" />
                  {stats.activeNow} active now
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Real-time insights and performance metrics
              </p>
            </div>
          </div>

          {/* Time Period Selector */}
          <Tabs value={period} onValueChange={(v) => setPeriod(v as TimePeriod)} className="mt-6">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="7d">7 days</TabsTrigger>
              <TabsTrigger value="30d">30 days</TabsTrigger>
              <TabsTrigger value="90d">90 days</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Visitors"
            value={stats.totalVisitors}
            icon={Users}
          />
          <MetricCard
            title="Total Pageviews"
            value={stats.totalPageviews}
            icon={Eye}
            live
          />
          <MetricCard
            title="Total Sessions"
            value={stats.totalSessions}
            icon={MousePointer}
          />
          <MetricCard
            title="Avg. Session"
            value={formatDuration(stats.avgSessionDuration)}
            icon={Clock}
          />
        </div>

        {/* Visitor Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Visitor Trend</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-[300px] flex items-center justify-center">
                <Activity className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : chartData.length === 0 ? (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No data available for this period
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorVisitors)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              {topPages.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No page data yet
                </div>
              ) : (
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium truncate max-w-[300px]">
                          {page.page}
                        </span>
                      </div>
                      <Badge variant="secondary">{page.views.toLocaleString()} views</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Device Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              {deviceStats.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No device data yet
                </div>
              ) : (
                <div className="space-y-4">
                  {deviceStats.map((device, index) => {
                    const Icon = device.name === 'mobile' ? Smartphone : Monitor;
                    const percentage = ((device.value / stats.totalSessions) * 100).toFixed(1);
                    return (
                      <div key={device.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium capitalize">{device.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {device.value} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Browser Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Browser Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              {browserStats.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No browser data yet
                </div>
              ) : (
                <div className="space-y-4">
                  {browserStats.map((browser) => {
                    const percentage = ((browser.value / stats.totalSessions) * 100).toFixed(1);
                    return (
                      <div key={browser.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Chrome className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{browser.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {browser.value} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pageviews Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Pageviews Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-[200px] flex items-center justify-center">
                  <Activity className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : chartData.length === 0 ? (
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  No data available
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={11}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={11}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="pageviews" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
