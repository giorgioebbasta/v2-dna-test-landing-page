
// Klaviyo configuration
export const KLAVIYO_COMPANY_ID = '2d11ae';
export const KLAVIYO_LIST_ID = 'Yp9bpB';

// Declare Klaviyo global for TypeScript
declare global {
  interface Window {
    _learnq: any[];
    klaviyo?: any;
  }
}
