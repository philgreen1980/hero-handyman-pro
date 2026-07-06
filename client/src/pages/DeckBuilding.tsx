import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, Shield, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckBuilding() {
  const seo = useSeoRoute();  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Custom Deck Construction
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Deck Builders in St. Louis & Metro East
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Build the outdoor living space you've always wanted with custom deck construction from experienced professionals. From simple platforms to elaborate multi-level designs, we create beautiful, durable decks that enhance your home and lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking/">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Deck Quote', 'Deck Building - Hero CTA')}
                >
                  Get Free Deck Quote
                </Button>
              </Link>
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Building Hero')}>
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
              <div className="font-semibold text-gray-900">Free Design Consultation</div>
              <div className="text-sm text-gray-600">Expert Planning</div>
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
            Custom Deck Building Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We design and build custom decks tailored to your home, yard, and lifestyle. Whether you want a simple backyard retreat or an elaborate outdoor entertainment space, we bring your vision to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Deck Construction</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Custom deck design and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Single-level and multi-level decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Ground-level and elevated decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Wraparound and attached decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Freestanding deck structures</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deck Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Composite decking (Trex, TimberTech, Azek)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Pressure-treated wood decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Cedar and redwood decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>PVC and capped composite decking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Exotic hardwood options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Railings & Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Wood, composite, and metal railings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Glass panel and cable railing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Built-in benches and planters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Pergolas and shade structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Deck lighting and electrical</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deck Additions & Upgrades</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Deck extensions and expansions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Stairway and landing construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Privacy screens and lattice work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Hot tub and spa deck integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Fire pit and outdoor kitchen prep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Deck Building Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design Consultation</h3>
              <p className="text-gray-600">
                We visit your property to discuss your vision, take measurements, and assess site conditions. We'll provide design ideas and material recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Quote</h3>
              <p className="text-gray-600">
                We provide a comprehensive quote with material options, timeline, and all costs clearly outlined. No hidden fees or surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction</h3>
              <p className="text-gray-600">
                We handle permits, build to code, and complete your deck with expert craftsmanship. We keep your property clean and safe throughout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Final Inspection</h3>
              <p className="text-gray-600">
                We walk through the completed deck with you, ensure everything meets your expectations, and provide care instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Hero Handyman Pro for Deck Building?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                35+ years of deck building experience. We build structurally sound, beautiful decks that last for decades with proper care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Code Compliant</h3>
              <p className="text-gray-600">
                We handle all permits and build to local building codes. Your deck will pass inspection and meet all safety requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Completion</h3>
              <p className="text-gray-600">
                We provide realistic timelines and stick to them. Most decks completed in 1-2 weeks depending on size and complexity.
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
            Read authentic reviews from homeowners who trusted us with their deck building projects.
          </p>
          <Link href="/reviews/deck-building/">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-8"
              onClick={() => trackCTAClick('Read Customer Reviews', 'Deck Building - Reviews CTA')}
            >
              <Star className="w-5 h-5 mr-2" />
              Read Customer Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving St. Louis & Metro East
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Professional deck builders serving the entire region
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/service-areas/ofallon-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">O'Fallon, IL</span></Link>
            <Link href="/service-areas/edwardsville-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Edwardsville, IL</span></Link>
            <Link href="/service-areas/collinsville-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Collinsville, IL</span></Link>
            <Link href="/service-areas/belleville-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Belleville, IL</span></Link>
            <Link href="/service-areas/glen-carbon-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Glen Carbon, IL</span></Link>
            <Link href="/service-areas/st-louis-mo-handyman/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">St. Louis, MO</span></Link>
            <Link href="/service-areas/st-charles-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">St. Charles, MO</span></Link>
            <Link href="/service-areas/fenton-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Fenton, MO</span></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Dream Deck?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Get a free consultation and quote for your custom deck project. Let's discuss your vision and create an outdoor space you'll love for years to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Deck Building - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Building Bottom')}>
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
