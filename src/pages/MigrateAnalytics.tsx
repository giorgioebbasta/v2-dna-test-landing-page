import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Upload, CheckCircle } from 'lucide-react';
import { format, eachDayOfInterval, subDays } from 'date-fns';

const MigrateAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Sample historical data structure - replace with your actual analytics data
  const generateHistoricalData = () => {
    const endDate = new Date();
    const startDate = subDays(endDate, 365); // Last year
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // This is sample data - you'll need to replace this with your actual analytics
    return days.map(day => ({
      date: format(day, 'yyyy-MM-dd'),
      visitors: Math.floor(Math.random() * 500) + 100, // Replace with actual data
      pageviews: Math.floor(Math.random() * 1000) + 200, // Replace with actual data
    }));
  };

  const handleMigration = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const historicalData = generateHistoricalData();

      console.log('Starting migration of', historicalData.length, 'days...');

      const { data, error: functionError } = await supabase.functions.invoke(
        'migrate-historical-analytics',
        {
          body: { historicalData }
        }
      );

      if (functionError) throw functionError;

      setResult(data);
      console.log('Migration completed:', data);
    } catch (err: any) {
      console.error('Migration error:', err);
      setError(err.message || 'Failed to migrate analytics data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Migrate Historical Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Import your historical analytics data into the permanent database
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Migration</CardTitle>
            <CardDescription>
              This will import all your historical analytics data into the database for permanent storage.
              Once migrated, you'll never lose your analytics history.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!result && !error && (
              <Alert>
                <AlertDescription>
                  <strong>Note:</strong> Before running this migration, make sure to update the
                  <code className="mx-1 px-2 py-1 bg-slate-100 rounded">generateHistoricalData()</code>
                  function in <code className="px-2 py-1 bg-slate-100 rounded">MigrateAnalytics.tsx</code>
                  with your actual analytics data.
                </AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {result && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Migration Successful!</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Migrated {result.migratedDays} days of data</li>
                    <li>• Total visitors: {result.totalVisitors?.toLocaleString()}</li>
                    <li>• Total pageviews: {result.totalPageviews?.toLocaleString()}</li>
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleMigration}
              disabled={loading || !!result}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Migrating...
                </>
              ) : result ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Migration Complete
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Start Migration
                </>
              )}
            </Button>

            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>What this does:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Imports historical visitor data into the database</li>
                <li>Creates daily summary records for each day</li>
                <li>Preserves all historical analytics permanently</li>
                <li>Enables querying any date range in your dashboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>After migration, you can:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>View all historical data in the Analytics Dashboard</li>
              <li>Query any date range without limitations</li>
              <li>Create custom reports and visualizations</li>
              <li>Export data for external analysis</li>
            </ul>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.location.href = '/analytics-dashboard'}
            >
              Go to Analytics Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MigrateAnalytics;
