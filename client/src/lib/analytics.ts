/**
 * Google Analytics 4 (GA4) Event Tracking Utilities
 * 
 * This file provides helper functions for tracking user interactions
 * with Google Analytics 4.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event in GA4
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  console.log('🎯 trackEvent called:', { eventName, eventParams });
  if (typeof window.gtag !== 'undefined') {
    console.log('🎯 window.gtag exists, calling gtag...');
    window.gtag('event', eventName, eventParams);
    console.log('🎯 gtag called successfully');
  } else {
    console.warn('⚠️ window.gtag is undefined - GA4 not loaded');
  }
}

/**
 * Track form submission (lead generation)
 */
export function trackFormSubmission(formName: string) {
  console.log('📊 trackFormSubmission called with formName:', formName);
  console.log('📊 Calling trackEvent with generate_lead...');
  trackEvent('generate_lead', {
    event_category: 'Contact Form',
    event_label: formName,
    value: 1
  });
  console.log('📊 trackEvent completed');
}

/**
 * Track phone number click
 */
export function trackPhoneClick(phoneNumber: string, location: string) {
  trackEvent('phone_click', {
    event_category: 'Engagement',
    event_label: `Phone: ${phoneNumber}`,
    location: location
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(ctaText: string, location: string) {
  trackEvent('cta_click', {
    event_category: 'Engagement',
    event_label: ctaText,
    location: location
  });
}

/**
 * Track service page view
 */
export function trackServiceView(serviceName: string) {
  trackEvent('view_service', {
    event_category: 'Service',
    event_label: serviceName
  });
}

/**
 * Track city landing page view
 */
export function trackCityView(cityName: string) {
  trackEvent('view_city', {
    event_category: 'Location',
    event_label: cityName
  });
}
