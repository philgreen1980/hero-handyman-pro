import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, Shield, Star } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";

export default function WindowInstallation() {
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
  ];

  const seoData = {
    title: "Window Installation & Replacement St. Louis | Expert Window Services",
    description: "Professional window installation and replacement in St. Louis & Metro East. Energy-efficient windows, expert installation, lifetime labor warranty. Same-day quotes available. Call 800-741-6056",
    keywords: "window installation, window replacement, window repair, window installation near me, window replacement near me, energy efficient windows, St Louis windows, Metro East window installation",
    canonicalUrl: "https://herohandymanpro.com/handyman-services/window-installation/"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData} />
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
                30+ years of experience installing windows of all types and sizes. We ensure proper fit, seal, and weatherproofing every time.
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
            <Link href="/service-areas/ofallon-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">O'Fallon, IL</span></Link>
            <Link href="/service-areas/edwardsville-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Edwardsville, IL</span></Link>
            <Link href="/service-areas/collinsville-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Collinsville, IL</span></Link>
            <Link href="/service-areas/belleville-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Belleville, IL</span></Link>
            <Link href="/service-areas/glen-carbon-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Glen Carbon, IL</span></Link>
            <Link href="/service-areas/st-louis-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">St. Louis, MO</span></Link>
            <Link href="/service-areas/st-charles-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">St. Charles, MO</span></Link>
            <Link href="/service-areas/fenton-handyman-services/"><span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-teal-100 cursor-pointer">Fenton, MO</span></Link>
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
