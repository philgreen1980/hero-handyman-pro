/**
 * Enhanced Form Tracking for GA4
 * Tracks user interactions with contact forms to identify drop-off points
 */

// Track when user scrolls to the contact form section
export const trackFormView = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'form_view', {
      event_category: 'Contact Form',
      event_label: 'Form Scrolled Into View',
    });
    console.log('📊 GA4: form_view event sent');
  }
};

// Track when user starts interacting with the form (first field focus)
export const trackFormStart = (fieldName: string) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'form_start', {
      event_category: 'Contact Form',
      event_label: 'User Started Form',
      first_field: fieldName,
    });
    console.log(`📊 GA4: form_start event sent (first field: ${fieldName})`);
  }
};

// Track individual field interactions
export const trackFieldInteraction = (fieldName: string) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'form_field_interaction', {
      event_category: 'Contact Form',
      event_label: `Field Interaction: ${fieldName}`,
      field_name: fieldName,
    });
    console.log(`📊 GA4: form_field_interaction event sent (${fieldName})`);
  }
};

// Track form abandonment (user leaves a field empty after focusing)
export const trackFormAbandonment = (lastFieldTouched: string, fieldsCompleted: number, totalFields: number) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'form_abandonment', {
      event_category: 'Contact Form',
      event_label: `Form Abandoned at ${lastFieldTouched}`,
      last_field: lastFieldTouched,
      fields_completed: fieldsCompleted,
      total_fields: totalFields,
      completion_rate: Math.round((fieldsCompleted / totalFields) * 100),
    });
    console.log(`📊 GA4: form_abandonment event sent (${fieldsCompleted}/${totalFields} fields completed, last: ${lastFieldTouched})`);
  }
};

// Track CTA button clicks (Get a Free Quote, Call Now, etc.)
export const trackCTAButtonClick = (buttonText: string, buttonLocation: string) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'CTA',
      event_label: buttonText,
      button_location: buttonLocation,
    });
    console.log(`📊 GA4: cta_click event sent (${buttonText} at ${buttonLocation})`);
  }
};

// Track scroll depth to form section
export const trackScrollToForm = (scrollDepth: number) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'scroll_to_form', {
      event_category: 'Engagement',
      event_label: 'Scrolled to Contact Form',
      scroll_depth: scrollDepth,
    });
    console.log(`📊 GA4: scroll_to_form event sent (depth: ${scrollDepth}%)`);
  }
};
