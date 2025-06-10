
import { KLAVIYO_LIST_ID } from '@/types/klaviyo';

export const subscribeToKlaviyo = async (email: string): Promise<boolean> => {
  console.log('Starting Klaviyo subscription for email:', email);
  console.log('Using list ID:', KLAVIYO_LIST_ID);
  
  // Wait for Klaviyo to load if it hasn't already
  let attempts = 0;
  while (!window._learnq && attempts < 10) {
    console.log('Waiting for Klaviyo to load... attempt', attempts + 1);
    await new Promise(resolve => setTimeout(resolve, 500));
    attempts++;
  }

  if (!window._learnq) {
    console.error('Klaviyo failed to load after waiting');
    return false;
  }

  console.log('Klaviyo _learnq object found:', window._learnq);

  try {
    // Method 1: Use the recommended addToList method
    console.log('Attempting Method 1: addToList');
    window._learnq.push(['addToList', {
      list: KLAVIYO_LIST_ID,
      email: email,
      properties: {
        '$source': 'Welcome Popup',
        'source': 'Welcome Popup'
      }
    }]);

    // Method 2: Also identify the user for tracking
    console.log('Identifying user with email:', email);
    window._learnq.push(['identify', { 
      '$email': email,
      'email': email 
    }]);
    
    // Method 3: Track the signup event
    console.log('Tracking Newsletter Signup event');
    window._learnq.push(['track', 'Newsletter Signup', { 
      '$email': email,
      'email': email,
      'source': 'Welcome Popup',
      'list_id': KLAVIYO_LIST_ID 
    }]);

    // Method 4: Fallback - try the subscribe method as well
    console.log('Attempting fallback method: subscribe');
    window._learnq.push(['subscribe', {
      list: KLAVIYO_LIST_ID,
      email: email,
      '$email': email,
      properties: {
        source: 'Welcome Popup',
        $source: 'Welcome Popup'
      }
    }]);
    
    console.log('All Klaviyo subscription commands sent successfully');
    console.log('_learnq queue after commands:', window._learnq);
    
    return true;
    
  } catch (error) {
    console.error('Klaviyo subscription failed:', error);
    return false;
  }
};

// Alternative method using Klaviyo's forms API
export const subscribeToKlaviyoForm = async (email: string): Promise<boolean> => {
  console.log('Attempting Klaviyo form submission method for:', email);
  
  try {
    const formData = new FormData();
    formData.append('g', KLAVIYO_LIST_ID);
    formData.append('email', email);
    formData.append('$source', 'Welcome Popup');

    const response = await fetch(`https://manage.kmail-lists.com/ajax/subscriptions/subscribe`, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });

    console.log('Klaviyo form submission completed');
    return true;
    
  } catch (error) {
    console.error('Klaviyo form submission failed:', error);
    return false;
  }
};
