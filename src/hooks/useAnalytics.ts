import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Generate or retrieve session ID from sessionStorage
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_session_id', sessionId);
    
    // Create new session in database
    createSession(sessionId);
  }
  return sessionId;
};

// Detect device type
const getDeviceType = (): string => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Detect browser
const getBrowser = (): string => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Other';
};

// Get country from timezone (simple approximation)
const getCountryFromTimezone = (): string => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Map common timezones to countries (simplified)
    if (timezone.includes('America/New_York') || timezone.includes('America/Chicago')) return 'United States';
    if (timezone.includes('America/Los_Angeles')) return 'United States';
    if (timezone.includes('Europe/London')) return 'United Kingdom';
    if (timezone.includes('Europe/Paris')) return 'France';
    if (timezone.includes('Europe/Berlin')) return 'Germany';
    if (timezone.includes('Asia/Tokyo')) return 'Japan';
    if (timezone.includes('Asia/Shanghai')) return 'China';
    if (timezone.includes('Australia')) return 'Australia';
    // Extract region from timezone as fallback
    const parts = timezone.split('/');
    return parts[0] || 'Unknown';
  } catch {
    return 'Unknown';
  }
};

// Create session in database
const createSession = async (sessionId: string) => {
  try {
    await supabase.from('analytics_sessions').insert({
      id: sessionId,
      device_type: getDeviceType(),
      browser: getBrowser(),
      country: getCountryFromTimezone(),
      started_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to create analytics session:', error);
  }
};

// Update session end time
const updateSessionEnd = async (sessionId: string, pageCount: number) => {
  try {
    await supabase
      .from('analytics_sessions')
      .update({
        ended_at: new Date().toISOString(),
        page_count: pageCount,
      })
      .eq('id', sessionId);
  } catch (error) {
    console.error('Failed to update analytics session:', error);
  }
};

// Batch queue for pageviews to reduce database writes
let pageviewQueue: Array<{
  page_path: string;
  referrer: string | null;
  user_agent: string;
  session_id: string;
  timestamp: string;
}> = [];
let flushTimer: NodeJS.Timeout | null = null;

// Flush pageview queue to database
const flushPageviews = async () => {
  if (pageviewQueue.length === 0) return;
  
  const toInsert = [...pageviewQueue];
  pageviewQueue = [];
  
  try {
    // Batch insert all queued pageviews at once
    await supabase.from('analytics_pageviews').insert(toInsert);
  } catch (error) {
    console.error('Failed to track page views:', error);
    // On error, don't retry to avoid infinite loops on small instances
  }
};

// Track page view with batching (reduces DB writes by ~90%)
const trackPageView = async (path: string, sessionId: string) => {
  // Add to queue instead of immediate insert
  pageviewQueue.push({
    page_path: path,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
    session_id: sessionId,
    timestamp: new Date().toISOString(),
  });
  
  // Clear existing timer
  if (flushTimer) clearTimeout(flushTimer);
  
  // Batch inserts every 2 seconds or when queue reaches 10 items
  if (pageviewQueue.length >= 10) {
    await flushPageviews();
  } else {
    flushTimer = setTimeout(flushPageviews, 2000);
  }
};

export const useAnalytics = () => {
  const sessionId = useRef<string>(getSessionId());
  const pageCount = useRef<number>(0);

  useEffect(() => {
    // Track initial page view
    pageCount.current += 1;
    trackPageView(window.location.pathname, sessionId.current);

    // Update session on page unload
    const handleUnload = () => {
      // Flush any pending pageviews before leaving
      flushPageviews();
      updateSessionEnd(sessionId.current, pageCount.current);
    };

    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('pagehide', handleUnload); // For mobile browsers

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('pagehide', handleUnload);
      // Cleanup timer
      if (flushTimer) clearTimeout(flushTimer);
    };
  }, []);

  // Track route changes
  const trackRoute = (path: string) => {
    pageCount.current += 1;
    trackPageView(path, sessionId.current);
  };

  return { trackRoute };
};
