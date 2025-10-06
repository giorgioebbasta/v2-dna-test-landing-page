import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Download, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';

const ImportAnalytics = () => {
  const navigate = useNavigate();
  const [analyticsJson, setAnalyticsJson] = useState('');
  const [importing, setImporting] = useState(false);

  const handleImport = async () => {
    if (!analyticsJson.trim()) {
      toast.error('Please paste the analytics JSON data');
      return;
    }

    try {
      setImporting(true);
      toast.info('Validating analytics data...');

      const analyticsData = JSON.parse(analyticsJson);

      // Validate the structure
      if (!analyticsData.timeSeries || !analyticsData.lists) {
        throw new Error('Invalid analytics data format');
      }

      toast.info('Importing data to database...');

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error('You must be logged in to import data');
        return;
      }

      const result = await supabase.functions.invoke('import-lovable-analytics', {
        body: analyticsData,
      });

      if (result.error) {
        throw result.error;
      }

      toast.success(`Successfully imported ${result.data.sessions} sessions and ${result.data.pageviews} pageviews`);
      
      // Navigate back to dashboard
      setTimeout(() => {
        navigate('/portal-a8f3b2e9/dashboard');
      }, 1500);
    } catch (error: any) {
      console.error('Error importing analytics:', error);
      toast.error(error.message || 'Failed to import analytics data');
    } finally {
      setImporting(false);
    }
  };

  const loadSampleData = () => {
    // This is a placeholder - in production, this would be replaced with actual data
    const sampleData = {
      timeSeries: {
        visitors: {
          total: 0,
          data: []
        },
        pageviews: {
          total: 0,
          data: []
        },
        sessionDuration: {
          data: []
        }
      },
      lists: {
        page: { data: [] },
        source: { data: [] },
        device: { data: [] },
        country: { data: [] }
      }
    };
    setAnalyticsJson(JSON.stringify(sampleData, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="max-w-4xl mx-auto px-8 py-12" style={{ marginTop: '64px' }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/portal-a8f3b2e9/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Import Lovable Analytics
            </CardTitle>
            <CardDescription>
              Import your Lovable analytics data into the custom dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Instructions:</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Go to the Lovable Analytics view (click the analytics icon in the top right)</li>
                <li>Open your browser's developer console (F12 or right-click → Inspect)</li>
                <li>Run this command in the console:</li>
              </ol>
              <div className="mt-2 p-3 bg-slate-900 text-slate-50 rounded-md font-mono text-xs overflow-x-auto">
                <code>copy(JSON.stringify(window.__ANALYTICS_DATA__))</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This will copy the analytics data to your clipboard. Then paste it below.
              </p>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Analytics JSON Data
              </label>
              <Textarea
                placeholder="Paste the analytics JSON data here..."
                value={analyticsJson}
                onChange={(e) => setAnalyticsJson(e.target.value)}
                className="min-h-[300px] font-mono text-xs"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleImport}
                disabled={importing || !analyticsJson.trim()}
                className="flex-1"
              >
                {importing ? 'Importing...' : 'Import Data'}
              </Button>
              <Button
                variant="outline"
                onClick={loadSampleData}
                disabled={importing}
              >
                Load Sample
              </Button>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This will import all historical data from Lovable's analytics into your custom dashboard. 
                The process may take a few minutes depending on the amount of data.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImportAnalytics;
