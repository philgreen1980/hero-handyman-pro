import { useEffect } from 'react';

export function LiveChat() {
  useEffect(() => {
    // Tawk.to live chat widget
    // This is a placeholder implementation - you'll need to sign up at tawk.to and get your property ID
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Only load if not already loaded
    if (!document.getElementById('tawk-to-script')) {
      script.id = 'tawk-to-script';
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup if needed
      const existingScript = document.getElementById('tawk-to-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Remove Tawk widget if it exists
      const tawkWidget = document.getElementById('tawkId');
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

// Alternative: Simple custom chat button that opens contact form
export function SimpleChatButton() {
  const handleChatClick = () => {
    // Scroll to contact form or open modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: navigate to contact page
      window.location.href = '/#contact';
    }
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 z-50 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Chat with us"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        ?
      </span>
    </button>
  );
}
