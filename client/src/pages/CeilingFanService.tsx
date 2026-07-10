import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Phone, Star, Wrench, DollarSign, ArrowRight, Zap } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import SEO from "@/components/SEO";
import ServiceSchema from "@/components/ServiceSchema";
import InlineQuoteForm from "@/components/InlineQuoteForm";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function CeilingFanService() {
  const seo = useSeoRoute();  const processSteps = [
    { num: "1", title: "Assess the Box", desc: "We check the existing electrical box to confirm it's rated for a ceiling fan. If not, we install a fan-rated box before proceeding." },
    { num: "2", title: "Turn Off Power", desc: "We shut off the circuit at the breaker and verify with a voltage tester — safety first on every job." },
    { num: "3", title: "Mount & Wire", desc: "We assemble the fan, mount it to the brace or box, and connect the wiring following NEC guidelines." },
    { num: "4", title: "Balance & Test", desc: "We balance the blades, test all speeds and the light kit, and verify the remote or wall switch works correctly." },
    { num: "5", title: "Cleanup", desc: "We remove all packaging, clean up debris, and leave your room exactly as we found it — just with a new fan." },
  ];

  const pricingRanges = [
    { type: "Replace Existing Fan", range: "$100 – $200", note: "Existing wiring and fan-rated box in place" },
    { type: "New Install (existing box)", range: "$150 – $250", note: "Existing fan-rated electrical box present" },
    { type: "New Install (new box needed)", range: "$200 – $350", note: "Includes fan-rated box installation" },
    { type: "Install with New Wiring", range: "$300 – $600+", note: "Running new circuit from panel" },
    { type: "High-Ceiling / Downrod Fan", range: "$175 – $350", note: "Vaulted or high ceilings, extra labor" },
    { type: "Fan Repair / Troubleshoot", range: "$75 – $175", note: "Wobbling, noise, speed issues, remote pairing" },
  ];

  const faqs = [
    {
      question: "Do I need an electrician to install a ceiling fan?",
      answer: "Not necessarily. If you're replacing an existing ceiling fan or light fixture on an existing circuit with a fan-rated electrical box, a licensed handyman can handle the installation. If you need new wiring run from the panel, that requires a licensed electrician. We'll assess your situation and let you know upfront which applies."
    },
    {
      question: "How long does ceiling fan installation take?",
      answer: "Replacing an existing fan typically takes 45–90 minutes. A new installation where a fan-rated box already exists takes 1–2 hours. If we need to install a new fan-rated box or run new wiring, plan for 2–4 hours. We complete most ceiling fan installations in a single visit."
    },
    {
      question: "How much does ceiling fan installation cost in St. Louis?",
      answer: "Replacing an existing ceiling fan runs $100–$200 for labor. New installations with existing wiring are $150–$350. If new wiring is needed, costs start at $300+. We provide a firm written estimate before starting any work — no surprise charges."
    },
    {
      question: "Can you install a ceiling fan where there's only a light fixture?",
      answer: "Yes, in most cases. We'll check whether the existing electrical box is fan-rated (most light fixture boxes are not). If it isn't, we install a fan-rated brace and box before mounting the fan. This adds about $50–$100 to the cost and 30–45 minutes to the job."
    },
    {
      question: "My ceiling fan wobbles — can you fix it?",
      answer: "Yes. Wobbling is usually caused by unbalanced blades, loose blade brackets, or an improperly mounted fan. We diagnose the cause and fix it — often in under an hour. We can also balance blades using a balancing kit if the blades are slightly warped."
    },
    {
      question: "Can you install a ceiling fan on a vaulted or high ceiling?",
      answer: "Yes. Vaulted ceilings require an angled mounting bracket, and high ceilings (9+ feet) need a downrod extension to keep the fan at the right height (7–9 feet from the floor). We carry the necessary hardware and can install ceiling fans on most ceiling types."
    },
    {
      question: "Do you install ceiling fans with remote controls or smart fans?",
      answer: "Yes — we install ceiling fans with remote controls, wall controls, and smart fans compatible with Alexa, Google Home, or SmartThings. We'll pair the remote or connect the smart fan to your home network as part of the installation."
    },
    {
      question: "What ceiling fan brands do you work with?",
      answer: "We install ceiling fans from all major brands including Hunter, Hampton Bay, Minka-Aire, Progress Lighting, and Casablanca. We can also install fans you've already purchased or help you select a model that fits your room size and ceiling height."
    },
  ];

  return (
    <div className="flex flex-col">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Ceiling Fan Installation" }
  ]} />
      <SEO {...seo} />
      <ServiceSchema
        serviceName="Ceiling Fan Installation"
        description="Professional ceiling fan installation, replacement, and repair across St. Louis and Metro East Illinois. Safe wiring, balanced mounting, and smart fan setup."
        serviceType="ElectricalService"
        areaServed="Metro East Illinois and St. Louis, MO"
        priceRange="$$"
        pageUrl="/handyman-services/ceiling-fan-installation/"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1f2937] via-[#020617] to-[#020617] text-white py-16 md:py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff5b00] text-sm font-bold uppercase tracking-widest mb-4 block">Ceiling Fan Installation</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Ceiling Fan Installation St. Louis &amp; Metro East
              </h1>
              <p className="text-[#e5e7eb] text-lg mb-6">
                New installs, fan replacements, wobble repairs, and smart fan setup — done safely and correctly. Serving St. Louis, Edwardsville, O'Fallon, and all of Metro East IL.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Free Quote in 24 hrs", "Same/Next-Day Available", "Licensed & Insured", "30+ Years Experience"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" onClick={() => trackCTAClick('Get Free Quote in 24 Hours', 'Ceiling Fan Installation Hero Section')}>
                  <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-[#ff5b00]/30">
                    Get Free Quote in 24 Hours
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Ceiling Fan Installation Hero Section')}>
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
                  "All fan types including smart & remote fans",
                  "Fan-rated box installation if needed",
                  "Vaulted & high-ceiling installs",
                  "Serving St. Louis & Metro East IL",
                  "Wobble repair & remote pairing included",
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

      {/* What We Do */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Ceiling Fan Services We Provide</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">From a simple fan swap to a new install on a vaulted ceiling, we handle all ceiling fan work in St. Louis and Metro East.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "New Installations", items: ["Replace light fixture with fan", "New fan-rated box install", "Vaulted ceiling fan install", "Smart fan & remote setup"] },
              { title: "Fan Replacements", items: ["Swap old fan for new model", "Upgrade to larger fan", "Replace broken or outdated fan", "Install fan you've purchased"] },
              { title: "Repairs & Troubleshooting", items: ["Wobbling blade repair", "Speed control issues", "Remote/wall switch pairing", "Noise diagnosis & fix"] },
            ].map((cat, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 border border-[#e5e7eb]">
                <div className="bg-[#ff5b00]/10 rounded-full p-3 w-fit mb-4">
                  <Wrench className="h-6 w-6 text-[#ff5b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1220] mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#4b5563]">
                      <Check className="h-4 w-4 text-[#ff5b00] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
            <Zap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Energy Savings Tip</h3>
              <p className="text-blue-800 text-sm">Running a ceiling fan can make a room feel up to 4°F cooler, allowing you to raise your thermostat and reduce AC costs by up to 40% in summer. In winter, reverse the fan direction to push warm air down from the ceiling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Our Ceiling Fan Installation Process</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">Safe, professional, and thorough — from electrical check to final test.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Ceiling Fan Installation Cost in St. Louis</h2>
            <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
              Transparent, upfront pricing — you'll know the cost before we start. These are labor-only ranges; fan cost is separate unless otherwise noted.
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
            * Labor estimates only. Fan and hardware costs are additional. Final price confirmed before work begins.
          </p>
        </div>
      </section>

      {/* Inline Quote Form */}
      <section className="py-16 px-6 bg-[#0b1220]">
        <div className="max-w-[600px] mx-auto">
          <InlineQuoteForm
            service="Ceiling Fan Installation"
            heading="Get Your Free Ceiling Fan Quote in 24 Hours"
            subheading="Tell us about your ceiling fan project and we'll respond within 24 hours with a clear, upfront estimate."
          />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">What to Expect When You Book Ceiling Fan Service</h2>
          <p className="text-[#4b5563] mb-10 max-w-2xl">From first call to finished installation — here's how ceiling fan work goes with Hero Handyman Pro:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Call or Text Your Project", desc: "Tell us how many fans, the ceiling height, and whether there's an existing box or just a light fixture. We can often give a ballpark estimate over the phone before scheduling." },
              { step: "2", title: "On-Site Assessment", desc: "We verify the existing wiring, check if the junction box is fan-rated, and confirm whether a brace kit is needed for older boxes. Vaulted ceilings and high ceilings are assessed for downrod length." },
              { step: "3", title: "Written Quote", desc: "You receive a firm written quote before any work begins. We include all labor and any hardware needed (brace kits, downrods, wire nuts). Fan units are typically customer-supplied." },
              { step: "4", title: "Installation", desc: "We install the fan, connect all wiring, balance the blades, and pair any remote or smart control. Most single-fan installations take 45–90 minutes. Multi-fan jobs are priced per fan." },
              { step: "5", title: "Wobble & Balance Check", desc: "We run the fan on all speeds and check for wobble. If blades are unbalanced, we use a balancing kit to correct it before we leave. A wobbling fan is a fixable problem, not a defective fan." },
              { step: "6", title: "Cleanup & Demo", desc: "We remove all packaging, clean up any ceiling dust, and walk you through the remote or wall control operation. The room is left cleaner than we found it." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
                <div className="w-10 h-10 bg-[#ff5b00] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-bold text-[#0b1220] mb-2">{item.title}</h3>
                <p className="text-[#4b5563] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-[#0b1220]">Recent Ceiling Fan Projects</h2>
          <p className="text-[#4b5563] mb-10 max-w-2xl">Real ceiling fan installations completed by Hero Handyman Pro across Metro East Illinois and West St. Louis County.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "O'Fallon, IL",
                title: "3-Fan Installation in New Construction",
                desc: "A new homeowner in O'Fallon needed three ceiling fans installed in the master bedroom, living room, and sunroom. All three locations had existing fan-rated boxes with proper wiring. We installed all three fans in a single afternoon, including a remote-controlled model in the living room and a damp-rated fan for the sunroom. Total job time: 3.5 hours."
              },
              {
                city: "Edwardsville, IL",
                title: "Vaulted Ceiling Fan Installation",
                desc: "An Edwardsville homeowner had a 14-foot vaulted ceiling in their great room and wanted a ceiling fan but had been told by others it was too complicated. We installed a 52-inch fan with an 18-inch downrod, bringing the blade height to a safe 9 feet, and ran the wiring from the existing light fixture box. The homeowner was thrilled — the room is now comfortable in both summer and winter."
              },
              {
                city: "Collinsville, IL",
                title: "Wobbling Fan Diagnosis & Repair",
                desc: "A Collinsville homeowner had a ceiling fan that wobbled so badly it was shaking the light kit loose. We diagnosed the issue as two blade brackets that had bent slightly over time, causing uneven blade pitch. We replaced the blade brackets, re-balanced all five blades with a balancing kit, and tightened the canopy mounting. The fan now runs smoothly on all three speeds."
              },
              {
                city: "Belleville, IL",
                title: "Smart Fan Installation with App Control",
                desc: "A Belleville homeowner wanted to upgrade their bedroom fan to a smart model compatible with their Alexa system. We removed the old fan, installed a new smart ceiling fan with a Wi-Fi module, connected it to their home network, and configured the Alexa skill. The homeowner can now control fan speed and light dimming by voice or app."
              },
              {
                city: "Glen Carbon, IL",
                title: "Fan Box Upgrade & Installation",
                desc: "A Glen Carbon homeowner wanted to add a ceiling fan to a room that only had a standard light fixture. The existing junction box was not fan-rated. We installed an expandable fan brace kit through the existing hole without opening the ceiling, replaced the box with a fan-rated unit, ran the wiring, and installed the new fan. No drywall repair needed."
              },
            ].map((project, i) => (
              <div key={i} className="border border-[#e5e7eb] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-[#ff5b00]" />
                  <span className="text-xs font-semibold text-[#ff5b00] uppercase tracking-wide">{project.city}</span>
                </div>
                <h3 className="font-bold text-[#0b1220] mb-3">{project.title}</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1220] mb-2">What Homeowners Are Saying</h2>
            <div className="flex items-center justify-center gap-2 text-[#ff5b00]">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-[#ff5b00]" />)}
              <span className="text-[#4b5563] ml-2">4.9 average · 127+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Installed three ceiling fans in one afternoon. Clean work, no mess left behind, and he even paired the remotes for us. Highly recommend.", author: "Amy B., O'Fallon IL" },
              { text: "My fan was wobbling terribly. Hero Handyman diagnosed a loose blade bracket and fixed it in 20 minutes. Saved me from buying a new fan.", author: "Tom K., Edwardsville IL" },
              { text: "Had a vaulted ceiling — other handymen wouldn't touch it. Hero Handyman came out, installed a downrod fan, and it looks great.", author: "Lisa M., St. Louis MO" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1220] mb-4">Ceiling Fan Installation FAQs</h2>
            <p className="text-[#4b5563]">Common questions from St. Louis and Metro East homeowners about ceiling fan installation.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0b1220] mb-4">Ceiling Fan Installation Near You</h2>
          <p className="text-[#4b5563] mb-6">We serve all of St. Louis and Metro East Illinois. Find your city below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Edwardsville, IL", href: "/gbp/edwardsville-il/" },
              { name: "O'Fallon, IL", href: "/gbp/ofallon-il/" },
              { name: "Belleville, IL", href: "/handyman-belleville-il" },
              { name: "Collinsville, IL", href: "/service-areas/collinsville-handyman-services/" },
              { name: "Glen Carbon, IL", href: "/service-areas/glen-carbon-handyman-services/" },
              { name: "St. Charles, MO", href: "/service-areas/st-charles-handyman-services/" },
              { name: "Chesterfield, MO", href: "/handyman-chesterfield-mo" },
              { name: "Ballwin, MO", href: "/handyman-ballwin-mo" },
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
