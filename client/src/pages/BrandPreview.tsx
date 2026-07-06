import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, MessageSquare, MapPin, Mail, Clock, ExternalLink, ChevronRight } from "lucide-react";

// Brand color constants
const BRAND = {
  orangeRed: "#E85818",
  heroRed: "#D42408",
  slateGray: "#849098",
  darkNavy: "#0B1220",
  white: "#FFFFFF",
  offWhite: "#F9F8F7",
};

const NEW_LOGO_H_WHITE = "/images/logo-horizontal-white-bg.webp";
const NEW_LOGO_H_DARK = "/images/logo-horizontal-dark-bg.webp";
const NEW_LOGO_STACKED = "/images/logo-stacked-white-bg.webp";

/**
 * BRAND PREVIEW PAGE — /brand-preview
 *
 * This is a staging mockup of the Hero Handyman Pro homepage with the new brand
 * identity applied: orange-red palette (#E85818), new horizontal logo, updated
 * header/footer, and brand-aligned CTAs.
 *
 * Review this page before approving sitewide rollout.
 * No SEO content has been changed — this is visual styling only.
 */
export default function BrandPreview() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── PREVIEW BANNER ── */}
      <div
        className="text-white text-sm font-semibold py-2.5 px-4 flex items-center justify-center gap-3 text-center"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <span className="text-yellow-400">⚠</span>
        <span>
          <strong>BRAND PREVIEW — Staging Only.</strong> This page shows the proposed new brand identity.{" "}
          <a href="/" className="underline text-yellow-300 hover:text-yellow-200">← Return to live site</a>
        </span>
      </div>

      {/* ── MEMBERSHIP BANNER (brand orange) ── */}
      <div
        className="text-white text-sm font-semibold py-2 px-4 flex items-center justify-center gap-3 relative"
        style={{ backgroundColor: BRAND.orangeRed }}
      >
        <Star className="h-4 w-4 fill-white shrink-0" />
        <span>
          <strong>Save 15% on Every Job</strong> — Join the Hero Membership Club.{" "}
          <a href="/membership/" className="underline hover:opacity-80 font-bold">
            Learn More &amp; Sign Up →
          </a>
        </span>
      </div>

      {/* ── HEADER (new brand logo + orange CTAs) ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container max-w-[1120px] mx-auto px-6 flex items-center justify-between h-16 gap-6">

          {/* NEW HORIZONTAL LOGO */}
          <a href="/" className="flex items-center">
            <img
              src={NEW_LOGO_H_WHITE}
              alt="Hero Handyman Pro Logo"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: 220 }}
            />
          </a>

          {/* Desktop Nav — brand orange hover */}
          <nav className="hidden md:flex items-center gap-5">
            <a href="/services/" className="text-sm font-medium text-gray-600 hover:text-[#E85818] transition-colors flex items-center gap-1">
              Services <ChevronRight className="h-3 w-3 rotate-90" />
            </a>
            <a href="/service-areas/" className="text-sm font-medium text-gray-600 hover:text-[#E85818] transition-colors flex items-center gap-1">
              Locations <ChevronRight className="h-3 w-3 rotate-90" />
            </a>
            <a href="/handyman-pricing/" className="text-sm font-semibold transition-colors" style={{ color: BRAND.orangeRed }}>
              Pricing
            </a>
            <a href="/membership/" className="text-sm font-medium text-gray-600 hover:text-[#E85818] transition-colors">Membership</a>
            <a href="/about/" className="text-sm font-medium text-gray-600 hover:text-[#E85818] transition-colors">About</a>
            <a href="/reviews/" className="text-sm font-medium text-gray-600 hover:text-[#E85818] transition-colors">Reviews</a>
          </nav>

          {/* Desktop CTAs — brand orange */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="sms:800-741-6056"
              className="flex items-center gap-1.5 text-sm font-semibold rounded-full px-3 py-1.5 border transition-colors"
              style={{ color: BRAND.orangeRed, borderColor: "#E8581840" }}
            >
              <MessageSquare className="h-4 w-4" />
              Text Us
            </a>
            <a href="tel:800-741-6056" className="font-semibold text-sm whitespace-nowrap" style={{ color: BRAND.orangeRed }}>
              800-741-6056
            </a>
            <a href="/#contact">
              <Button
                className="rounded-full px-5 text-sm text-white"
                style={{ backgroundColor: BRAND.orangeRed }}
              >
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION (brand orange accents) ── */}
      <section className="py-12 md:py-16 px-6" style={{ background: "linear-gradient(135deg, #fff5f0 0%, #f9fafb 100%)" }}>
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">
            {/* Left: Copy */}
            <div>
              <div className="text-xs uppercase font-bold tracking-wider mb-3" style={{ color: BRAND.orangeRed }}>
                Serving St. Louis &amp; Metro East
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Fast Handyman for{" "}
                <span style={{ color: BRAND.orangeRed }}>Small Jobs</span>{" "}
                in St. Louis &amp; Metro East
              </h1>
              <p className="text-lg text-gray-600 mb-5 max-w-xl">
                We handle the repairs other contractors won't take — drywall, doors, decks, and punch-list jobs. Fast response. Reliable service.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="text-xs px-3 py-2 rounded-full border-2 bg-white inline-flex items-center gap-1.5 font-semibold" style={{ borderColor: BRAND.orangeRed }}>
                  <Star className="w-3.5 h-3.5 fill-[#E85818] text-[#E85818]" />
                  4.9 Avg Rating
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BRAND.orangeRed }}></span>
                  35+ Years of Experience
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BRAND.orangeRed }}></span>
                  Licensed &amp; Insured
                </span>
                <span className="text-xs px-3 py-2 rounded-full border border-gray-300 bg-white inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BRAND.orangeRed }}></span>
                  Same-Day / Next-Day Options
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-3">
                <a href="/#contact">
                  <Button
                    size="lg"
                    className="rounded-full px-6 text-white"
                    style={{ backgroundColor: BRAND.orangeRed }}
                  >
                    Get a Free Quote
                  </Button>
                </a>
                <a href="tel:800-741-6056">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-6"
                    style={{ borderColor: BRAND.orangeRed, color: BRAND.orangeRed, borderWidth: 2 }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: 800-741-6056
                  </Button>
                </a>
                <a href="/handyman-pricing/">
                  <Button size="lg" variant="outline" className="rounded-full px-6 border-2 border-gray-300 text-gray-600">
                    See Pricing
                  </Button>
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Tell us about your project in a few clicks — we strive to respond immediately.
              </p>
            </div>

            {/* Right: Phil Card with new mascot logo */}
            <div>
              <div className="bg-white rounded-2xl p-5 shadow-xl">
                <div className="rounded-xl overflow-hidden border-2 border-gray-200 mb-3">
                  <img
                    src="/phil-green.webp"
                    alt="Phil Green, owner of Hero Handyman Pro"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  <strong style={{ color: BRAND.orangeRed }}>Meet Phil, Your Home's Hero.</strong><br />
                  A seasoned craftsman serving St. Louis &amp; Metro East homeowners with honest, dependable repairs and
                  high-quality workmanship — every single time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO BEST (brand orange chips) ── */}
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
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium"
                  style={{ backgroundColor: "#fff5f0", color: "#7a2a0a" }}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: BRAND.orangeRed }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA QUICK LINKS ── */}
      <section className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700">Serving:</span>
            {["O'Fallon, IL", "Edwardsville, IL", "Belleville, IL", "Collinsville, IL", "St. Louis, MO", "St. Charles, MO", "Fenton, MO"].map(city => (
              <span key={city} className="px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 text-xs">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER (dark navy + new logo + tagline) ── */}
      <footer className="text-gray-400 py-10 px-6 mt-auto" style={{ backgroundColor: BRAND.darkNavy }}>
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

            {/* Column 1: NEW LOGO + Tagline + NAP */}
            <div className="md:col-span-2">
              {/* New horizontal dark-bg logo */}
              <img
                src={NEW_LOGO_H_DARK}
                alt="Hero Handyman Pro"
                className="h-16 w-auto object-contain mb-2"
                style={{ maxWidth: 260 }}
              />
              {/* Tagline */}
              <p className="text-sm font-semibold mb-3" style={{ color: BRAND.slateGray }}>
                Your Local Hero For Home Repairs
              </p>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Trusted handyman and home repair services for St. Louis &amp; Metro East. We show up, do it right, and treat your home with respect.
              </p>

              {/* NAP */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: BRAND.orangeRed }} />
                  <span className="text-gray-400">
                    Serving St. Louis, MO &amp; Metro East Illinois<br />
                    (O'Fallon · Edwardsville · Belleville · Collinsville)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND.orangeRed }} />
                  <a href="tel:800-741-6056" className="hover:text-gray-200 transition-colors">800-741-6056</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND.orangeRed }} />
                  <a href="sms:800-741-6056" className="hover:text-gray-200 transition-colors">Text Us: 800-741-6056</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND.orangeRed }} />
                  <a href="mailto:info@herohandymanpro.com" className="hover:text-gray-200 transition-colors">info@herohandymanpro.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND.orangeRed }} />
                  <span>Mon–Fri 8:00 AM – 5:00 PM</span>
                </div>
              </div>

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
              <div className="text-gray-200 font-semibold mb-2">Services</div>
              <div className="space-y-1">
                {[
                  ["All Services", "/services/"],
                  ["Deck Repair", "/handyman-services/deck-repair/"],
                  ["Drywall Repair", "/handyman-services/drywall-repair/"],
                  ["Door Installation", "/handyman-services/door-repair/"],
                  ["Ceiling Fan Install", "/handyman-services/ceiling-fan-installation/"],
                  ["Fence Repair", "/handyman-services/fence-repair/"],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="block hover:text-gray-300 transition-colors">{label}</a>
                ))}
              </div>
            </div>

            {/* Column 3: Locations */}
            <div>
              <div className="text-gray-200 font-semibold mb-2">Service Areas</div>
              <div className="space-y-1">
                {[
                  ["O'Fallon, IL", "/service-areas/ofallon-handyman-services/"],
                  ["Edwardsville, IL", "/edwardsville-il/"],
                  ["Belleville, IL", "/belleville-il/"],
                  ["Collinsville, IL", "/service-areas/collinsville-handyman-services/"],
                  ["St. Louis, MO", "/handyman-services-st-louis/"],
                  ["St. Charles, MO", "/service-areas/st-charles-handyman-services/"],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="block hover:text-gray-300 transition-colors">{label}</a>
                ))}
              </div>
            </div>

            {/* Column 4: CTA */}
            <div>
              <div className="text-gray-200 font-semibold mb-3">Ready to Get Started?</div>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                Don't let that repair list grow any longer. Call or text us today for a free estimate.
              </p>
              <a href="tel:800-741-6056">
                <Button
                  className="w-full text-white rounded-full mb-2"
                  style={{ backgroundColor: BRAND.orangeRed }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 800-741-6056
                </Button>
              </a>
              <a href="/#contact">
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  style={{ borderColor: BRAND.orangeRed, color: BRAND.orangeRed, borderWidth: 1.5 }}
                >
                  Get a Free Estimate
                </Button>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <span>© 2026 Hero Handyman Pro. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy/" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="/terms/" className="hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="/sitemap.xml" className="hover:text-gray-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── COMPARISON CALLOUT ── */}
      <div className="bg-gray-900 text-white py-6 px-6 text-center text-sm">
        <p className="text-gray-300 mb-3">
          <strong className="text-white">This is the brand preview.</strong> Compare this page to the{" "}
          <a href="/" className="text-yellow-400 underline hover:text-yellow-300">live homepage</a> to evaluate the new orange-red palette vs. the current teal.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <span>🎨 Primary: <strong className="text-[#E85818]">#E85818 Brand Orange-Red</strong></span>
          <span>🔴 Hover: <strong className="text-[#D42408]">#D42408 Hero Red</strong></span>
          <span>🌑 Footer: <strong className="text-gray-300">#0B1220 Dark Navy</strong></span>
          <span>🩶 Accent: <strong style={{ color: "#849098" }}>#849098 Slate Gray</strong></span>
        </div>
      </div>

    </div>
  );
}
