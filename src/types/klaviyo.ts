
// Klaviyo configuration
export const KLAVIYO_COMPANY_ID = 'UKq26T';
export const KLAVIYO_LIST_ID = 'Yp9bpB'; // Verify this is correct in your Klaviyo dashboard

// Debug information
console.log('Klaviyo Config - Company ID:', KLAVIYO_COMPANY_ID);
console.log('Klaviyo Config - List ID:', KLAVIYO_LIST_ID);

// Declare Klaviyo global for TypeScript
declare global {
  interface Window {
    _learnq: any[];
    klaviyo?: any;
  }
}

// Add Klaviyo loading detection
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    console.log('Page loaded, checking Klaviyo status...');
    console.log('_learnq available:', !!window._learnq);
    console.log('klaviyo object available:', !!window.klaviyo);
    
    // Wait a bit more and check again
    setTimeout(() => {
      console.log('After 2s - _learnq available:', !!window._learnq);
      console.log('After 2s - klaviyo object available:', !!window.klaviyo);
      if (window._learnq) {
        console.log('_learnq queue length:', window._learnq.length);
      }
    }, 2000);
  });
}
