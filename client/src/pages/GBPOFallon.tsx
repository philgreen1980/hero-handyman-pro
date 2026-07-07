import { Link } from 'wouter';
import { Phone, MapPin, Star, Clock, Shield, Award, Wrench, Home, Hammer, Zap, CheckCircle } from 'lucide-react';
import { SetPagePhone } from '@/contexts/PhoneContext';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { SeasonalPromoBanner } from '@/components/SeasonalPromoBanner';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { LocationFAQ } from '@/components/LocationFAQ';
import SEO from '@/components/SEO';
import LazyProjectGallery from '@/components/LazyProjectGallery';
import type { ProjectPair } from '@/components/ProjectGallery';
import { useSeoRoute } from '@/hooks/useSeoRoute';
const ofallonProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/drywall-before-stlouis.webp",
    afterSrc: "/images/drywall-after-stlouis.webp",
    beforeAlt: "Water-damaged ceiling with large brown stain and cracked drywall – O'Fallon IL area",
    afterAlt: "Repaired and freshly painted ceiling, smooth and stain-free – O'Fallon IL area",
    caption: "Water-damaged ceiling drywall repair",
    city: "O'Fallon, IL",
  },
  {
    beforeSrc: "/images/door-before-stcharles.webp",
    afterSrc: "/images/door-after-stcharles.webp",
    beforeAlt: "Old damaged front door with peeling paint and torn weatherstripping – O'Fallon IL area",
    afterAlt: "New navy blue fiberglass front door with sidelights installed – O'Fallon IL area",
    caption: "Front door replacement",
    city: "O'Fallon, IL",
  },
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint – Belleville IL",
    afterAlt: "Freshly repaired and painted door casing trim – Belleville IL",
    caption: "Interior trim & carpentry repair",
    city: "Belleville, IL",
  },
];

export default function GBPOFallon() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <SetPagePhone phone="618-353-0955" display="(618) 353-0955" />
      <SEO {...seo} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E85818] via-[#D42408] to-[#C01800] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving O'Fallon & Metro East Illinois</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted O'Fallon Handyman
            </h1>
            
            <p className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto">
              Reliable handyman service for O'Fallon, Belleville, Fairview Heights, and surrounding Metro East communities. Small jobs welcome — drywall, doors, decks, carpentry, and fixtures. Punch-list repairs and fast home repairs with same-week availability when possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:618-353-0955">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (618) 353-0955
                </Button>
              </a>
              
              <Link href="/#contact?city=O%27Fallon">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-6">
                  Get Free Estimate
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-yellow-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9 Stars</span>
              <span className="text-orange-100">(135 Google Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Promotion Banner */}
      <section className="py-8 bg-white">
        <div className="container">
          <SeasonalPromoBanner
            city="O'Fallon"
            promotion={{
              title: "Spring & Summer Home Repair Specials",
              description: "Get your home ready for the season with professional handyman services from Hero Handyman Pro. From drywall repairs and door replacements to deck repairs and punch-list projects, we make home repair easy.",
              discount: "Free Est.",
              validUntil: "August 31, 2026"
            }}
          />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#E85818]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">35+ Years Experience</h3>
              <p className="text-gray-600">Trusted expertise in home repairs</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Immediate Response</h3>
              <p className="text-gray-600">We strive to respond immediately</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#E85818]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Top-Rated Service</h3>
              <p className="text-gray-600">4.9-star Google rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O'Fallon Handyman Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Home Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Drywall repair & patching</li>
                  <li>• <Link href="/door-repair-ofallon-il" className="text-[#E85818] hover:underline">Door repair & installation</Link></li>
                  <li>• <Link href="/service-areas/window-installation-ofallon-il/" className="text-[#E85818] hover:underline">Window repair & replacement</Link></li>
                  <li>• <Link href="/service-areas/deck-repair-st-louis-mo/" className="text-[#E85818] hover:underline">Deck repair & maintenance</Link></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Remodeling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/service-areas/bathroom-remodeling-ofallon-il/" className="text-[#E85818] hover:underline">Bathroom remodeling</Link></li>
                  <li>• Kitchen remodeling</li>
                  <li>• Basement finishing</li>
                  <li>• <Link href="/service-areas/deck-building-ofallon-il/" className="text-[#E85818] hover:underline">Deck construction</Link></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Carpentry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Trim & molding installation</li>
                  <li>• Custom shelving</li>
                  <li>• Cabinet installation</li>
                  <li>• Structural repairs</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Electrical & Plumbing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ceiling fan installation</li>
                  <li>• Light fixture installation</li>
                  <li>• Faucet repair & replacement</li>
                  <li>• Toilet installation & repair</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/#contact?city=O%27Fallon">
                <Button size="lg" className="bg-[#E85818] hover:bg-[#E85818] text-white">
                  Request Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proudly Serving O'Fallon & Surrounding Areas
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We provide professional handyman and remodeling services throughout Metro East Illinois, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 mb-12">
              <div>O'Fallon</div>
              <div>Belleville</div>
              <div>Fairview Heights</div>
              <div>Swansea</div>
              <div>Shiloh</div>
              <div>Scott AFB</div>
              <div>Mascoutah</div>
              <div>Lebanon</div>
            </div>
            
            {/* Service Area Map */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Service Coverage Area</h3>
              <p className="text-gray-600 mb-6">
                We proudly serve O'Fallon and the surrounding 5-mile radius in Metro East Illinois.
              </p>
              <ServiceAreaMap
                center={{ lat: 38.5962, lng: -89.9118 }} // O'Fallon, IL coordinates
                radiusMiles={5}
                locationName="Hero Handyman Pro - O'Fallon"
                height="500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={ofallonProjects}
        title="Recent Projects Near O'Fallon"
        subtitle="Before-and-after results from homes in O'Fallon, Belleville, and surrounding communities."
      />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What O'Fallon Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Real reviews from your neighbors in O'Fallon and Metro East Illinois
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Hero Handyman Pro installed new ceiling fans in our O'Fallon home and repaired our front porch. They were punctual, professional, and did beautiful work. Couldn't be happier!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Michael R.</p>
                  <p className="text-sm text-gray-600">O'Fallon, IL</p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "We had water damage in our Belleville bathroom and needed drywall repair. Phil responded immediately and had it fixed within two days. Great communication and quality work!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Amanda L.</p>
                  <p className="text-sm text-gray-600">Belleville, IL</p>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excellent handyman service! They replaced our old doors and installed new trim throughout our Fairview Heights home. Fair pricing and top-notch craftsmanship. Highly recommend!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">David P.</p>
                  <p className="text-sm text-gray-600">Fairview Heights, IL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <LocationFAQ
        city="O'Fallon"
        faqs={[
          {
            question: "Do you serve all of O'Fallon and surrounding Metro East communities?",
            answer: "Yes! We serve all of O'Fallon, IL and surrounding Metro East communities including Belleville, Fairview Heights, Swansea, Shiloh, Scott AFB, Mascoutah, and Lebanon within our 5-mile service radius."
          },
          {
            question: "What's your typical response time in O'Fallon?",
            answer: "We strive to respond to all inquiries within 2-4 hours during business hours. For emergency repairs, we offer same-day or next-day service depending on availability. O'Fallon is in our primary Metro East service area, so we can typically schedule appointments quickly."
          },
          {
            question: "Do you offer free estimates for O'Fallon projects?",
            answer: "Absolutely! We provide free, no-obligation estimates for all projects in O'Fallon and Metro East Illinois. Simply call us at (618) 353-0955 or fill out our contact form, and we'll schedule a convenient time to assess your project and provide a detailed quote."
          },
          {
            question: "Are you licensed and insured to work in O'Fallon?",
            answer: "Yes, Hero Handyman Pro is fully licensed and insured to perform handyman and remodeling work throughout Metro East Illinois, including O'Fallon. We carry general liability insurance and workers' compensation coverage for your protection and peace of mind."
          },
          {
            question: "Do you work with Scott Air Force Base personnel?",
            answer: "Yes! We proudly serve military families and personnel stationed at Scott AFB. We understand the unique needs of military families and offer flexible scheduling to accommodate deployment and PCS timelines."
          },
          {
            question: "How far in advance should I schedule a project in O'Fallon?",
            answer: "For smaller repairs and handyman services, we can often accommodate same-week or next-week appointments. For larger remodeling projects like bathroom or kitchen renovations, we recommend scheduling 2-3 weeks in advance to ensure availability. Contact us as soon as you know your timeline!"
          }
        ]}
      />

      {/* Popular Handyman Services in O'Fallon — NEW SECTION */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Popular Handyman Services in O'Fallon
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From quick punch-list repairs to full project builds, Hero Handyman Pro handles the jobs O'Fallon homeowners call about most. Small jobs welcome — no project is too small.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Drywall Repair */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E85818] rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Drywall Repair</h3>
                <p className="text-gray-600 text-sm mb-3">Holes, cracks, water damage, ceiling repair, and texture matching. Fast turnaround — often same week.</p>
                <Link href="/handyman-services/drywall-repair/" className="text-[#E85818] font-semibold text-sm hover:underline">Learn More →</Link>
              </div>

              {/* Deck Repair */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Deck Repair & Staining</h3>
                <p className="text-gray-600 text-sm mb-3">Rotted boards, loose railings, structural damage, and deck staining. We restore decks to safe, beautiful condition.</p>
                <Link href="/handyman-services/deck-repair/" className="text-[#E85818] font-semibold text-sm hover:underline">Learn More →</Link>
              </div>

              {/* Door Installation */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E85818] rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Door Installation & Repair</h3>
                <p className="text-gray-600 text-sm mb-3">Entry doors, interior doors, patio doors, and storm doors. Installation, adjustment, and hardware replacement.</p>
                <Link href="/handyman-services/door-installation/" className="text-[#E85818] font-semibold text-sm hover:underline">Learn More →</Link>
              </div>

              {/* Carpentry */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Carpentry & Trim Work</h3>
                <p className="text-gray-600 text-sm mb-3">Baseboard, crown molding, door casing, custom shelving, and finish carpentry. Precise, clean results.</p>
                <Link href="/handyman-services/carpentry/" className="text-[#E85818] font-semibold text-sm hover:underline">Learn More →</Link>
              </div>

              {/* Ceiling Fan */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E85818] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Ceiling Fan Installation</h3>
                <p className="text-gray-600 text-sm mb-3">New ceiling fan installation, replacement, and light fixture upgrades. Fast, clean, and done right.</p>
                <Link href="/handyman-services/ceiling-fan-installation/" className="text-[#E85818] font-semibold text-sm hover:underline">Learn More →</Link>
              </div>

              {/* Small Jobs CTA */}
              <div className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <CheckCircle className="w-10 h-10 text-[#E85818]/60 mb-3" />
                  <h3 className="font-bold text-lg text-white mb-2">Small Jobs Welcome</h3>
                  <p className="text-gray-300 text-sm mb-4">No job is too small. We handle punch-list repairs, single-item fixes, and quick turnaround projects other contractors won't take.</p>
                </div>
                <Link href="/contact/">
                  <button className="w-full bg-orange-500 hover:bg-[#D42408] text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">Get a Free Quote</button>
                </Link>
              </div>
            </div>

            {/* Trust Content */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why O'Fallon Homeowners Choose Hero Handyman Pro</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E85818] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Small Jobs Welcome</p>
                    <p className="text-gray-600 text-sm">We take the repairs other contractors turn down — single holes, sticky doors, one ceiling fan.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E85818] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Fast Turnaround</p>
                    <p className="text-gray-600 text-sm">Most small repairs scheduled within the same week. We respect your time and show up when we say we will.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E85818] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Reliable Scheduling</p>
                    <p className="text-gray-600 text-sm">Confirmed appointments, clear communication, and no surprise no-shows. You'll know exactly when we're coming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O'Fallon Neighborhoods & Communities */}
      <section className="py-16 bg-[#E85818] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Neighborhoods We Serve in O'Fallon</h2>
            <p className="text-center text-orange-100 mb-10 max-w-2xl mx-auto">
              We work throughout O'Fallon and the surrounding Metro East Illinois communities — from established subdivisions to newer developments.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                "Regency Park", "Wingate", "Pheasant Ridge", "Hartmann Estates",
                "Summerfield", "Camelot", "Woodlands", "Westbury",
                "Scott AFB Area", "Shiloh", "Swansea", "Belleville",
                "Fairview Heights", "Mascoutah", "Lebanon", "Freeburg"
              ].map((n) => (
                <div key={n} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <MapPin className="w-3 h-3 text-orange-300 flex-shrink-0" />
                  <span className="text-sm font-medium">{n}</span>
                </div>
              ))}
            </div>

            {/* Common O'Fallon Homeowner Projects */}
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Common Homeowner Projects in O'Fallon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-orange-100">
                <div>• Drywall repair after water damage from roof leaks or plumbing</div>
                <div>• Deck board replacement on aging wood decks (10–20 years old)</div>
                <div>• Front door replacement for energy efficiency and curb appeal</div>
                <div>• Ceiling fan installation in bedrooms and living rooms</div>
                <div>• Trim and baseboard repair after flooring installation</div>
                <div>• Fence repair after winter storm damage</div>
                <div>• Interior door adjustment (sticking, not latching)</div>
                <div>• Punch-list repairs for home sale preparation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Helpful Resources for O'Fallon Homeowners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/handyman-st-louis-mo" className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E85818] hover:shadow-sm transition-all">
                <MapPin className="w-5 h-5 text-[#E85818] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">St. Louis Handyman Services</p>
                  <p className="text-gray-500 text-xs">Serving the full metro area</p>
                </div>
              </Link>
              <Link href="/handyman-services/deck-repair/" className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E85818] hover:shadow-sm transition-all">
                <Hammer className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Deck Repair Service</p>
                  <p className="text-gray-500 text-xs">Boards, railings, staining & more</p>
                </div>
              </Link>
              <Link href="/handyman-services/drywall-repair/" className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E85818] hover:shadow-sm transition-all">
                <Wrench className="w-5 h-5 text-[#E85818] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Drywall Repair Service</p>
                  <p className="text-gray-500 text-xs">Holes, cracks & water damage</p>
                </div>
              </Link>
              <Link href="/handyman-services/ceiling-fan-installation/" className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E85818] hover:shadow-sm transition-all">
                <Zap className="w-5 h-5 text-[#E85818] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Ceiling Fan Installation</p>
                  <p className="text-gray-500 text-xs">Fast, clean, done right</p>
                </div>
              </Link>
              <Link href="/handyman-near-me/" className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E85818] hover:shadow-sm transition-all">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Handyman Near Me</p>
                  <p className="text-gray-500 text-xs">Find local service fast</p>
                </div>
              </Link>
              <Link href="/blog/drywall-repair-cost-ofallon-il/" className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E85818] hover:shadow-sm transition-all">
                <Wrench className="w-5 h-5 text-[#E85818] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Drywall Repair Cost Guide</p>
                  <p className="text-gray-500 text-xs">What to expect in O'Fallon</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <LocalBusinessSchema
        city="O'Fallon"
        state="IL"
        pageUrl="/gbp/ofallon-il/"
        phone="+1-618-353-0955"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#E85818] to-[#D42408] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Have a small repair or punch-list project? Call Hero Handyman Pro at (618) 353-0955 or request a free quote. Reliable handyman service with same-week availability when possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:618-353-0955">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (618) 353-0955
                </Button>
              </a>
              <Link href="/#contact?city=O%27Fallon">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-6">
                  Get Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
