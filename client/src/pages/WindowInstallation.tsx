import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, Shield, Star } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function WindowInstallation() {
  const seo = useSeoRoute();
  const faqs = [
    {
      question: "How much does window installation cost?",
      answer: "Window installation costs vary based on the type, size, and number of windows. Single window replacement typically ranges from $300-$1,000 per window including installation. Whole-home window replacement projects average $5,000-$15,000 depending on the number of windows and materials chosen. We provide free, detailed quotes with no obligation."
    },
    {
      question: "How long does window installation take?",
      answer: "Most single window installations take 1-2 hours per window. A typical whole-home window replacement project (10-15 windows) can be completed in 1-2 days. We work efficiently to minimize disruption to your daily routine while ensuring quality installation."
    },
    {
      question: "What types of windows do you install?",
      answer: "We install all types of windows including double-hung, casement, sliding, bay, bow, picture, awning, and egress windows. We work with energy-efficient vinyl, wood, fiberglass, and composite window materials from trusted manufacturers. We'll help you choose the best windows for your home's style, budget, and energy efficiency goals."
    },
    {
      question: "Do you offer a warranty on window installation?",
      answer: "Yes! We provide a lifetime labor warranty on all window installation work. This covers any installation-related issues for as long as you own your home. Window materials and glass are covered by the manufacturer's warranty, which we'll explain in detail during your quote."
    },
    {
      question: "Will new windows really lower my energy bills?",
      answer: "Yes, modern energy-efficient windows can reduce heating and cooling costs by 15-30% compared to old, drafty windows. New windows with Low-E glass coatings and proper insulation prevent heat transfer, keeping your home comfortable year-round while reducing strain on your HVAC system."
    },
    {
      question: "Can you match my existing window style?",
      answer: "Absolutely! We can match your existing window style, color, and grid pattern to maintain your home's aesthetic. Whether you're replacing one window or all of them, we ensure the new windows blend seamlessly with your home's architecture."
    }
  ];  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <FAQSchema faqs={faqs} pageUrl="/handyman-services/window-installation/" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Professional Window Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Window Installation & Replacement in St. Louis & Metro East
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Upgrade your home's energy efficiency, curb appeal, and comfort with professional window installation and replacement services. From single window replacements to whole-home upgrades, we handle every detail with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking/">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Window Quote', 'Window Installation - Hero CTA')}
                >
                  Get Free Window Quote
                </Button>
              </Link>
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Window Installation Hero')}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 800-741-6056
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 bg-gray-50 border-b border-gray-200">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Licensed & Insured</div>
              <div className="text-sm text-gray-600">Fully Certified</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Same-Day Quotes</div>
              <div className="text-sm text-gray-600">Fast Response</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Lifetime Labor Warranty</div>
              <div className="text-sm text-gray-600">On All Work</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">4.9 Rating</div>
              <div className="text-sm text-gray-600">235+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Complete Window Installation & Replacement Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Whether you need a single window replaced or a complete home window upgrade, we provide expert installation with attention to every detail.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Window Installation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Single-hung and double-hung windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Casement and awning windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Sliding windows and picture windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Bay and bow windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Garden windows and specialty shapes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Window Replacement</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Full-frame window replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Insert window replacement (retrofit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Energy-efficient window upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Rotted frame repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Window trim and casing installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Window Repair</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Broken glass replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Seal failure and foggy glass repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Window balance and hardware replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Stuck or difficult-to-open window repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Weatherstripping and draft sealing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Window screen repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Storm window installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Window well installation and repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Egress window installation (basement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Window caulking and weatherproofing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Hero Handyman Pro for Window Installation?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">
                35+ years of experience installing windows of all types and sizes. We ensure proper fit, seal, and weatherproofing every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Materials</h3>
              <p className="text-gray-600">
                We work with top window manufacturers and help you choose energy-efficient options that reduce heating and cooling costs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficient Service</h3>
              <p className="text-gray-600">
                Most window installations completed in 1-2 days. We minimize disruption to your home and clean up completely when done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews CTA */}
      <section className="py-12 px-6 bg-teal-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            See What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Read authentic reviews from homeowners who trusted us with their window installation projects.
          </p>
          <Link href="/reviews/window-installation/">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-8"
              onClick={() => trackCTAClick('Read Customer Reviews', 'Window Installation - Reviews CTA')}
            >
              <Star className="w-5 h-5 mr-2" />
              Read Customer Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving St. Louis & Metro East
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Professional window installation services throughout the region
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/gbp/ofallon-il/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">O'Fallon, IL</span></Link>
            <Link href="/gbp/edwardsville-il/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Edwardsville, IL</span></Link>
            <Link href="/service-areas/collinsville-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Collinsville, IL</span></Link>
            <Link href="/handyman-belleville-il"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Belleville, IL</span></Link>
            <Link href="/service-areas/glen-carbon-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Glen Carbon, IL</span></Link>
            <Link href="/service-areas/st-louis-mo-handyman/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">St. Louis, MO</span></Link>
            <Link href="/service-areas/st-charles-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">St. Charles, MO</span></Link>
            <Link href="/service-areas/fenton-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Fenton, MO</span></Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Window Installation & Repair Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Transparent pricing for St. Louis and Metro East homeowners. Final price confirmed in writing before we start.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { type: "Single Window Replacement", range: "$300 – $1,000", note: "Per window, includes installation and trim" },
              { type: "Whole-Home Window Replacement", range: "$5,000 – $15,000", note: "10–15 windows; varies by size and material" },
              { type: "Broken Glass Replacement", range: "$150 – $400", note: "Single pane; double-pane IGU replacement" },
              { type: "Foggy/Seal Failure Repair", range: "$200 – $500", note: "IGU replacement without full frame" },
              { type: "Window Balance Replacement", range: "$100 – $250", note: "Per window; fixes stuck or won't-stay-open windows" },
              { type: "Weatherstripping & Caulking", range: "$75 – $200", note: "Per window; stops drafts and air leaks" },
              { type: "Window Screen Repair", range: "$50 – $150", note: "Re-screening or frame repair" },
              { type: "Storm Window Installation", range: "$200 – $500", note: "Per window; adds insulation layer" },
              { type: "Egress Window (Basement)", range: "$1,500 – $3,500", note: "Includes well, cover, and framing" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.type}</h3>
                <p className="text-teal-700 font-bold text-lg mb-1">{item.range}</p>
                <p className="text-gray-500 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            * Prices are estimates. Final price confirmed before work begins. <Link href="/blog/window-repair-cost-ofallon-il/" className="text-teal-700 underline hover:text-teal-900">See our detailed Window Repair Cost Guide</Link> for more pricing breakdowns.
          </p>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Repair or Replace? Honest Advice.
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Not every window problem requires full replacement. We'll tell you which option makes more financial sense.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">REPAIR</span>
                When repair makes sense
              </h3>
              <ul className="space-y-3">
                {[
                  "Broken single pane in an otherwise good frame",
                  "Foggy IGU (seal failure) — replace just the glass unit",
                  "Window won't stay open (balance spring replacement)",
                  "Drafts from worn weatherstripping or failed caulk",
                  "Stuck or hard-to-open window (hardware or paint)",
                  "Screen damage (re-screen is fast and affordable)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">Repair typically costs 60–80% less than full replacement when the frame is structurally sound.</p>
            </div>
            <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded-full">REPLACE</span>
                When replacement makes sense
              </h3>
              <ul className="space-y-3">
                {[
                  "Frame is rotted, warped, or structurally compromised",
                  "Window is 20+ years old with single-pane glass",
                  "Multiple problems at once (frame + glass + hardware)",
                  "Energy bills are high due to poor insulation",
                  "You want to upgrade to Low-E or triple-pane glass",
                  "Egress or code compliance requires a larger opening",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">Modern energy-efficient windows can reduce heating and cooling costs by 15–30% compared to old single-pane windows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local & Seasonal Context */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Window Issues Common in St. Louis & Metro East
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Our climate creates specific window problems that we see regularly across the region.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Seal Failure (Foggy Glass)",
                desc: "The freeze-thaw cycles of St. Louis winters stress IGU seals. When the seal fails, argon gas escapes and moisture gets between the panes, causing permanent fogging. This is the #1 window repair call we receive in Metro East.",
                fix: "IGU replacement: $200–$500 per window"
              },
              {
                title: "Wood Frame Rot",
                desc: "Older Metro East and St. Louis homes (1950s–1980s) often have wood-frame windows. Summer humidity and winter rain accelerate rot at the sill and bottom rail. Caught early, rot can be repaired with epoxy filler. Advanced rot requires frame replacement.",
                fix: "Rot repair: $150–$400 · Full frame: $400–$900"
              },
              {
                title: "Stuck or Painted-Shut Windows",
                desc: "Many older homes in the region have windows that were painted shut during renovations. This is a fire safety hazard. We can free stuck windows, replace broken balance springs, and restore smooth operation without full replacement.",
                fix: "Window freeing + balance: $100–$250"
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <p className="text-teal-700 font-semibold text-sm">{item.fix}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-3">For detailed pricing on window repairs in O'Fallon and Metro East, see our comprehensive cost guide.</p>
            <Link href="/blog/window-repair-cost-ofallon-il/">
              <Button variant="outline" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-6">
                Window Repair Cost Guide — O'Fallon IL
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Common questions about our window installation and replacement services.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Get a free quote for professional window installation and replacement services. Same-day estimates available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Window Installation - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Window Installation Bottom')}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call: 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
