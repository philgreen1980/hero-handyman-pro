import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, MessageSquare } from "lucide-react";
import { useEffect, useState, useRef, useCallback, FormEvent } from "react";
import { toast } from "sonner";
import { trackFormSubmission, trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { trackFormView, trackFormStart, trackFieldInteraction, trackScrollToForm } from "@/lib/formTracking";
import SEO from "@/components/SEO";
import LazyProjectGallery from "@/components/LazyProjectGallery";

import type { ProjectPair } from "@/components/ProjectGallery";
import { useSeoRoute } from '@/hooks/useSeoRoute';

function scrollToContact(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = '/#contact';
  }
}

const homeProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint and open joints – Belleville IL",
    afterAlt: "Freshly repaired and painted door casing trim – Belleville IL",
    caption: "Interior trim & carpentry repair",
    city: "Belleville, IL",
  },
  {
    beforeSrc: "/images/carpentry-before-collinsville.webp",
    afterSrc: "/images/carpentry-after-collinsville.webp",
    beforeAlt: "Rotted and broken wooden privacy fence with missing boards – Collinsville IL",
    afterAlt: "New cedar privacy fence boards installed and looking great – Collinsville IL",
    caption: "Fence board replacement",
    city: "Collinsville, IL",
  },
  {
    beforeSrc: "/images/drywall-before-stlouis.webp",
    afterSrc: "/images/drywall-after-stlouis.webp",
    beforeAlt: "Water-damaged ceiling with large brown stain and cracked drywall – St. Louis MO",
    afterAlt: "Repaired and freshly painted ceiling, smooth and stain-free – St. Louis MO",
    caption: "Water-damaged ceiling drywall repair",
    city: "St. Louis, MO",
  },
  {
    beforeSrc: "/images/deck-before-glencarbonIL.webp",
    afterSrc: "/images/deck-after-glencarbonIL.webp",
    beforeAlt: "Severely rotted deck boards with holes and moss growth – Glen Carbon IL",
    afterAlt: "New pressure-treated deck boards installed with stainless screws – Glen Carbon IL",
    caption: "Deck board replacement",
    city: "Glen Carbon, IL",
  },
  {
    beforeSrc: "/images/door-before-stcharles.webp",
    afterSrc: "/images/door-after-stcharles.webp",
    beforeAlt: "Old damaged front door with peeling paint and torn weatherstripping – St. Charles MO",
    afterAlt: "New navy blue fiberglass front door with sidelights installed – St. Charles MO",
    caption: "Front door replacement",
    city: "St. Charles, MO",
  },
];

export default function Home() {
  const seo = useSeoRoute();
  console.log('Home component rendering');  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'sending'>('idle');
  const [photoFileInfo, setPhotoFileInfo] = useState<{ name: string; size: string; tooLarge: boolean } | null>(null);
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

  const handleContactSubmit = useCallback(async () => {
    if (isSubmitting) return;
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };
    if (!data.name || !data.email || !data.phone || !data.city || !data.service || !data.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    // Upload photo if provided
    let photoUrl: string | undefined;
    const photoFile = (formData.get('photo') as File | null);
    if (photoFile && photoFile.size > 0) {
      setUploadStatus('uploading');
      try {
        const uploadForm = new FormData();
        uploadForm.append('photo', photoFile);
        const uploadRes = await fetch('/api/upload-photo', { method: 'POST', body: uploadForm });
        if (uploadRes.ok) {
          const uploadResult = await uploadRes.json();
          photoUrl = uploadResult.url;
        }
      } catch {
        // Non-blocking: proceed without photo
      }
    }
    setIsSubmitting(true);
    setUploadStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, ...(photoUrl ? { photoUrl } : {}) }),
      });
      const result = await response.json();
      if (response.ok) {
        // Track successful form submission in GA4
        try {
          trackFormSubmission('Homepage Contact Form');
          const sendGA4Event = () => {
            if (typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'generate_lead', {
                event_category: 'Contact Form',
                event_label: 'Homepage Contact Form',
                value: 1
              });
              return true;
            } else if (Array.isArray((window as any).dataLayer)) {
              (window as any).dataLayer.push({
                event: 'generate_lead',
                event_category: 'Contact Form',
                event_label: 'Homepage Contact Form',
                value: 1
              });
              return true;
            }
            return false;
          };
          if (!sendGA4Event()) {
            setTimeout(() => sendGA4Event(), 500);
          }
        } catch (error) {
          console.error('GA4 tracking error:', error);
        }
        toast.success('Request received! We strive to respond immediately.');
        form.reset();
      } else {
        toast.error(result.error || 'Something went wrong. Please call 800-741-6056');
      }
    } catch (error) {
      toast.error('Something went wrong. Please call 800-741-6056');
    } finally {
      setIsSubmitting(false);
      setUploadStatus('idle');
    }
  }, [isSubmitting, formRef]);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
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
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">
            {/* Left: Copy */}
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#E84E1B] mb-3">
                Serving St. Louis & Metro East
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Fast Handyman for <span className="text-[#E84E1B]">Small Jobs</span> in St. Louis & Metro East
              </h1>
              <p className="text-lg text-gray-600 mb-5 max-w-xl">
                We handle the repairs other contractors won't take — drywall, doors, decks, and punch-list jobs. Fast response. Reliable service.
              </p>

              {/* Trust Badges — all uniform border treatment */}
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="text-xs px-3 py-2 rounded-full border border-[#AAB3BD] bg-white inline-flex items-center gap-1.5 font-semibold text-[#2B2B2B]">
                  <Star className="w-3.5 h-3.5 fill-[#E84E1B] text-[#E84E1B]" />
                  4.9 Avg Rating
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-[#AAB3BD] bg-white inline-flex items-center gap-2 text-[#2B2B2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84E1B]"></span>
                  35+ Years of Experience
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-[#AAB3BD] bg-white inline-flex items-center gap-2 text-[#2B2B2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84E1B]"></span>
                  Licensed & Insured
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-[#AAB3BD] bg-white inline-flex items-center gap-2 text-[#2B2B2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84E1B]"></span>
                  Same-Day / Next-Day Options
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-[#AAB3BD] bg-white inline-flex items-center gap-2 text-[#2B2B2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84E1B]"></span>
                  5-Star Service Homeowners Trust
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-3">
                <a href="/#contact" onClick={scrollToContact}>
                  <Button size="lg" className="bg-[#E84E1B] hover:bg-[#D54417] text-white rounded-full px-6">
                    Get a Free Quote
                  </Button>
                </a>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Hero CTA')}>
                  <Button size="lg" variant="outline" className="border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#F8F8F8] rounded-full px-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: 800-741-6056
                  </Button>
                </a>
                <a href="/handyman-pricing/">
                  <Button size="lg" variant="outline" className="border-2 border-[#AAB3BD] text-[#2B2B2B] hover:border-[#E84E1B] hover:text-[#E84E1B] rounded-full px-6">
                    See Pricing
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
                  <img loading="eager" fetchPriority="high"
                    src="/phil-green.webp"
                    alt="Phil Green, owner of Hero Handyman Pro, professional handyman with 35+ years experience"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  <strong className="text-[#E84E1B]">Meet Phil, Your Home's Hero.</strong><br />
                  A seasoned craftsman serving St. Louis & Metro East homeowners with honest, dependable repairs and
                  high-quality workmanship — every single time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do Best Section */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What We Do Best</h2>
              <p className="text-gray-600 text-sm">We focus on the everyday repairs homeowners need done quickly and correctly.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Small home repairs",
                "Punch-list items",
                "Drywall patches",
                "Door repairs & installation",
                "Deck repairs",
                "Fixture installs",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#F8F8F8] rounded-lg px-3 py-2 text-sm font-medium text-[#2B2B2B]">
                  <CheckCircle className="w-4 h-4 text-[#E84E1B] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Quick Links */}
      <section className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700">Serving:</span>
            <Link href="/gbp/ofallon-il/" className="text-teal-800 hover:underline">O'Fallon IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/gbp/edwardsville-il/" className="text-teal-800 hover:underline">handyman Edwardsville IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/collinsville-handyman-services/" className="text-teal-800 hover:underline">Collinsville IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/handyman-belleville-il" className="text-teal-800 hover:underline">handyman Belleville IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/service-areas/glen-carbon-handyman-services/" className="text-teal-800 hover:underline">Glen Carbon IL</Link>
            <span className="text-gray-400">·</span>
            <Link href="/handyman-st-louis-mo" className="text-teal-800 hover:underline">St. Louis MO</Link>
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
                <Link href="/handyman-services/deck-repair/" className="hover:text-teal-700">
                  Deck & Carpentry Repairs
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Fix sagging decks, rotted trim, railings, steps, and other wood damage before it becomes a bigger problem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/handyman-services/deck-repair/" className="text-sm font-semibold text-teal-800 hover:underline">Deck repair →</Link>
                <Link href="/carpentry-services/" className="text-sm font-semibold text-teal-800 hover:underline">Carpentry →</Link>
                <Link href="/deck-repair-edwardsville-il" className="text-sm font-semibold text-teal-600 hover:underline">Deck repair near you →</Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Doors & Windows</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/door-repair/" className="hover:text-teal-700">
                  Door Repair & Replacement
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Sticking, drafty, or damaged doors? We repair or replace entry, patio, and interior doors for a smoother, safer home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/handyman-services/door-repair/" className="text-sm font-semibold text-teal-800 hover:underline">Door services →</Link>
                <Link href="/door-repair-edwardsville-il" className="text-sm font-semibold text-teal-600 hover:underline">Door repair near you →</Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Walls & Ceilings</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/drywall-repair/" className="hover:text-teal-700">
                  Drywall & Ceiling Repair
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                From small dings and nail pops to water damage and cracked ceilings, we restore your walls to a smooth, paint-ready finish.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/handyman-services/drywall-repair/" className="text-sm font-semibold text-teal-800 hover:underline">Drywall repair →</Link>
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
                <Link href="/handyman-services/home-repair-services/" className="hover:text-teal-700">
                  General Home Repairs & Punch Lists
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Have a list of small jobs? We love "honey-do" lists — let us knock out multiple tasks in a single visit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/handyman-services/home-repair-services/" className="text-sm font-semibold text-teal-800 hover:underline">Home repairs →</Link>
                <Link href="/handyman-services/" className="text-sm font-semibold text-teal-600 hover:underline">All services →</Link>
              </div>
            </div>

            {/* Service 7 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Porches & Stairs</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/porch-repair/" className="hover:text-teal-700">
                  Porch & Exterior Stair Repair
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Rotted porch boards, loose railings, and crumbling steps are safety hazards. We repair and restore exterior structures to like-new condition.
              </p>
              <Link href="/handyman-services/porch-repair/" className="text-sm font-semibold text-teal-800 hover:underline">
                Porch repair details →
              </Link>
            </div>

            {/* Service 8 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Interior Finish Work</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/trim-carpentry/" className="hover:text-teal-700">
                  Interior Trim & Finish Carpentry
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Crown molding, baseboards, door casings, and wainscoting — precise finish carpentry that adds character and value to any room.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/handyman-services/trim-carpentry/" className="text-sm font-semibold text-teal-800 hover:underline">Trim carpentry →</Link>
                <Link href="/carpentry-services/" className="text-sm font-semibold text-teal-600 hover:underline">Exterior carpentry →</Link>
              </div>
            </div>

            {/* Service 9 */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Accessibility & Safety</div>
              <h3 className="text-lg font-bold mb-2">
                <Link href="/handyman-services/senior-accessibility-upgrades/" className="hover:text-teal-700">
                  Senior & Accessibility Upgrades
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Grab bars, handrails, ramps, and safety modifications to help seniors and those with mobility challenges stay safely in their homes.
              </p>
              <Link href="/handyman-services/senior-accessibility-upgrades/" className="text-sm font-semibold text-teal-800 hover:underline">
                Accessibility upgrades →
              </Link>
            </div>
          </div>

          {/* Local Service Area Callout */}
          <div className="mt-8 bg-teal-50 border border-teal-100 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm text-teal-900 font-medium">
              Serving homeowners in{" "}
              <Link href="/gbp/ofallon-il/" className="font-semibold text-teal-700 hover:underline">O'Fallon</Link>,{" "}
              <Link href="/gbp/edwardsville-il/" className="font-semibold text-teal-700 hover:underline">handyman Edwardsville IL</Link>,{" "}
              <Link href="/service-areas/collinsville-handyman-services/" className="font-semibold text-teal-700 hover:underline">Collinsville</Link>,{" "}
              <Link href="/handyman-belleville-il" className="font-semibold text-teal-700 hover:underline">handyman Belleville IL</Link>, and across{" "}
              <Link href="/handyman-st-louis-mo" className="font-semibold text-teal-700 hover:underline">St. Louis</Link>.
            </span>
            <Link href="/service-areas/" className="text-sm font-semibold text-teal-800 hover:underline whitespace-nowrap sm:ml-auto flex-shrink-0">
              See all service areas →
            </Link>
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
            <Link href="/handyman-services/">
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

      {/* Hero Membership Club Value Section */}
      <section className="py-14 px-6 bg-white border-y border-gray-100">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-amber-200 mb-4">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                Hero Membership Club
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join the Hero Membership Club?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For homeowners who use handyman services more than once a year, the membership pays for itself on the first job. No contracts, no fine print — just savings and priority access.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "💰", title: "Save 15% on Every Job", desc: "Members receive 15% off all labor on every visit, every time. No exclusions, no minimums." },
                  { icon: "⚡", title: "Priority Scheduling", desc: "Members move to the front of the line. Same-day and next-day slots are reserved for members first." },
                  { icon: "🏠", title: "Free Annual Home Walk-Through", desc: "Once a year, Phil walks your home to spot small issues before they become expensive repairs." },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl shrink-0 mt-0.5">{benefit.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{benefit.title}</p>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/membership/">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-8">
                  Learn More &amp; Sign Up →
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-center mb-6">
                <p className="text-5xl font-bold text-amber-600 mb-1">15%</p>
                <p className="text-gray-700 font-semibold">off every job, every visit</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Annual membership fee", value: "$99/yr" },
                  { label: "Average savings per job", value: "~$60" },
                  { label: "Breaks even after", value: "2 jobs" },
                  { label: "Priority scheduling", value: "Included" },
                  { label: "Annual home walk-through", value: "Included" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-bold text-gray-900">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">No contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Phil Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-teal-50 to-cyan-50 speakable-about">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="text-center">
              <img loading="lazy"
                src="/phil-green.webp"
                alt="Phil Green, trusted handyman serving St. Louis and Metro East Illinois"
                width={192}
                height={192}
                className="w-48 h-48 rounded-full object-cover border-4 border-teal-700 mx-auto mb-4 shadow-xl"
              />
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-3 py-1.5 bg-white text-teal-800 rounded-full font-semibold shadow-sm">35+ Years Experience</span>
                <span className="px-3 py-1.5 bg-white text-teal-800 rounded-full font-semibold shadow-sm">Licensed & Insured</span>
                <span className="px-3 py-1.5 bg-white text-teal-800 rounded-full font-semibold shadow-sm">Background Checked</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Meet Phil Green, Your Home's Hero
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-teal-800">Why I Started Hero Handyman Pro:</strong> After 35+ years in construction and home repair,
                I saw too many homeowners getting burned by unreliable contractors and overpriced franchises. I founded Hero Handyman Pro
                to bring honest, skilled craftsmanship back to the St. Louis & Metro East community.
              </p>
              <p className="text-gray-600 mb-4">
                My promise is simple: <strong>I treat every home like it's my own.</strong> When you call, you get a member of our team — not a call center,
                not a random subcontractor. Just local craftsmen who stand behind their work and value your trust.
              </p>
              <p className="text-gray-600 mb-4">
                From deck repairs and door replacements to drywall fixes and ceiling fans, I've helped hundreds of homeowners across
                O'Fallon, Edwardsville, <Link href="/service-areas/collinsville-handyman-services/" className="text-teal-700 hover:underline">Collinsville</Link>, and the greater St. Louis area. I'm here to make your home repair experience
                easy, transparent, and worry-free.
              </p>
              <p className="text-sm text-gray-500 mb-5 bg-white/60 rounded-lg px-4 py-3 border border-teal-100">
                <strong>About Hero Handyman Pro:</strong> Hero Handyman Pro is a licensed and insured handyman service based in O'Fallon, IL, serving homeowners throughout St. Louis MO, Ballwin, Chesterfield, Des Peres, Kirkwood, Fenton, St. Charles, and O'Fallon MO, as well as Metro East Illinois communities including O'Fallon IL, Edwardsville, Collinsville, Belleville, and Glen Carbon. Formerly known as Rapid Repair Pro. Owner Phil Green has 35+ years of experience in construction and home repair. Specialties include small jobs, exterior carpentry, deck repair, drywall, door installation, and home maintenance. Phone: 800-741-6056. Email: info@herohandymanpro.com.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/#contact" onClick={(e) => { scrollToContact(e); trackCTAClick('Get Your Free Estimate', 'Phil Green Section'); }}>
                  <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                    Get Your Free Estimate
                  </Button>
                </a>
                <a href="sms:800-741-6056">
                  <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50 gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Text Us for a Free Quote
                  </Button>
                </a>
              </div>
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

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "We take small jobs others won't", desc: "No job too small — drywall patches, door adjustments, fixture swaps, and punch-list items are exactly what we do." },
              { title: "Fast response times", desc: "We aim to respond the same day and schedule within the week. No weeks-long waits." },
              { title: "Clear communication", desc: "You'll know what we're doing, why, and what it costs before we start. No surprises." },
              { title: "We show up when scheduled", desc: "We respect your time. When we say we'll be there, we're there." },
              { title: "No runaround or delays", desc: "Straightforward scheduling, honest timelines, and direct communication from start to finish." },
              { title: "Professional, reliable service", desc: "A local craftsman backing his work with his name and reputation — not a franchise." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-green-700" />
                </div>
                <div className="text-sm text-gray-600">
                  <strong className="text-gray-900">{item.title}.</strong> {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA Block */}
      <section className="py-8 px-6 bg-teal-700 text-white">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold">Have a small job that needs doing?</p>
              <p className="text-teal-100 text-sm">We specialize in exactly that. Call or get a quote — we respond fast.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Mid-Page CTA')}>
                <Button className="bg-white text-teal-700 hover:bg-teal-50 font-bold rounded-full px-5">
                  <Phone className="w-4 h-4 mr-2" />
                  800-741-6056
                </Button>
              </a>
              <a href="/#contact" onClick={scrollToContact}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-5">
                  Get a Free Quote
                </Button>
              </a>
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
      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={homeProjects}
        title="Recent Projects in Your Neighborhood"
        subtitle="Real work, real results — from homes just like yours across St. Louis & Metro East IL."
      />

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

          {/* Live Google Reviews — Elfsight Widget */}
          <div className="mb-12">
            <div className="elfsight-app-e72c9ada-9202-4037-bc7b-e25ffd7014ed" data-elfsight-app-lazy></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { name: "Sarah M.", loc: "O'Fallon, IL", service: "Deck Repair", initials: "SM", color: "bg-teal-600", text: "Phil repaired our deck and a handful of small issues around the house in one visit. He was on time, professional, and the quality of work was excellent." },
              { name: "Mark D.", loc: "Edwardsville, IL", service: "Door Repair", initials: "MD", color: "bg-blue-600", text: "I've used Hero Handyman Pro for door repairs and trim work. The communication is great, prices are fair, and everything is done right the first time." },
              { name: "Lisa K.", loc: "St. Louis, MO", service: "Home Repairs", initials: "LK", color: "bg-purple-600", text: "It's hard to find someone you trust to work on your home. Phil is that person for us now. Honest, skilled, and easy to work with." },
              { name: "Tom R.", loc: "Collinsville, IL", service: "Drywall Repair", initials: "TR", color: "bg-orange-600", text: "Had a large drywall patch that needed to match existing texture. Phil nailed it — you can't even tell where the repair is. Highly recommend!" },
              { name: "Jennifer W.", loc: "Belleville, IL", service: "Ceiling Fan Install", initials: "JW", color: "bg-rose-600", text: "Quick, clean, and professional. Phil installed two ceiling fans and fixed a sticky door the same afternoon. Will definitely call again." },
              { name: "Dave & Sue H.", loc: "Edwardsville, IL", service: "Deck & Carpentry", initials: "DH", color: "bg-emerald-600", text: "We had rotted deck boards and a broken railing. Phil fixed everything in one day. The deck looks brand new and the price was very fair." },
              { name: "Chris B.", loc: "O'Fallon, IL", service: "Door Installation", initials: "CB", color: "bg-amber-600", text: "Phil replaced our front door and storm door. The fit is perfect and the house looks so much better. Great communication throughout the whole job." },
              { name: "Amy T.", loc: "Glen Carbon, IL", service: "General Handyman", initials: "AT", color: "bg-cyan-600", text: "I had a list of 6 small jobs — patching, caulking, a leaky faucet, and more. Phil knocked them all out in one visit. So convenient and so worth it!" },
            ].map((review, i) => (
              <div key={i} className="bg-slate-800/70 rounded-xl p-5 border border-slate-600 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{review.name}</div>
                    <div className="text-gray-400 text-xs">{review.loc}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-xs mb-2">★★★★★ <span className="text-gray-400 ml-1">{review.service}</span></div>
                <p className="text-sm text-gray-200 flex-1">"{review.text}"</p>
              </div>
            ))}
          </div>
          
          {/* Google Review CTA */}
          <div className="text-center mt-10">
            <p className="text-blue-200 mb-4 text-lg">Had a great experience? We'd love to hear from you!</p>
            <a 
              href="https://g.page/r/CaI-7d4GTxxyEBE/review" 
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
      {/* From Our Blog */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">Homeowner Resources</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">From Our Blog</h2>
            </div>
            <Link href="/blog/" className="text-teal-700 text-sm font-semibold hover:underline hidden md:block">
              View all posts &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/2026-handyman-costs-metro-east-il/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-teal-50 text-teal-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Pricing Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  2026 Handyman Costs in Metro East IL – What Homeowners Should Expect
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Typical price ranges for drywall repair, deck work, door installation, and general handyman services in Edwardsville, O'Fallon, and Belleville.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/how-to-choose-handyman-st-louis/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-orange-50 text-orange-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Hiring Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  How to Choose a Trusted Handyman in St. Louis & Metro East (2026 Guide)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  What to look for, what questions to ask, and red flags to avoid when hiring a handyman in the St. Louis area.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/spring-home-repair-checklist-edwardsville-ofallon/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-green-50 text-green-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Seasonal Checklist</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Spring Home Repair Checklist for Edwardsville & O'Fallon Homeowners
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  A practical room-by-room checklist of spring maintenance tasks that protect your home's value and prevent costly repairs later.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/home-repairs-belleville-il/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Local Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Top Home Repairs Belleville IL Homeowners Tackle Every Spring
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  The 6 most common spring repairs in Belleville, IL — from deck boards and drywall to doors, exterior trim, and fence posts.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/drywall-repair-cost-ofallon-il/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-teal-50 text-teal-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Cost Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  How Much Does Drywall Repair Cost in O'Fallon, IL?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Typical drywall repair costs in O'Fallon and Metro East IL, from small patches to water-damaged ceilings.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/common-home-repairs-after-winter-illinois/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Seasonal Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Most Common Home Repairs After Winter in Illinois
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  What Illinois winters do to your home and how to address the most common post-winter repair needs before they become costly.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/signs-your-deck-needs-repair/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-orange-50 text-orange-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Homeowner Tips</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  5 Signs Your Deck Needs Repair (Before It Becomes a Safety Hazard)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Know when to call a professional before a small deck issue becomes a dangerous and expensive structural problem.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/handyman-vs-contractor-metro-east-il/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-purple-50 text-purple-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Hiring Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Handyman vs. Contractor: Which Do You Need for Your Home Repair?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Understand the difference and know which professional to call so you don't overpay or under-hire for your next home project.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/home-repairs-edwardsville-il/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-green-50 text-green-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Local Guide</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Edwardsville IL Home Repair Guide: What Local Homeowners Need to Know
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Common repair needs in Edwardsville homes, from older neighborhoods near SIUE to newer developments along Route 157.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/home-maintenance-tips-metro-east-il/">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
                <span className="text-xs bg-rose-50 text-rose-700 font-medium px-2 py-1 rounded-full w-fit mb-3">Maintenance Tips</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                  Home Maintenance Tips for Metro East IL Homeowners
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Seasonal and year-round maintenance advice for homeowners in O'Fallon, Edwardsville, Belleville, and surrounding Metro East communities.
                </p>
                <span className="text-teal-700 text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
              </div>
            </Link>
          </div>

          {/* Projects Gallery Link */}
          <div className="mt-8 bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div>
              <span className="text-sm font-semibold text-gray-900">See Our Work</span>
              <p className="text-sm text-gray-600 mt-0.5">Browse completed projects from homes across Metro East IL and St. Louis — deck repairs, drywall, doors, and more.</p>
            </div>
            <Link href="/projects/" className="text-sm font-semibold text-teal-800 hover:underline whitespace-nowrap sm:ml-auto flex-shrink-0">
              View project gallery →
            </Link>
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/blog/" className="text-teal-700 text-sm font-semibold hover:underline">
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      <section id="areas" className="py-12 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Service Areas</h2>
          <p className="text-gray-600 mb-6">
            We proudly serve homeowners across St. Louis, West St. Louis County, and Metro East Illinois.
          </p>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-3">Metro East Illinois</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-5">
              <Link href="/gbp/ofallon-il/" className="text-teal-800 underline hover:text-teal-900">
                O'Fallon, IL
              </Link>
              <Link href="/gbp/edwardsville-il/" className="text-teal-800 underline hover:text-teal-900">
                Edwardsville, IL
              </Link>
              <Link href="/service-areas/collinsville-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Collinsville, IL
              </Link>
              <Link href="/handyman-belleville-il" className="text-teal-800 underline hover:text-teal-900">
                Belleville, IL
              </Link>
              <Link href="/service-areas/glen-carbon-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Glen Carbon, IL
              </Link>
              <Link href="/handyman-shiloh-il/" className="text-teal-800 underline hover:text-teal-900">
                Shiloh, IL
              </Link>
              <Link href="/handyman-swansea-il/" className="text-teal-800 underline hover:text-teal-900">
                Swansea, IL
              </Link>
              <Link href="/handyman-fairview-heights-il/" className="text-teal-800 underline hover:text-teal-900">
                Fairview Heights, IL
              </Link>
            </div>
            <p className="text-sm font-medium text-gray-700 mb-3">West St. Louis County &amp; Greater St. Louis</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link href="/handyman-st-louis-mo" className="text-teal-800 underline hover:text-teal-900">
                St. Louis, MO
              </Link>
              <Link href="/gbp/des-peres-mo/" className="text-teal-800 underline hover:text-teal-900">
                Chesterfield, MO
              </Link>
              <Link href="/handyman-ballwin-mo" className="text-teal-800 underline hover:text-teal-900">
                Ballwin, MO
              </Link>
              <Link href="/gbp/des-peres-mo/" className="text-teal-800 underline hover:text-teal-900">
                Des Peres, MO
              </Link>
              <Link href="/handyman-kirkwood-mo" className="text-teal-800 underline hover:text-teal-900">
                Kirkwood, MO
              </Link>
              <Link href="/service-areas/st-charles-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                St. Charles, MO
              </Link>
              <Link href="/service-areas/fenton-handyman-services/" className="text-teal-800 underline hover:text-teal-900">
                Fenton, MO
              </Link>
              <Link href="/handyman-ofallon-mo" className="text-teal-800 underline hover:text-teal-900">
                O'Fallon, MO
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Not sure if you're in our service area? <a href="/#contact" onClick={scrollToContact} className="text-teal-800 underline">Reach out and ask</a> — if we can't help, we'll do our best to point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted by Local Homeowners */}
      <section className="py-10 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Trusted by Homeowners Across St. Louis & Metro East</h2>
              <p className="text-gray-600 text-sm max-w-xl">
                From a single drywall patch to a full punch-list, we show up on time, do the work right, and leave your home clean.
                No surprises on price. No upselling. Just reliable repairs from a local craftsman you can trust.
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                Small jobs welcome — no job too small
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                Same-week scheduling available
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                Transparent pricing before we start
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                Licensed, insured, and locally owned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Optimized FAQ Section */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="container max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">Common questions from homeowners in St. Louis and Metro East Illinois about our handyman services.</p>
          <div className="space-y-5">
            {[
              {
                q: "Who is the best handyman near me in St. Louis or Metro East Illinois?",
                a: "Hero Handyman Pro is a top-rated local handyman serving St. Louis MO, Ballwin, Chesterfield, O'Fallon IL, Edwardsville IL, and surrounding communities. Founded by Phil Green with 35+ years of experience, we specialize in small jobs, exterior carpentry, deck repair, drywall, doors, and home maintenance. We're licensed, insured, and have a 4.9-star average rating from 235+ reviews."
              },
              {
                q: "Does Hero Handyman Pro take small jobs?",
                a: "Yes — small jobs are our specialty. We take on single repairs that most contractors won't bother with: a single drywall patch, a sticking door, one rotted deck board, a leaky faucet, or a punch list of five small tasks. No job is too small."
              },
              {
                q: "How quickly can I get a handyman in St. Louis or Metro East?",
                a: "We offer same-day and next-day scheduling for most repairs. We respond to all requests within 24 hours, and for urgent jobs we do our best to fit you in as quickly as possible. Call 800-741-6056 for the fastest response."
              },
              {
                q: "Is Hero Handyman Pro licensed and insured?",
                a: "Yes. Hero Handyman Pro is fully licensed and insured for all handyman work in Missouri and Illinois. We carry general liability insurance and can provide proof of coverage upon request."
              },
              {
                q: "What handyman services does Hero Handyman Pro offer?",
                a: "We offer a wide range of home repair and maintenance services including deck repair and restoration, exterior carpentry and wood rot repair, drywall and ceiling repair, door installation and repair, window repair, interior trim and finish carpentry, ceiling fan and light fixture installation, faucet and sink repair, senior accessibility upgrades, VA home modifications, and general home repair punch lists."
              },
              {
                q: "What areas does Hero Handyman Pro serve?",
                a: "We serve the Greater St. Louis area including St. Louis city and county, Ballwin, Chesterfield, Des Peres, Kirkwood, Fenton, St. Charles, and O'Fallon MO on the Missouri side. On the Illinois side we serve O'Fallon IL, Edwardsville, Collinsville, Belleville, Glen Carbon, Maryville, Shiloh, and Swansea."
              },
              {
                q: "How much does a handyman cost in St. Louis?",
                a: "Most handyman jobs in the St. Louis area range from $75–$300 for small repairs, $300–$800 for mid-size projects like deck board replacement or drywall repair, and $800–$2,500+ for larger jobs like full deck restoration or door installation. We provide transparent, upfront pricing before any work begins — no surprises."
              },
              {
                q: "Can Hero Handyman Pro help with VA home modifications?",
                a: "Yes. We are experienced with VA home modification projects including grab bar installation, ramp construction, door widening for wheelchair access, and other accessibility upgrades for veterans and seniors. We work with VA-approved contractors and can help navigate the process."
              },
              {
                q: "How do I get a free estimate from Hero Handyman Pro?",
                a: "You can get a free estimate by filling out the contact form on this page, calling us at 800-741-6056, or emailing info@herohandymanpro.com. Describe your project and we'll respond within 2 hours during business hours with a clear, upfront estimate. No obligation."
              },
              {
                q: "Is Hero Handyman Pro the same as Rapid Repair Pro?",
                a: "Yes. Hero Handyman Pro was formerly known as Rapid Repair Pro. We rebranded to better reflect our mission and the communities we serve. Same owner, same team, same commitment to quality — just a new name. You can learn more on our About the Rebrand page."
              }
            ].map((item, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  <span>{item.q}</span>
                  <span className="ml-4 text-teal-600 group-open:rotate-180 transition-transform text-lg flex-shrink-0">&#8964;</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
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
                Send us a quick description or photo of your project — we'll get back to you fast.
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

                <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-sm text-orange-800">
                  <strong>Need it done this week?</strong> Mention it in your project details and we'll do our best to fit you in. We specialize in small jobs and fast turnaround.
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

                <div>
                  <label htmlFor="photo" className="block text-sm font-medium mb-1">Upload a photo of your project (optional)</label>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    className="w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-sm file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) { setPhotoFileInfo(null); return; }
                      const sizeMB = file.size / (1024 * 1024);
                      const sizeStr = sizeMB >= 1 ? `${sizeMB.toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`;
                      setPhotoFileInfo({ name: file.name, size: sizeStr, tooLarge: file.size > 10 * 1024 * 1024 });
                    }}
                  />
                  <div className="text-xs text-gray-500 mt-1">Upload a photo of your project (optional) — this helps us respond faster with an accurate estimate.</div>
                  {photoFileInfo && !photoFileInfo.tooLarge && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-teal-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                      <span>{photoFileInfo.name} ({photoFileInfo.size})</span>
                    </div>
                  )}
                  {photoFileInfo?.tooLarge && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                      Photo is too large. Please upload an image under 10MB.
                    </div>
                  )}
                </div>

                {/* Upload status indicator */}
                {uploadStatus !== 'idle' && (
                  <div className="flex items-center gap-2 text-sm text-teal-700 font-medium">
                    <svg className="animate-spin h-4 w-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {uploadStatus === 'uploading' ? 'Uploading photo…' : 'Sending request…'}
                  </div>
                )}

                <button 
                  type="button"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-teal-700 hover:bg-teal-800 text-white w-full md:w-auto h-10 px-6"
                  onClick={handleContactSubmit}
                >
                  {isSubmitting ? (
                    uploadStatus === 'uploading' ? 'Uploading photo…' : 'Sending…'
                  ) : 'Submit My Request'}
                </button>
                <div className="text-xs text-gray-500">
                  We typically respond within 2 hours during business hours. We value your privacy — your information is only used to respond to your request and is never sold.
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

      {/* ServiceArea Schema for AI Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Hero Handyman Pro",
        "url": "https://herohandymanpro.com",
        "telephone": "800-741-6056",
        "description": "Professional handyman services across St. Louis MO and Metro East Illinois including O'Fallon IL, Edwardsville IL, Collinsville IL, Belleville IL, and St. Louis County MO.",
        "areaServed": [
          { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
          { "@type": "City", "name": "Edwardsville", "addressRegion": "IL" },
          { "@type": "City", "name": "Collinsville", "addressRegion": "IL" },
          { "@type": "City", "name": "Belleville", "addressRegion": "IL" },
          { "@type": "City", "name": "Glen Carbon", "addressRegion": "IL" },
          { "@type": "City", "name": "Maryville", "addressRegion": "IL" },
          { "@type": "City", "name": "Shiloh", "addressRegion": "IL" },
          { "@type": "City", "name": "Swansea", "addressRegion": "IL" },
          { "@type": "City", "name": "St. Louis", "addressRegion": "MO" },
          { "@type": "City", "name": "Chesterfield", "addressRegion": "MO" },
          { "@type": "City", "name": "Ballwin", "addressRegion": "MO" },
          { "@type": "City", "name": "Fenton", "addressRegion": "MO" },
          { "@type": "City", "name": "St. Charles", "addressRegion": "MO" },
          { "@type": "City", "name": "O'Fallon", "addressRegion": "MO" }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 38.6270,
            "longitude": -90.1994
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Handyman Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Carpentry" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VA Home Modifications" } }
          ]
        }
      })}} />

      {/* FAQPage Schema for AI Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Who is the best handyman near me in St. Louis or Metro East Illinois?", "acceptedAnswer": { "@type": "Answer", "text": "Hero Handyman Pro is a top-rated local handyman serving St. Louis MO, Ballwin, Chesterfield, O'Fallon IL, Edwardsville IL, and surrounding communities. Founded by Phil Green with 35+ years of experience, we specialize in small jobs, exterior carpentry, deck repair, drywall, doors, and home maintenance. We're licensed, insured, and have a 4.9-star average rating from 235+ reviews." } },
          { "@type": "Question", "name": "Does Hero Handyman Pro take small jobs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — small jobs are our specialty. We take on single repairs that most contractors won't bother with: a single drywall patch, a sticking door, one rotted deck board, a leaky faucet, or a punch list of five small tasks. No job is too small." } },
          { "@type": "Question", "name": "How quickly can I get a handyman in St. Louis or Metro East?", "acceptedAnswer": { "@type": "Answer", "text": "We offer same-day and next-day scheduling for most repairs. We respond to all requests within 24 hours, and for urgent jobs we do our best to fit you in as quickly as possible. Call 800-741-6056 for the fastest response." } },
          { "@type": "Question", "name": "Is Hero Handyman Pro licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hero Handyman Pro is fully licensed and insured for all handyman work in Missouri and Illinois. We carry general liability insurance and can provide proof of coverage upon request." } },
          { "@type": "Question", "name": "What handyman services does Hero Handyman Pro offer?", "acceptedAnswer": { "@type": "Answer", "text": "We offer deck repair, exterior carpentry, wood rot repair, drywall and ceiling repair, door installation and repair, window repair, interior trim carpentry, ceiling fan and light fixture installation, faucet and sink repair, senior accessibility upgrades, VA home modifications, and general home repair punch lists." } },
          { "@type": "Question", "name": "What areas does Hero Handyman Pro serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve the Greater St. Louis area including St. Louis city and county, Ballwin, Chesterfield, Des Peres, Kirkwood, Fenton, St. Charles, and O'Fallon MO. In Illinois we serve O'Fallon IL, Edwardsville, Collinsville, Belleville, Glen Carbon, Maryville, Shiloh, and Swansea." } },
          { "@type": "Question", "name": "How much does a handyman cost in St. Louis?", "acceptedAnswer": { "@type": "Answer", "text": "Most handyman jobs in the St. Louis area range from $75–$300 for small repairs, $300–$800 for mid-size projects, and $800–$2,500+ for larger jobs. We provide transparent, upfront pricing before any work begins." } },
          { "@type": "Question", "name": "Can Hero Handyman Pro help with VA home modifications?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We are experienced with VA home modification projects including grab bar installation, ramp construction, door widening for wheelchair access, and other accessibility upgrades for veterans and seniors." } },
          { "@type": "Question", "name": "How do I get a free estimate from Hero Handyman Pro?", "acceptedAnswer": { "@type": "Answer", "text": "Fill out the contact form on this page, call 800-741-6056, or email info@herohandymanpro.com. We respond within 2 hours during business hours with a clear, upfront estimate. No obligation." } },
          { "@type": "Question", "name": "Is Hero Handyman Pro the same as Rapid Repair Pro?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hero Handyman Pro was formerly known as Rapid Repair Pro. Same owner, same team, same commitment to quality — just a new name." } }
        ]
      })}} />

      {/* Speakable Schema for AI Voice & AI Overviews */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Hero Handyman Pro — Fast Handyman for Small Jobs in St. Louis & Metro East",
        "url": "https://herohandymanpro.com/",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".speakable-hero", ".speakable-about"]
        },
        "description": "Hero Handyman Pro is a licensed and insured handyman service based in O'Fallon, IL, serving St. Louis MO, Ballwin, Chesterfield, Edwardsville IL, and Metro East Illinois. Founded by Phil Green with 35+ years of experience. Specializing in small jobs, deck repair, drywall, doors, and exterior carpentry. Call 800-741-6056."
      })}} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://herohandymanpro.com/" }
        ]
      })}} />

      {/* Sticky Mobile CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-teal-700 text-white p-3 shadow-2xl z-50 md:hidden">
          <div className="flex gap-2">
            <a href="tel:800-741-6056" className="flex-1" onClick={() => trackPhoneClick('800-741-6056', 'Sticky Mobile CTA')}>
              <Button className="w-full bg-white text-teal-700 hover:bg-gray-100 font-bold">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="/#contact" onClick={scrollToContact} className="flex-1">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                Get a Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
