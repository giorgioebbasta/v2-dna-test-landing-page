
import { KLAVIYO_LIST_ID } from '@/types/klaviyo';

export const subscribeToKlaviyo = async (email: string): Promise<boolean> => {
  console.log('Starting Klaviyo subscription for email:', email);
  
  // Wait for Klaviyo to load if it hasn't already
  let attempts = 0;
  while (!window._learnq && attempts < 10) {
    console.log('Waiting for Klaviyo to load...');
    await new Promise(resolve => setTimeout(resolve, 500));
    attempts++;
  }

  if (!window._learnq) {
    console.error('Klaviyo failed to load after waiting');
    return false;
  }

  try {
    console.log('Using Klaviyo _learnq method');
    
    // First identify the user
    window._learnq.push(['identify', { 
      $email: email,
      email: email 
    }]);
    
    // Track the signup event
    window._learnq.push(['track', 'Newsletter Signup', { 
      $email: email,
      email: email,
      source: 'Welcome Popup',
      list_id: KLAVIYO_LIST_ID 
    }]);
    
    // Subscribe to the specific list
    window._learnq.push(['subscribe', {
      list: KLAVIYO_LIST_ID,
      email: email,
      $email: email,
      properties: {
        source: 'Welcome Popup',
        $source: 'Welcome Popup'
      }
    }]);
    
    console.log('Klaviyo subscription commands sent successfully');
    return true;
    
  } catch (error) {
    console.error('Klaviyo subscription failed:', error);
    return false;
  }
};
