
// Klaviyo configuration
export const KLAVIYO_COMPANY_ID = 'UKq26T';
export const KLAVIYO_LIST_ID = 'Yp9bpB'; // Verify this is correct in your Klaviyo dashboard
export const KLAVIYO_POPUP_FORM_ID = '202506'; // Welcome Popup DNA form ID

// Debug information
console.log('Klaviyo Config - Company ID:', KLAVIYO_COMPANY_ID);
console.log('Klaviyo Config - List ID:', KLAVIYO_LIST_ID);
console.log('Klaviyo Config - Popup Form ID:', KLAVIYO_POPUP_FORM_ID);

// Declare Klaviyo global for TypeScript
declare global {
  interface Window {
    _learnq: any[];
    klaviyo?: any;
  }
}

// Initialize Klaviyo popup functionality
if (typeof window !== 'undefined') {
  window._learnq = window._learnq || [];
  
  window.addEventListener('load', () => {
    console.log('Page loaded, initializing Klaviyo popup...');
    
    // Check if user has already seen the popup
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenWelcome) {
      // Wait 5 seconds then show the Klaviyo popup
      setTimeout(() => {
        console.log('Triggering Klaviyo popup form:', KLAVIYO_POPUP_FORM_ID);
        
        if (window._learnq) {
          // Show the specific Klaviyo popup form
          window._learnq.push(['show', { 
            '$popup_id': KLAVIYO_POPUP_FORM_ID 
          }]);
          
          // Mark as seen to prevent showing again
          localStorage.setItem('hasSeenWelcomePopup', 'true');
        } else {
          console.error('Klaviyo not loaded, cannot show popup');
        }
      }, 5000);
    } else {
      console.log('User has already seen welcome popup, skipping');
    }
    
    // Debug Klaviyo availability
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
