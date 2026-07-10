import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, MessageSquare, Phone, Star, MapPin, Mail, Clock, ExternalLink, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePhone } from "@/contexts/PhoneContext";

function scrollToContact(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Not on homepage — navigate there
    window.location.href = '/#contact';
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const { phone, phoneDisplay } = usePhone();

  // Consolidated nav: 5 core items with dropdowns for Services and Locations
  const serviceDropdown = [
    { label: "All Services", href: "/services/" },
    { label: "Drywall Repair", href: "/handyman-services/drywall-repair/" },
    { label: "Deck Repair", href: "/handyman-services/deck-repair/" },
    { label: "Fence Repair", href: "/handyman-services/fence-repair/" },
    { label: "Ceiling Fan Install", href: "/ceiling-fan-installation/" },
    { label: "Packages & Plans", href: "/handyman-packages/" },
    { label: "Get Estimate →", href: "/estimator/" },
  ];

  const locationDropdown = [
    { label: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
    { label: "Belleville, IL", href: "/belleville-il/" },
    { label: "Edwardsville, IL", href: "/edwardsville-il/" },
    { label: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
    { label: "Swansea, IL", href: "/handyman-swansea-il" },
    { label: "St. Louis, MO", href: "/handyman-services-st-louis/" },
    { label: "Handyman Near Me", href: "/handyman-near-me/" },
    { label: "All Areas →", href: "/service-areas/" },
  ];

  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) setLocationsOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── TOP MEMBERSHIP BANNER ── */}
      {!bannerDismissed && (
        <div className="bg-amber-500 text-amber-950 text-sm font-semibold py-2 px-4 flex items-center justify-center gap-3 relative">
          <Star className="h-4 w-4 fill-amber-950 shrink-0" />
          <span>
            <strong>Save 15% on Every Job</strong> — Join the Hero Membership Club.{" "}
            <a href="/membership/" className="underline hover:text-amber-800 font-bold">
              Learn More &amp; Sign Up →
            </a>
          </span>
          <button
            onClick={() => setBannerDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-amber-600/30 rounded"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container max-w-[1120px] mx-auto px-6 flex items-center justify-between h-16 gap-6">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                src="/images/logo-stacked-official.webp"
                alt="Hero Handyman Pro"
                className="h-16 w-auto object-contain"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(o => !o); setLocationsOpen(false); }}
                className="flex items-center gap-1 text-sm font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors"
              >
                Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  {serviceDropdown.map(item => {
                    const isEstimate = item.href === '/estimator/';
                    const isAllServices = item.href === '/handyman-services/';
                    return (
                      <>
                        {isAllServices && <div key="divider" className="border-t border-gray-100 my-1" />}
                        <a key={item.href} href={item.href} onClick={() => setServicesOpen(false)}
                          className={isEstimate
                            ? "block mx-2 my-1 px-3 py-2 text-sm font-semibold text-white bg-[#E84E1B] hover:bg-[#D54417] rounded-lg transition-colors text-center"
                            : "block px-4 py-2 text-sm text-[#2B2B2B] hover:bg-[#F8F8F8] hover:text-[#E84E1B] transition-colors"
                          }>
                          {item.label}
                        </a>
                      </>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div ref={locationsRef} className="relative">
              <button
                onClick={() => { setLocationsOpen(o => !o); setServicesOpen(false); }}
                className="flex items-center gap-1 text-sm font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors"
              >
                Locations <ChevronDown className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  {locationDropdown.map(item => (
                    <a key={item.href} href={item.href} onClick={() => setLocationsOpen(false)}
                      className="block px-4 py-2 text-sm text-[#2B2B2B] hover:bg-[#F8F8F8] hover:text-[#E84E1B] transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/handyman-pricing/" className="text-sm font-medium text-[#E84E1B] hover:text-[#D54417] font-semibold transition-colors">Pricing</a>
            <a href="/membership/" className="text-sm font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors">Membership</a>
            <a href="/about/" className="text-sm font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors">About</a>
            <a href="/reviews/" className="text-sm font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors">Reviews</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            {/* Text Us CTA */}
            <a
              href={`sms:${phone}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#E84E1B] hover:text-[#D54417] border border-[#AAB3BD] rounded-full px-3 py-1.5 hover:bg-[#F8F8F8] transition-colors"
              title="Text us for a free quote"
            >
              <MessageSquare className="h-4 w-4" />
              Text Us
            </a>
            <a href={`tel:${phone}`} className="font-semibold text-sm text-[#E84E1B] hover:text-[#D54417] whitespace-nowrap">
              {phoneDisplay}
            </a>
            <a href="/#contact" onClick={scrollToContact}>
              <Button className="bg-[#E84E1B] hover:bg-[#D54417] text-white rounded-full px-5 text-sm">
                Get a Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="flex items-center gap-1.5 px-2 text-[#2B2B2B] hover:text-[#E84E1B] hover:bg-[#F8F8F8]">
                <Menu className="h-6 w-6" />
                <span className="text-xs font-semibold">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-1 mt-8">
                {/* Services accordion */}
                <button
                  onClick={() => setMobileServicesOpen(o => !o)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-[#E85818] py-2 transition-colors"
                >
                  Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    {serviceDropdown.map(item => (
                      <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                        className="block py-1.5 text-base text-gray-600 hover:text-[#E85818] transition-colors">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Locations accordion */}
                <button
                  onClick={() => setMobileLocationsOpen(o => !o)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-[#E85818] py-2 transition-colors"
                >
                  Locations <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLocationsOpen && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    {locationDropdown.map(item => (
                      <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                        className="block py-1.5 text-base text-gray-600 hover:text-[#E85818] transition-colors">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}

                <a href="/handyman-pricing/" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-semibold text-[#E84E1B] hover:text-[#D54417] transition-colors">Pricing Guide</a>
                <a href="/membership/" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors">Membership</a>
                <a href="/about/" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors">About</a>
                <a href="/reviews/" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium text-[#2B2B2B] hover:text-[#E84E1B] transition-colors">Reviews</a>

                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={`sms:${phone}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[#E84E1B] hover:text-[#D54417]"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Text Us: {phoneDisplay}
                  </a>
                  <a href={`tel:${phone}`} className="font-semibold text-[#E84E1B] text-sm">
                    Call: {phoneDisplay}
                  </a>
                </div>
                <a href="/#contact" onClick={(e) => { setIsOpen(false); scrollToContact(e); }}>
                  <Button className="w-full bg-[#E84E1B] hover:bg-[#D54417] text-white rounded-full">
                    Get a Free Quote
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* ── BOTTOM MEMBERSHIP BANNER ── */}
      <div className="bg-[#E84E1B] text-white py-4 px-6">
        <div className="container max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 fill-amber-400 text-amber-400 shrink-0" />
            <div>
              <p className="font-bold text-base">Save 15% on Every Job — Hero Membership Club</p>
              <p className="text-white/80 text-sm">Priority scheduling · 15% off all labor · Free annual home assessment</p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={`sms:${phone}`}>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#E84E1B] font-semibold gap-2 bg-transparent">
                <MessageSquare className="h-4 w-4" />
                Text Us: {phoneDisplay}
              </Button>
            </a>
            <a href="/membership/">
              <Button className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold">
                Join Now — 15% Off
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2B2B2B] text-[#AAB3BD] py-10 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

            {/* Column 1: NAP + About */}
            <div className="md:col-span-1">
              <div className="mb-4">
              <img
                src="/images/logo-stacked-official.webp"
                alt="Hero Handyman Pro"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
              <p className="text-[#AAB3BD] mb-4 text-sm leading-relaxed">
                Trusted handyman and home repair services for St. Louis &amp; Metro East. We show up, do it right, and treat your home with respect.
              </p>

              {/* Full NAP */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#E84E1B] mt-0.5 shrink-0" />
                  <span className="text-[#AAB3BD]">
                    Serving St. Louis, MO &amp; Metro East Illinois<br />
                    (O'Fallon · Edwardsville · Belleville · Collinsville)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#E84E1B] shrink-0" />
                  <a href="tel:800-741-6056" className="hover:text-gray-200 transition-colors">800-741-6056</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 text-[#E84E1B] shrink-0" />
                  <a href="sms:800-741-6056" className="hover:text-gray-200 transition-colors">Text Us: 800-741-6056</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#E84E1B] shrink-0" />
                  <a href="mailto:info@herohandymanpro.com" className="hover:text-gray-200 transition-colors">info@herohandymanpro.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#E84E1B] shrink-0" />
                  <span>Mon–Fri 8:00 AM – 5:00 PM</span>
                </div>
              </div>

              {/* Google Business Profile link */}
              <a
                href="https://g.page/r/CaI-7d4GTxxyEBE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                <Star className="h-3.5 w-3.5 fill-amber-400" />
                Leave Us a Google Review
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Column 2: Services */}
            <div>
              <div className="text-white font-semibold mb-2">Services</div>
              <div className="space-y-1">
                <Link href="/handyman-services/" className="block hover:text-white transition-colors">
                  All Services
                </Link>
                <Link href="/handyman-services/deck-repair/" className="block hover:text-gray-300 transition-colors">
                  Deck Repair
                </Link>
                <Link href="/handyman-services/drywall-repair/" className="block hover:text-gray-300 transition-colors">
                  Drywall Repair
                </Link>
                <Link href="/handyman-services/door-repair/" className="block hover:text-gray-300 transition-colors">
                  Door Installation
                </Link>
                <Link href="/handyman-services/ceiling-fan-installation/" className="block hover:text-gray-300 transition-colors">
                  Ceiling Fan Install
                </Link>
                <Link href="/carpentry-services/" className="block hover:text-gray-300 transition-colors">
                  Carpentry Services
                </Link>
              </div>
            </div>

            {/* Column 3: Resources */}
            <div>
              <div className="text-white font-semibold mb-2">Resources</div>
              <div className="space-y-1">
                <Link href="/handyman-near-me/" className="block hover:text-gray-300 transition-colors">
                  Handyman Near Me
                </Link>
                <Link href="/trusted-local-partners/" className="block hover:text-gray-300 transition-colors">
                  Trusted Partners
                </Link>
                <Link href="/about/" className="block hover:text-gray-300 transition-colors">
                  About Hero Handyman Pro
                </Link>
                <Link href="/reviews/" className="block hover:text-gray-300 transition-colors">
                  Customer Reviews
                </Link>
                <Link href="/membership/" className="block hover:text-gray-300 transition-colors">
                  Membership — Save 15%
                </Link>
                <Link href="/handyman-pricing/" className="block hover:text-gray-300 transition-colors">
                  Handyman Pricing Guide
                </Link>
                <Link href="/va-home-modifications" className="block hover:text-gray-300 transition-colors">
                  VA Home Modifications
                </Link>
                <div className="pt-2 border-t border-gray-800 mt-2">
                  <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Blog</div>
                  <Link href="/blog/" className="block hover:text-gray-300 transition-colors">
                    All Articles
                  </Link>
                  <Link href="/blog/2026-handyman-costs-metro-east-il/" className="block hover:text-gray-300 transition-colors">
                    2026 Handyman Costs
                  </Link>
                  <Link href="/blog/how-to-choose-handyman-st-louis/" className="block hover:text-gray-300 transition-colors">
                    How to Choose a Handyman
                  </Link>
                  <Link href="/blog/spring-home-repair-checklist-edwardsville-ofallon/" className="block hover:text-gray-300 transition-colors">
                    Spring Repair Checklist
                  </Link>
                  <Link href="/blog/drywall-repair-cost-ofallon-il/" className="block hover:text-gray-300 transition-colors">
                    Drywall Repair Cost O'Fallon
                  </Link>
                  <Link href="/blog/common-home-repairs-after-winter-illinois/" className="block hover:text-gray-300 transition-colors">
                    Winter Home Repairs IL
                  </Link>
                  <Link href="/blog/signs-your-deck-needs-repair/" className="block hover:text-gray-300 transition-colors">
                    5 Signs Deck Needs Repair
                  </Link>
                  <Link href="/blog/handyman-vs-contractor-metro-east-il/" className="block hover:text-gray-300 transition-colors">
                    Handyman vs. Contractor
                  </Link>
                  <Link href="/gbp/edwardsville-il/" className="block hover:text-gray-300 transition-colors">
                    Edwardsville Home Repair Guide
                  </Link>
                  <Link href="/blog/home-maintenance-tips-metro-east-il/" className="block hover:text-gray-300 transition-colors">
                    Metro East Home Maintenance Tips
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 4: Company */}
            <div>
              <div className="text-white font-semibold mb-2">More Services</div>
              <div className="space-y-1.5">
                <Link href="/handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">General Handyman</span>
                </Link>
                <Link href="/handyman-services/deck-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Deck &amp; Carpentry Repairs</span>
                </Link>
                <Link href="/handyman-services/door-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Door Repair &amp; Replacement</span>
                </Link>
                <Link href="/handyman-services/drywall-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Drywall &amp; Ceiling Repair</span>
                </Link>
                <Link href="/handyman-services/ceiling-fan-installation/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Ceiling Fan Installation</span>
                </Link>
                <Link href="/handyman-services/faucet-install-and-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Faucets, Sinks &amp; Toilets</span>
                </Link>
              </div>
            </div>

            {/* Column 5: Service Areas */}
            <div>
              <div className="text-white font-semibold mb-2">Service Areas</div>
              <div className="space-y-1.5">
                <Link href="/gbp/ofallon-il/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">O'Fallon, IL</span>
                </Link>
                <Link href="/gbp/edwardsville-il/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Edwardsville, IL</span>
                </Link>
                <Link href="/service-areas/collinsville-handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Collinsville, IL</span>
                </Link>
                <Link href="/handyman-belleville-il">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Belleville, IL</span>
                </Link>
                <Link href="/handyman-shiloh-il/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Shiloh, IL</span>
                </Link>
                <Link href="/handyman-swansea-il/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Swansea, IL</span>
                </Link>
                <Link href="/handyman-fairview-heights-il/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Fairview Heights, IL</span>
                </Link>
                <Link href="/handyman-st-louis-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">St. Louis, MO</span>
                </Link>
                <Link href="/handyman-chesterfield-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Chesterfield, MO</span>
                </Link>
                <Link href="/handyman-ballwin-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Ballwin, MO</span>
                </Link>
                <Link href="/handyman-st-charles-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">St. Charles, MO</span>
                </Link>
                <Link href="/gbp/des-peres-mo/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Des Peres, MO</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-[#444] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Ready to get started?</p>
              <p className="text-[#AAB3BD] text-xs">Call or text — we respond fast. Free quote in 24 hours.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="sms:800-741-6056"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-[#E84E1B] text-white hover:bg-[#D54417] text-sm font-medium transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Text Us: 800-741-6056
              </a>
              <a
                href="tel:800-741-6056"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-[#444] text-white hover:bg-[#555] text-sm font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                800-741-6056
              </a>
              <a
                href="/#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-3 flex flex-wrap justify-between gap-4 text-xs text-[#AAB3BD]/70">
            <span>© {new Date().getFullYear()} Hero Handyman Pro. All rights reserved.</span>
            <span>Website content for informational purposes only. Call for current availability and pricing.</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
