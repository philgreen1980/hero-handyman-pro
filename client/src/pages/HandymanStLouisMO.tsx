import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Wrench, DollarSign, ArrowRight, MapPin } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function HandymanStLouisMO() {
  const seo = useSeoRoute();  const processSteps = [
    { num: "1", title: "Call or Request Online", desc: "Call us at 800-741-6056 or submit a request online. We respond within 24 hours — often the same day." },
    { num: "2", title: "Photo or On-Site Estimate", desc: "For most jobs, a photo is enough for a ballpark estimate. For larger projects, we visit to assess and provide a written quote." },
    { num: "3", title: "Confirm & Schedule", desc: "Once you approve the estimate, we schedule your job — often same-day or next-day for smaller repairs." },
    { num: "4", title: "Professional Repair", desc: "Our experienced crew arrives on time, completes the work to a high standard, and cleans up when done." },
    { num: "5", title: "Final Walkthrough", desc: "We walk through the completed work with you. If anything isn't right, we fix it before we leave." },
  ];

  const pricingRanges = [
    { type: "Small Repairs (1–2 hrs)", range: "$100 – $250", note: "Drywall patches, minor carpentry, hardware installs" },
    { type: "Half-Day Jobs (3–4 hrs)", range: "$250 – $500", note: "Multiple repairs, ceiling fan, door installation" },
    { type: "Full-Day Jobs (6–8 hrs)", range: "$500 – $900", note: "Deck repair, larger drywall, multi-room work" },
    { type: "Deck Repair", range: "$300 – $2,500+", note: "Board replacement to full structural repair" },
    { type: "Drywall Repair", range: "$75 – $700+", note: "Small holes to water-damaged sections" },
    { type: "Door Installation", range: "$150 – $700", note: "Interior, exterior, or storm door install" },
  ];

  const services = [
    { name: "Drywall Repair", href: "/handyman-services/drywall-repair/", desc: "Holes, cracks, water damage, texture matching" },
    { name: "Deck Repair", href: "/handyman-services/deck-repair/", desc: "Rotted boards, railings, stairs, structural fixes" },
    { name: "Door Installation", href: "/handyman-services/door-repair/", desc: "Entry doors, storm doors, interior doors" },
    { name: "Ceiling Fan Installation", href: "/handyman-services/ceiling-fan-installation/", desc: "New installs, replacements, smart fans" },
    { name: "Exterior Carpentry", href: "/handyman-services/exterior-carpentry/", desc: "Trim, fascia, soffits, wood rot repair" },
    { name: "Home Repairs", href: "/handyman-services/home-repair/", desc: "Miscellaneous repairs, honey-do lists" },
  ];

  const faqs = [
    {
      question: "What handyman services do you offer in St. Louis MO?",
      answer: "We offer a wide range of handyman services in St. Louis MO including drywall repair, deck repair and restoration, door installation and repair, ceiling fan installation, exterior carpentry, trim work, wood rot repair, and general home maintenance. If you have a repair project, contact us — we likely handle it."
    },
    {
      question: "How quickly can you come out for a repair in St. Louis?",
      answer: "For most repairs, we can schedule same-day or next-day appointments in the St. Louis area. For urgent safety issues (loose railings, structural concerns), we prioritize getting out as quickly as possible. Call us at 800-741-6056 to check current availability."
    },
    {
      question: "How much do handyman services cost in St. Louis MO?",
      answer: "Small repairs (1–2 hours) typically run $100–$250. Half-day jobs are $250–$500. Full-day projects are $500–$900. Specific services like deck repair ($300–$2,500+) or drywall repair ($75–$700+) vary based on scope. We provide a firm, written estimate before starting any work — no surprise charges."
    },
    {
      question: "Are you licensed and insured in Missouri?",
      answer: "Yes. Hero Handyman Pro is fully licensed and insured in Missouri and Illinois. We carry general liability insurance and workers' compensation coverage on every job. You can request proof of insurance before we begin work."
    },
    {
      question: "Do you offer a warranty on your work?",
      answer: "Yes. All our labor comes with a workmanship warranty. If something we repaired fails due to our workmanship within the warranty period, we come back and fix it at no charge. Specific warranty terms are provided in writing with each estimate."
    },
    {
      question: "Can you handle multiple repairs in one visit?",
      answer: "Absolutely — in fact, bundling multiple repairs in one visit is one of the best ways to save money on handyman services. We can knock out a drywall patch, a sticking door, a ceiling fan install, and several other items in a single half-day or full-day visit."
    },
    {
      question: "Do you serve the entire St. Louis metro area?",
      answer: "Yes. We serve St. Louis city and county, plus the Metro East Illinois area including Edwardsville, O'Fallon, Belleville, Collinsville, Glen Carbon, and surrounding communities. We also serve St. Charles, Chesterfield, Ballwin, Fenton, and other St. Louis suburbs."
    },
    {
      question: "How do I get a quote for handyman work in St. Louis?",
      answer: "The fastest way is to call us at 800-741-6056 or submit a request on our website. For most small to medium repairs, a photo of the damage is enough for a ballpark estimate. For larger projects, we'll schedule a free on-site assessment. We respond to all requests within 24 hours."
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "St. Louis, MO" }
  ]} />
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4">
                <MapPin className="h-4 w-4" />
                St. Louis, MO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Handyman Services St. Louis MO
              </h1>
              <p className="text-[#e5e7eb] text-lg mb-6">
                Fast, honest, local handyman services across St. Louis city and county. Drywall repair, deck repair, door installation, carpentry, and more — done right the first time.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free Quote in 24 hrs", "Same/Next-Day Available", "Licensed & Insured in MO", "30+ Years Experience"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => {
                    trackCTAClick('Get Free Quote in 24 Hours', 'Handyman St. Louis MO Hero Section');
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    else window.location.href = '/#contact';
                  }}
                  className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-[#ff5b00]/30"
                >
                  Get Free Quote in 24 Hours
                </Button>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Handyman St. Louis MO Hero Section')}>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    800-741-6056
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-[#ff5b00] text-[#ff5b00]" />)}
                  </div>
                  <span className="text-white font-semibold">4.9 · 127+ Reviews</span>
                </div>
                {[
                  "Serving all of St. Louis city & county",
                  "Drywall, deck, doors, carpentry & more",
                  "Upfront pricing — no surprises",
                  "Licensed & insured in Missouri",
                  "Same-day & next-day availability",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <Check className="h-5 w-5 text-[#ff5b00] flex-shrink-0" />
                    <span className="text-[#e5e7eb]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Handyman Services in St. Louis MO</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">From small repairs to multi-day projects, we handle the jobs that keep your home safe and well-maintained.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb] hover:border-[#ff5b00] hover:shadow-md transition-all cursor-pointer group h-full">
                  <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4 group-hover:bg-[#ff5b00]/20 transition-colors">
                    <Wrench className="h-6 w-6 text-[#ff5b00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1220] mb-2 group-hover:text-[#ff5b00] transition-colors">{svc.name}</h3>
                  <p className="text-[#4b5563] text-sm mb-3">{svc.desc}</p>
                  <div className="flex items-center text-[#ff5b00] text-sm font-semibold">
                    Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">How It Works</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">A simple, transparent process from first contact to finished repair.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] h-full text-center">
                  <div className="bg-[#ff5b00] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#0b1220] mb-2">{step.title}</h3>
                  <p className="text-[#4b5563] text-sm">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 z-10 items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-[#ff5b00]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Ranges */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Handyman Pricing in St. Louis MO</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Transparent, upfront pricing — you'll know the cost before we start. These ranges reflect typical handyman projects in the St. Louis area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pricingRanges.map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex items-start gap-3">
                  <div className="bg-[#ff5b00]/10 rounded-full p-2 mt-0.5">
                    <DollarSign className="h-5 w-5 text-[#ff5b00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b1220] mb-1">{item.type}</h3>
                    <p className="text-[#ff5b00] font-bold text-lg mb-1">{item.range}</p>
                    <p className="text-[#6b7280] text-sm">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4b5563] text-sm">
            * Prices are estimates. Final price confirmed in writing before work begins. Materials may be additional.
          </p>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-16 px-6 bg-[#0b1220]">
        <div className="max-w-[600px] mx-auto">
          <InlineQuoteForm
            service="Handyman Services St. Louis MO"
            heading="Get Your Free St. Louis Handyman Quote"
            subheading="Tell us about your project and we'll respond within 24 hours with a clear, upfront estimate. No obligation."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-2">What St. Louis Homeowners Are Saying</h2>
            <div className="flex items-center justify-center gap-2 text-[#ff5b00]">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-[#ff5b00]" />)}
              <span className="text-[#4b5563] ml-2">4.9 average · 127+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Professional, polite, and clean. Fixed my drywall, installed new light fixtures, and patched a door frame all in one afternoon. Fair pricing.", author: "James R., St. Louis MO" },
              { text: "Finally a handyman who shows up on time! Great communication, honest pricing, and the work looks great. Will definitely use again.", author: "Emily T., Chesterfield MO" },
              { text: "They fixed our deck rot quickly and it looks brand new. Saved us from a full replacement. Highly recommend Hero Handyman Pro.", author: "Sarah M., Ballwin MO" },
            ].map((t, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-[#ff5b00] text-[#ff5b00]" />)}
                </div>
                <p className="text-[#374151] italic mb-4">"{t.text}"</p>
                <p className="text-[#6b7280] text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Handyman Services St. Louis MO — FAQs</h2>
            <p className="text-[#4b5563]">Common questions from St. Louis homeowners about our handyman services.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* St. Louis Metro Content Block */}
      <section className="py-16 px-6 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-5">Serving the Full St. Louis Metro Area</h2>
          <p className="text-[#374151] text-lg leading-relaxed mb-5">
            Hero Handyman Pro serves homeowners throughout St. Louis city, St. Louis County, and the surrounding suburbs — from Chesterfield and Ballwin in the west to Fenton and St. Charles in the south and north. We specialize in <strong>small jobs</strong> that most contractors won't take: a single drywall patch, a sticking door, a rotted deck board, or a punch list of five small repairs. No job is too small, and no list is too long.
          </p>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            What sets us apart in the St. Louis market is <strong>fast service and reliability</strong>. We respond to every request within 24 hours, offer same-day and next-day scheduling for most repairs, and show up when we say we will. Our 35+ years of experience means we diagnose problems correctly the first time — saving you the cost of repeat visits and misdiagnosed repairs. Whether you're in the city, the county, or the Metro East, we're your local handyman.
          </p>
          {/* Internal Links */}
          <div className="bg-white rounded-xl border border-[#e5e7eb] p-6">
            <h3 className="font-bold text-[#0b1220] mb-4 text-lg">Explore Our Services & Coverage</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/handyman-services/">
                <span className="inline-flex items-center gap-1 text-[#ff5b00] font-semibold hover:underline text-sm">
                  All Handyman Services <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link href="/gbp/des-peres-mo/">
                <span className="inline-flex items-center gap-1 text-[#ff5b00] font-semibold hover:underline text-sm">
                  West St. Louis County <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link href="/handyman-chesterfield-mo/">
                <span className="inline-flex items-center gap-1 text-[#ff5b00] font-semibold hover:underline text-sm">
                  Chesterfield, MO <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link href="/handyman-ballwin-mo/">
                <span className="inline-flex items-center gap-1 text-[#ff5b00] font-semibold hover:underline text-sm">
                  Ballwin, MO <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link href="/gbp/edwardsville-il/">
                <span className="inline-flex items-center gap-1 text-[#ff5b00] font-semibold hover:underline text-sm">
                  Edwardsville, IL <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Also Serving Metro East Illinois</h2>
          <p className="text-[#4b5563] mb-6">In addition to St. Louis MO, we serve all of Metro East Illinois. Find your city below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Edwardsville, IL", href: "/service-areas/edwardsville-handyman-services/" },
              { name: "O'Fallon, IL", href: "/service-areas/ofallon-handyman-services/" },
              { name: "Belleville, IL", href: "/service-areas/belleville-handyman-services/" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "St. Charles, MO", href: "/service-areas/st-charles-mo-handyman-services/" },
              { name: "Chesterfield, MO", href: "/service-areas/chesterfield-mo-handyman-services/" },
              { name: "Ballwin, MO", href: "/service-areas/ballwin-mo-handyman-services/" },
            ].map((area) => (
              <Link key={area.name} href={area.href}>
                <Button variant="outline" className="rounded-full border-[#e5e7eb] hover:border-[#ff5b00] hover:text-[#ff5b00]">
                  {area.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }) }} />
    </div>
  );
}
