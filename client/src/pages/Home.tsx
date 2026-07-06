import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star } from "lucide-react";
import { useEffect, useState, useRef, FormEvent } from "react";
import { toast } from "sonner";
import { trackFormSubmission, trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { trackFormView, trackFormStart, trackFieldInteraction, trackScrollToForm } from "@/lib/formTracking";
import SEO from "@/components/SEO";

export default function Home() {
  console.log('Home component rendering');
  
  const seoData = {
    title: "Handyman Near You | Fast Home Repairs in St. Louis & Metro East",
    description: "Looking for a handyman near you? Same-day drywall repair, door repair, deck repair & home fixes across St. Louis, MO, Edwardsville, O'Fallon & Metro East IL. Call 800-741-6056 for a free quote.",
    keywords: "handyman near me, handyman St. Louis MO, handyman Edwardsville IL, handyman O'Fallon IL, home repair St. Louis, drywall repair near me, door repair near me, deck repair near me, home repairs Metro East",
    canonicalUrl: "https://herohandymanpro.com"
  };
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialService, setInitialService] = useState('');
  const [initialCity, setInitialCity] = useState('');
  const [formStarted, setFormStarted] = useState(false);
  const [formViewed, setFormViewed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  // Track scroll to form section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !formViewed) {
            setFormViewed(true);
            trackFormView();
            
            // Calculate scroll depth
            const scrollDepth = Math.round(
              (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            trackScrollToForm(scrollDepth);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => observer.disconnect();
  }, [formViewed]);

  // Parse URL parameters on component mount (from hash fragment)
  useEffect(() => {
    // Extract query string from hash (e.g., /#contact?service=door-repair)
    const hash = window.location.hash;
    const queryStart = hash.indexOf('?');
    const queryString = queryStart >= 0 ? hash.substring(queryStart + 1) : '';
    const params = new URLSearchParams(queryString);
    
    const serviceParam = params.get('service');
    const cityParam = params.get('city');
    
    if (serviceParam) setInitialService(serviceParam);
    if (cityParam) setInitialCity(cityParam);
  }, []);

  // Expose submit function globally so it can be called from inline onclick
  useEffect(() => {
    (window as any).submitContactForm = async () => {
      alert('submitContactForm function called!');
      console.log('📨 submitContactForm function executing...');
      const form = document.querySelector('form');
      if (!form) {
        alert('Form not found');
        return;
      }

      const formData = new FormData(form);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        city: formData.get('city') as string,
        service: formData.get('service') as string,
        message: formData.get('message') as string,
      };

      console.log('📤 Submitting form data:', data);
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('📥 Response received:', { ok: response.ok, status: response.status, result });

        if (response.ok) {
          console.log('✅ Form submission successful, calling trackFormSubmission...');
          // Track successful form submission in GA4
          try {
            trackFormSubmission('Homepage Contact Form');
            console.log('✅ trackFormSubmission called successfully');
            
            // Ensure GA4 event is sent even if gtag isn't loaded yet
            const sendGA4Event = () => {
              if (typeof (window as any).gtag === 'function') {
                (window as any).gtag('event', 'generate_lead', {
                  event_category: 'Contact Form',
                  event_label: 'Homepage Contact Form',
                  value: 1
                });
                console.log('✅ GA4 generate_lead event sent via gtag');
                return true;
              } else if (Array.isArray((window as any).dataLayer)) {
                // Fallback: push directly to dataLayer
                (window as any).dataLayer.push({
                  event: 'generate_lead',
                  event_category: 'Contact Form',
                  event_label: 'Homepage Contact Form',
                  value: 1
                });
                console.log('✅ GA4 generate_lead event sent via dataLayer');
                return true;
              }
              return false;
            };
            
            // Try immediately
            if (!sendGA4Event()) {
              console.warn('⚠️ gtag not ready, waiting 500ms...');
              // Wait and try again
              setTimeout(() => {
                if (!sendGA4Event()) {
                  console.error('❌ GA4 still not available after wait');
                }
              }, 500);
            }
          } catch (error) {
            console.error('❌ Error in GA4 tracking:', error);
          }
          toast.success('✅ Form submitted! GA4 event sent. We strive to respond immediately.');
          form.reset();
        } else {
          toast.error(result.error || 'Something went wrong. Please call 800-741-6056');
        }
      } catch (error) {
        toast.error('Something went wrong. Please call 800-741-6056');
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: Event) => {
    console.log('Form submit triggered!');
    e.preventDefault();
    if (isSubmitting) {
      console.log('Already submitting, returning');
      return;
    }
    
    console.log('Setting isSubmitting to true');
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };
    console.log('Form data:', data);
    
    try {
      console.log('Sending fetch request to /api/contact');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast.success(result.message || 'Thank you! We strive to respond immediately.');
        form.reset();
      } else {
        toast.error(result.error || 'Something went wrong. Please call 800-741-6056');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please call 800-741-6056');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = async () => {
    console.log('=== BUTTON CLICKED ===');
    
    const form = formRef.current;
    if (!form) {
      console.error('Form ref is null');
      toast.error('Form not found');
      return;
    }
    
    if (isSubmitting) {
      console.log('Already submitting');
      return;
    }
    
    setIsSubmitting(true);
    console.log('Collecting form data...');
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };
    
    console.log('Form data collected:', data);
    
    try {
      console.log('Sending to /api/contact...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      console.log('Response received:', response.status);
      const result = await response.json();
      console.log('Result:', result);
      
      if (response.ok) {
        toast.success(result.message || 'Thank you! We strive to respond immediately.');
        form.reset();
      } else {
        toast.error(result.error || 'Something went wrong. Please call 800-741-6056');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please call 800-741-6056');
    } finally {
      setIsSubmitting(false);
      console.log('=== SUBMISSION COMPLETE ===');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <SEO {...seoData} />
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Hero Handyman Pro",
          "url": "https://www.herohandymanpro.com",
          "telephone": "800-741-6056",
          "email": "info@herohandymanpro.com",
          "description": "Hero Handyman Pro provides reliable handyman, carpentry, deck repair, and home repair services in St. Louis and Metro East.",
          "areaServed": [
            "St. Louis, MO",
            "O'Fallon, IL",
            "Edwardsville, IL",
            "Collinsville, IL",
            "Belleville, IL",
            "Glen Carbon, IL",
            "St. Charles, MO",
            "Ballwin, MO",
            "Fenton, MO"
          ],
          "serviceType": [
            "Handyman Services",
            "Deck Repair",
            "Carpentry",
            "Door Repair",
            "Drywall Repair",
            "Ceiling Fan Installation",
            "Faucet & Fixture Installation",
            "Home Repair"
          ],
          "priceRange": "$$",
          "openingHours": ["Mo-Fr 08:00-17:00"]
        })}
      </script>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-[#f9fafb] py-12 md:py-16 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">
            {/* Left: Copy */}
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-teal-800 mb-3">
                Serving St. Louis & Metro East
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Handyman <span className="text-teal-700">Near You</span> — Fast Home Repairs in St. Louis & Metro East
              </h1>
              <p className="text-lg text-gray-600 mb-5 max-w-xl">
                <strong className="text-gray-800">Trusted home repairs and remodeling, done right the first time.</strong><br />
                Fast, reliable handyman services from a seasoned professional who treats your home like his own.
                From deck repairs and doors to drywall and small remodeling jobs, Hero Handyman Pro helps homeowners across St. Louis and Metro East get quality work done without the hassle.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="text-xs px-3 py-2 rounded-full border-2 border-orange-500 bg-white inline-flex items-center gap-1.5 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                  4.9 Avg Rating
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  30+ Years of Experience
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Licensed & Insured
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Same-Day / Next-Day Options
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  5-Star Service Homeowners Trust
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-3">
                <Link href="/booking/">
                  <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-6">
                    Get My Free Quote
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Hero CTA')}>
                  <Button size="lg" variant="outline" className="border-2 border-teal-800 text-teal-800 hover:bg-cyan-50 rounded-full px-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: 800-741-6056
                  </Button>
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Tell us about your project in a few clicks — we strive to respond immediately.
              </p>
            </div>

            {/* Right: Phil Card */}
            <div>
              <div className="bg-white rounded-2xl p-5 shadow-xl">
                <div className="rounded-xl overflow-hidden border-2 border-gray-200 mb-3">
                  <img 
                    src="/phil-green.jpg"
                    alt="Phil Green, owner of Hero Handyman Pro, professional handyman with 30+ years experience" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  <strong className="text-teal-800">Meet Phil, Your Home's Hero.</strong><br />
                  A seasoned craftsman serving St. Louis & Metro East homeowners with honest, dependable repairs and
                  high-quality workmanship — every single time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Area Quick Links */}
      <section className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700">Serving:</span>
            <Link href="/service-areas/ofallon-handyman-services/" className="text-teal-800 hover:underline">O'Fallon IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/edwardsville-handyman-services/" className="text-teal-800 hover:underline">Edwardsville IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/collinsville-handyman-services/" className="text-teal-800 hover:underline">Collinsville IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/belleville-handyman-services/" className="text-teal-800 hover:underline">Belleville IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/glen-carbon-handyman-services/" className="text-teal-800 hover:underline">Glen Carbon IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/st-louis-handyman-services/" className="text-teal-800 hover:underline">St. Louis MO</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/st-charles-handyman-services/" className="text-teal-800 hover:underline">St. Charles MO</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Handyman Services That Keep Your Home in Top Shape
              </h2>
              <p className="text-gray-600">
                Whether it's a small repair or a bigger project, Hero Handyman Pro handles the details so you don't have to.
              </p>
            </div>
            <Link href="/handyman-services/" className="text-sm font-semibold text-teal-800 hover:underline whitespace-nowrap flex-shrink-0">
              View all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Carpentry & Exterior Repairs</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/deck-repair" className="hover:text-teal-700">
                  Deck & Carpentry Repairs
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Fix sagging decks, rotted trim, railings, steps, and other wood damage before it becomes a bigger problem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/deck-repair" className="text-sm font-semibold text-teal-800 hover:underline">Deck repair →</Link>
                <Link href="/carpentry-services" className="text-sm font-semibold text-teal-800 hover:underline">Carpentry →</Link>
                <Link href="/deck-repair-edwardsville-il" className="text-sm font-semibold text-teal-600 hover:underline">Deck repair near you →</Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Doors & Windows</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/door-installation" className="hover:text-teal-700">
                  Door Repair & Replacement
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Sticking, drafty, or damaged doors? We repair or replace entry, patio, and interior doors for a smoother, safer home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/door-installation" className="text-sm font-semibold text-teal-800 hover:underline">Door services →</Link>
                <Link href="/door-repair-edwardsville-il" className="text-sm font-semibold text-teal-600 hover:underline">Door repair near you →</Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Walls & Ceilings</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/drywall-repair" className="hover:text-teal-700">
                  Drywall & Ceiling Repair
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                From small dings and nail pops to water damage and cracked ceilings, we restore your walls to a smooth, paint-ready finish.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/drywall-repair" className="text-sm font-semibold text-teal-800 hover:underline">Drywall repair →</Link>
                <Link href="/drywall-repair-edwardsville-il" className="text-sm font-semibold text-teal-600 hover:underline">Drywall repair near you →</Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Fixtures & Comfort</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/ceiling-fan-installation/" className="hover:text-teal-700">
                  Ceiling Fan Installation
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Keep your rooms comfortable and energy-efficient with professionally installed ceiling fans and lighting fixtures.
              </p>
              <Link href="/handyman-services/ceiling-fan-installation/" className="text-sm font-semibold text-teal-800 hover:underline">
                Fan installation details →
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Plumbing Fixtures</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/faucet-install-and-repair/" className="hover:text-teal-700">
                  Faucet, Sink & Toilet Help
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Dripping faucets, loose toilets, and outdated fixtures — we handle the light plumbing jobs that slow you down.
              </p>
              <Link href="/handyman-services/faucet-install-and-repair/" className="text-sm font-semibold text-teal-800 hover:underline">
                View plumbing fixture help →
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">General Handyman</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/" className="hover:text-teal-700">
                  General Home Repairs & Punch Lists
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Have a list of small jobs? We love "honey-do" lists — let us knock out multiple tasks in a single visit.
              </p>
              <Link href="/handyman-services/" className="text-sm font-semibold text-teal-800 hover:underline">
                See all handyman services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="container max-w-[1120px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Save Time & Money with Our Service Packages
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-3xl mx-auto">
            Flat-rate bundles designed for new homeowners, busy families, and anyone with a growing to-do list. Clear pricing, one-visit solutions, and no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/handyman-service-packages">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold text-lg h-14 px-8">
                View Service Packages
              </Button>
            </Link>
            <a href="tel:800-741-6056">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold text-lg h-14 px-8">
                <Phone className="w-5 h-5 mr-2" />
                Ask About Packages
              </Button>
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2">New Home Peace of Mind</h3>
              <p className="text-teal-50 mb-3">Move-in essentials handled in one visit. TV mounting, ceiling fans, safety checks, and more.</p>
              <p className="text-2xl font-bold">$699</p>
              <p className="text-sm text-teal-100">Members save $100</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2">Home Care & Safety Check</h3>
              <p className="text-teal-50 mb-3">Preventative inspection to catch small issues before they become costly repairs.</p>
              <p className="text-2xl font-bold">Starting at $249</p>
              <p className="text-sm text-teal-100">Member price: $199</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2">Honey-Do List Knockout</h3>
              <p className="text-teal-50 mb-3">Knock out 3, 5, or 8 small tasks in one efficient visit. No item-by-item estimates.</p>
              <p className="text-2xl font-bold">$299-$699</p>
              <p className="text-sm text-teal-100">Members save $50-$100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Phil Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="text-center">
              <img 
                src="/phil-green.jpg"
                alt="Phil Green, trusted handyman serving St. Louis and Metro East Illinois" 
                className="w-48 h-48 rounded-full object-cover border-4 border-teal-700 mx-auto mb-4 shadow-xl"
              />
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-3 py-1.5 bg-white text-teal-800 rounded-full font-semibold shadow-sm">30+ Years Experience</span>
                <span className="px-3 py-1.5 bg-white text-teal-800 rounded-full font-semibold shadow-sm">Licensed & Insured</span>
                <span className="px-3 py-1.5 bg-white text-teal-800 rounded-full font-semibold shadow-sm">Background Checked</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Meet Phil Green, Your Home's Hero
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-teal-800">Why I Started Hero Handyman Pro:</strong> After 30+ years in construction and home repair,
                I saw too many homeowners getting burned by unreliable contractors and overpriced franchises. I founded Hero Handyman Pro
                to bring honest, skilled craftsmanship back to the St. Louis & Metro East community.
              </p>
              <p className="text-gray-600 mb-4">
                My promise is simple: <strong>I treat every home like it's my own.</strong> When you call, you get a member of our team — not a call center,
                not a random subcontractor. Just local craftsmen who stand behind their work and value your trust.
              </p>
              <p className="text-gray-600 mb-5">
                From deck repairs and door replacements to drywall fixes and ceiling fans, I've helped hundreds of homeowners across
                O'Fallon, Edwardsville, Collinsville, and the greater St. Louis area. I'm here to make your home repair experience
                easy, transparent, and worry-free.
              </p>
              <a href="#contact">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white" onClick={() => trackCTAClick('Get Your Free Estimate', 'Phil Green Section')}>
                  Get Your Free Estimate
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How We Protect Your Home */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            How We Protect Your Home
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Your home is your biggest investment. We take every precaution to protect it while we work.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="font-semibold mb-2">Shoe Covers & Floor Protection</h3>
              <p className="text-sm text-gray-600">
                We use protective coverings to keep your floors and carpets clean throughout the job.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="font-semibold mb-2">Background-Checked Techs</h3>
              <p className="text-sm text-gray-600">
                Every technician is vetted and background-checked for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="font-semibold mb-2">Upfront Pricing</h3>
              <p className="text-sm text-gray-600">
                No surprises. You'll know the cost before we start, with clear explanations of all work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="font-semibold mb-2">Lifetime Labor Warranty</h3>
              <p className="text-sm text-gray-600">
                We stand behind our work with a lifetime warranty on all labor and workmanship. Materials are covered by manufacturer warranties.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/membership/">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white">
                Click here for Same-Day Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-12 px-6 bg-gray-50">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why Homeowners Choose Hero Handyman Pro
          </h2>
          <p className="text-gray-600 mb-8">
            You don't just need someone with tools — you need someone you can trust in your home, around your family,
            and with your investment.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-green-700" />
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Decades of hands-on experience.</strong> From framing and decks to finish carpentry and repairs,
                we've seen and fixed it all.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-green-700" />
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Clear communication & honest pricing.</strong> You'll know what we're doing, why we're doing it,
                and what it will cost before we start.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-green-700" />
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Respect for your time and home.</strong> We show up when we say we will, protect your property,
                and clean up before we leave.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-green-700" />
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Local, not a franchise.</strong> This isn't a faceless national brand — it's a local craftsman
                backing his work with his name and reputation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How It Works</h2>
          <p className="text-gray-600 mb-8">
            Simple, straightforward, and built around your schedule.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm font-bold mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Tell Us About Your Project</h3>
              <p className="text-sm text-gray-600">
                Use the quick form below or give us a call. Share a few details and, if possible, text or email a few photos.
              </p>
            </div>
            <div>
              <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm font-bold mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Receive a Clear Estimate & Schedule</h3>
              <p className="text-sm text-gray-600">
                We'll review your project, provide transparent pricing, and schedule a day and time that works for you.
              </p>
            </div>
            <div>
              <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-sm font-bold mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">We Show Up & Do It Right</h3>
              <p className="text-sm text-gray-600">
                Your Hero Handyman Pro arrives on time, completes the work with care, and leaves your home clean and ready to enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-slate-900 text-white py-12 px-6">
        {/* Schema.org Review Markup for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hero Handyman Pro",
            "image": "https://www.herohandymanpro.com/hero-handyman-logo.png",
            "@id": "https://www.herohandymanpro.com",
            "url": "https://www.herohandymanpro.com",
            "telephone": "800-741-6056",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "St. Louis",
              "addressRegion": "MO",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.6270,
              "longitude": -90.1994
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "127"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah M."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Phil repaired our deck and a handful of small issues around the house in one visit. He was on time, professional, and the quality of work was excellent.",
                "datePublished": "2024-11-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Mark D."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I've used Hero Handyman Pro for door repairs and trim work. The communication is great, prices are fair, and everything is done right the first time.",
                "datePublished": "2024-10-22"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Lisa K."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "It's hard to find someone you trust to work on your home. Phil is that person for us now. Honest, skilled, and easy to work with.",
                "datePublished": "2024-09-18"
              }
            ]
          })}
        </script>
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What Local Homeowners Are Saying</h2>
          <p className="text-blue-200 mb-8">
            Real feedback from real clients across St. Louis & Metro East.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-600">
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
              <p className="text-sm mb-4">
                "Phil repaired our deck and a handful of small issues around the house in one visit. He was on time,
                professional, and the quality of work was excellent."
              </p>
              <div className="text-xs text-gray-300">— Sarah M., O'Fallon, IL</div>
            </div>

            <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-600">
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
              <p className="text-sm mb-4">
                "I've used Hero Handyman Pro for door repairs and trim work. The communication is great, prices are fair,
                and everything is done right the first time."
              </p>
              <div className="text-xs text-gray-300">— Mark D., Edwardsville, IL</div>
            </div>

            <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-600">
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
              <p className="text-sm mb-4">
                "It's hard to find someone you trust to work on your home. Phil is that person for us now. Honest,
                skilled, and easy to work with."
              </p>
              <div className="text-xs text-gray-300">— Lisa K., St. Louis, MO</div>
            </div>
          </div>
          
          {/* Google Review CTA */}
          <div className="text-center mt-10">
            <p className="text-blue-200 mb-4 text-lg">Had a great experience? We'd love to hear from you!</p>
            <a 
              href="https://search.google.com/local/writereview?placeid=ChIJKrCqBP_d3IcRCmqXEQTpqQQ" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-full"
              >
                <Star className="w-5 h-5 mr-2 fill-white" />
                Leave a Google Review
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-12 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Service Areas</h2>
          <p className="text-gray-600 mb-6">
            Hero Handyman Pro serves homeowners across St. Louis and the Metro East region.
          </p>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="text-sm mb-4">We regularly work in the following communities:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link href="/service-areas/ofallon-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                O'Fallon, IL
              </Link>
              <Link href="/service-areas/edwardsville-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Edwardsville, IL
              </Link>
              <Link href="/service-areas/collinsville-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Collinsville, IL
              </Link>
              <Link href="/service-areas/belleville-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Belleville, IL
              </Link>
              <Link href="/service-areas/glen-carbon-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Glen Carbon, IL
              </Link>
              <Link href="/service-areas/st-louis-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                St. Louis, MO
              </Link>
              <Link href="/service-areas/st-charles-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                St. Charles, MO
              </Link>
              <Link href="/service-areas/ballwin-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Ballwin, MO
              </Link>
              <Link href="/service-areas/fenton-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Fenton, MO
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Not sure if you're in our service area? <Link href="#contact" className="text-teal-800 underline">Reach out and ask</Link> — if we can't help, we'll do our best to point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" ref={contactSectionRef} className="py-12 px-6 bg-white">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Tell Us About Your Project</h2>
              <p className="text-gray-600 mb-4">
                Use the quick form below and we'll follow up with next steps. We strive to respond immediately.
              </p>
              
              {/* Prominent phone number CTA */}
              <div className="mb-6 p-4 bg-teal-50 border-l-4 border-teal-600 rounded">
                <p className="text-sm text-gray-700 mb-2">Prefer to talk? Call us directly:</p>
                <a 
                  href="tel:800-741-6056" 
                  className="text-2xl font-bold text-teal-700 hover:text-teal-800 flex items-center gap-2"
                  onClick={() => trackPhoneClick('800-741-6056', 'Contact Form - Above Form CTA')}
                >
                  <Phone className="w-6 h-6" />
                  800-741-6056
                </a>
                <p className="text-xs text-gray-600 mt-1">Monday–Friday, 8 AM – 5 PM</p>
              </div>

              <form ref={formRef} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name*</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    disabled={isSubmitting}
                    onFocus={() => {
                      if (!formStarted) {
                        setFormStarted(true);
                        trackFormStart('name');
                      }
                      trackFieldInteraction('name');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    disabled={isSubmitting}
                    onFocus={() => {
                      if (!formStarted) {
                        setFormStarted(true);
                        trackFormStart('email');
                      }
                      trackFieldInteraction('email');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone*</label>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    required 
                    disabled={isSubmitting}
                    onFocus={() => {
                      if (!formStarted) {
                        setFormStarted(true);
                        trackFormStart('phone');
                      }
                      trackFieldInteraction('phone');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">City*</label>
                  <input 
                    id="city" 
                    name="city" 
                    type="text" 
                    placeholder="e.g. O'Fallon, Edwardsville, St. Louis" 
                    defaultValue={initialCity}
                    key={initialCity} 
                    required 
                    disabled={isSubmitting}
                    onFocus={() => {
                      if (!formStarted) {
                        setFormStarted(true);
                        trackFormStart('city');
                      }
                      trackFieldInteraction('city');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">What do you need help with?</label>
                  <select 
                    id="service" 
                    name="service"
                    defaultValue={initialService}
                    key={initialService}
                    onFocus={() => {
                      if (!formStarted) {
                        setFormStarted(true);
                        trackFormStart('service');
                      }
                      trackFieldInteraction('service');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="deck-repair">Deck repair / exterior carpentry</option>
                    <option value="door-repair">Door repair / replacement</option>
                    <option value="drywall-repair">Drywall / ceiling repair</option>
                    <option value="fixtures">Faucets / toilet / fixtures</option>
                    <option value="fan-lighting">Ceiling fan / lighting</option>
                    <option value="general-handyman">General handyman / punch list</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Project details*</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Tell us what's going on. If possible, mention any deadlines or special concerns."
                    onFocus={() => {
                      if (!formStarted) {
                        setFormStarted(true);
                        trackFormStart('message');
                      }
                      trackFieldInteraction('message');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm min-h-[120px]"
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1">
                    For faster quoting, you can also text photos after we follow up.
                  </div>
                </div>

                <button 
                  type="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-teal-700 hover:bg-teal-800 text-white w-full md:w-auto h-10 px-6"
                  onClick={() => {
                    alert('Button clicked! Calling submitContactForm...');
                    console.log('🔘 Button clicked, window.submitContactForm exists:', typeof (window as any).submitContactForm);
                    (window as any).submitContactForm?.();
                  }}
                >
                  Submit My Request
                </button>
                <div className="text-xs text-gray-500">
                  We value your privacy. Your information is only used to respond to your request and is never sold.
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Prefer to Call or Email?</h3>
              <p className="text-sm mb-3">
                Phone: <a href="tel:800-741-6056" className="text-teal-800 underline" onClick={() => trackPhoneClick('800-741-6056', 'Contact Form Section')}>800-741-6056</a><br />
                Email: <a href="mailto:info@herohandymanpro.com" className="text-teal-800 underline">info@herohandymanpro.com</a>
              </p>
              <p className="text-xs text-gray-600 mb-3">
                Hours: Monday–Friday, 8:00 AM – 5:00 PM<br />
                (After-hours messages will be returned as soon as possible.)
              </p>
              <p className="text-xs text-gray-600">
                When you reach out, you're connecting with a real local craftsman —
                not a call center. Let us know how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA - Removed to reduce CTA confusion near contact form */}
      {/* {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-teal-700 text-white p-4 shadow-2xl z-50 md:hidden">
          <div className="flex gap-2">
            <a href="tel:800-741-6056" className="flex-1" onClick={() => trackPhoneClick('800-741-6056', 'Sticky Mobile CTA')}>
              <Button className="w-full bg-white text-teal-700 hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/booking/" className="flex-1">
              <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
}
