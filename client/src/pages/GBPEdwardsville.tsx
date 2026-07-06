import { Link } from 'wouter';
import { Phone, MapPin, Star, Clock, Shield, Award, Wrench, Hammer, DoorOpen } from 'lucide-react';
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
const edwardsvilleProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint – Belleville IL",
    afterAlt: "Freshly repaired and painted door casing trim – Belleville IL",
    caption: "Interior trim & carpentry repair",
    city: "Belleville, IL",
  },
  {
    beforeSrc: "/images/carpentry-before-collinsville.webp",
    afterSrc: "/images/carpentry-after-collinsville.webp",
    beforeAlt: "Rotted wooden privacy fence with missing boards – Collinsville IL",
    afterAlt: "New cedar privacy fence boards installed – Collinsville IL",
    caption: "Fence board replacement",
    city: "Collinsville, IL",
  },
  {
    beforeSrc: "/images/deck-before-glencarbonIL.webp",
    afterSrc: "/images/deck-after-glencarbonIL.webp",
    beforeAlt: "Severely rotted deck boards with holes and moss – Glen Carbon IL",
    afterAlt: "New pressure-treated deck boards installed – Glen Carbon IL",
    caption: "Deck board replacement",
    city: "Glen Carbon, IL",
  },
];

export default function GBPEdwardsville() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <SetPagePhone phone="618-368-4335" display="(618) 368-4335" />
      <SEO {...seo} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E85818] via-[#D42408] to-[#C01800] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving Edwardsville & Surrounding Communities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Edwardsville Handyman
            </h1>
            
            <p className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto">
              Reliable handyman service for Edwardsville, Glen Carbon, Collinsville, and surrounding Metro East communities. Small jobs welcome — drywall, doors, decks, carpentry, and fixtures. Fast home repairs with same-week availability when possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:618-368-4335">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (618) 368-4335
                </Button>
              </a>
              
              <Link href="/#contact?city=Edwardsville">
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
              <span className="text-orange-100">(237 Google Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Promotion Banner */}
      <section className="py-8 bg-white">
        <div className="container">
          <SeasonalPromoBanner
            city="Edwardsville"
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
              Edwardsville Handyman Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Home Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/drywall-repair-edwardsville-il"><span className="text-[#E85818] hover:underline cursor-pointer">Drywall repair & patching</span></Link></li>
                  <li>• <Link href="/door-repair-edwardsville-il"><span className="text-[#E85818] hover:underline cursor-pointer">Door repair & installation</span></Link></li>
                  <li>• <Link href="/service-areas/window-installation-edwardsville-il/"><span className="text-[#E85818] hover:underline cursor-pointer">Window repair & replacement</span></Link></li>
                  <li>• <Link href="/deck-repair-edwardsville-il"><span className="text-[#E85818] hover:underline cursor-pointer">Deck repair & maintenance</span></Link></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Remodeling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/service-areas/bathroom-remodeling-edwardsville-il/"><span className="text-[#E85818] hover:underline cursor-pointer">Bathroom remodeling</span></Link></li>
                  <li>• Kitchen remodeling</li>
                  <li>• Basement finishing</li>
                  <li>• <Link href="/service-areas/deck-building-edwardsville-il/"><span className="text-[#E85818] hover:underline cursor-pointer">Deck construction</span></Link></li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-[#E85818]">Carpentry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/carpentry-services-edwardsville-il"><span className="text-[#E85818] hover:underline cursor-pointer">Trim & molding installation</span></Link></li>
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
              <Link href="/#contact?city=Edwardsville">
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
              Proudly Serving Edwardsville & Surrounding Areas
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We provide professional handyman and remodeling services throughout the Edwardsville area, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 mb-12">
              <div>Edwardsville</div>
              <div>Glen Carbon</div>
              <div>Collinsville</div>
              <div>Maryville</div>
              <div>Troy</div>
              <div>Granite City</div>
              <div>Wood River</div>
              <div>Alton</div>
            </div>
            
            {/* Service Area Map */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Service Coverage Area</h3>
              <p className="text-gray-600 mb-6">
                We proudly serve Edwardsville and the surrounding 5-mile radius in Metro East Illinois.
              </p>
              <ServiceAreaMap
                center={{ lat: 38.8114, lng: -89.9532 }} // Edwardsville, IL coordinates
                radiusMiles={5}
                locationName="Hero Handyman Pro - Edwardsville"
                height="500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Project Gallery */}
      <LazyProjectGallery
        projects={edwardsvilleProjects}
        title="Recent Projects Near Edwardsville"
        subtitle="Before-and-after results from homes in Edwardsville, Glen Carbon, and Collinsville."
      />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Edwardsville Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Real reviews from your neighbors in Edwardsville and surrounding communities
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
                  "We hired Hero Handyman Pro to remodel our Edwardsville bathroom. They were incredibly professional, stayed on budget, and the finished product is stunning. Best contractor we've worked with!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Karen W.</p>
                  <p className="text-sm text-gray-600">Edwardsville, IL</p>
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
                  "Phil built us a beautiful new deck at our Glen Carbon home. His attention to detail and craftsmanship is outstanding. We get compliments from neighbors all the time. Worth every penny!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Thomas H.</p>
                  <p className="text-sm text-gray-600">Glen Carbon, IL</p>
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
                  "Quick response time and excellent work! They repaired our Collinsville home's damaged trim and replaced several interior doors. Clean, efficient, and reasonably priced. Highly recommend!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Lisa M.</p>
                  <p className="text-sm text-gray-600">Collinsville, IL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <LocationFAQ
        city="Edwardsville"
        faqs={[
          {
            question: "Do you serve all of Edwardsville and surrounding communities?",
            answer: "Yes! We serve all of Edwardsville and surrounding communities including Glen Carbon, Collinsville, Maryville, Troy, Granite City, Wood River, and Alton within our 5-mile service radius."
          },
          {
            question: "What's your typical response time in Edwardsville?",
            answer: "We strive to respond to all inquiries within 2-4 hours during business hours. For emergency repairs, we offer same-day or next-day service depending on availability. Edwardsville is in our primary service area, so we can typically schedule appointments quickly."
          },
          {
            question: "Do you offer free estimates for Edwardsville projects?",
            answer: "Absolutely! We provide free, no-obligation estimates for all projects in Edwardsville and surrounding areas. Simply call us at (618) 368-4335 or fill out our contact form, and we'll schedule a convenient time to assess your project and provide a detailed quote."
          },
          {
            question: "Are you licensed and insured to work in Edwardsville?",
            answer: "Yes, Hero Handyman Pro is fully licensed and insured to perform handyman and remodeling work throughout Metro East Illinois, including Edwardsville. We carry general liability insurance and workers' compensation coverage for your protection and peace of mind."
          },
          {
            question: "Do you work with SIUE students and faculty?",
            answer: "Yes! We serve the SIUE community including students, faculty, and staff. We understand the unique needs of the university community and offer flexible scheduling and competitive pricing for smaller projects and rental property repairs."
          },
          {
            question: "How far in advance should I schedule a project in Edwardsville?",
            answer: "For smaller repairs and handyman services, we can often accommodate same-week or next-week appointments. For larger remodeling projects like bathroom or kitchen renovations, we recommend scheduling 2-3 weeks in advance to ensure availability. Contact us as soon as you know your timeline!"
          }
        ]}
      />

      {/* Schema Markup */}
      <LocalBusinessSchema
        city="Edwardsville"
        state="IL"
        pageUrl="/gbp/edwardsville-il/"
        phone="+1-618-368-4335"
      />

      {/* CTA Section */}
      {/* Specialized Service Pages */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3 text-gray-900">Specialized Handyman Services in Edwardsville, IL</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Need help with a specific repair? Explore our dedicated Edwardsville service pages for detailed information and what to expect.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/drywall-repair-edwardsville-il">
                <div className="group border border-gray-200 rounded-2xl p-6 hover:border-[#E85818] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="bg-orange-50 rounded-full p-3 w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                    <Wrench className="h-6 w-6 text-[#E85818]" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#E85818] transition-colors">Drywall Repair</h3>
                  <p className="text-gray-500 text-sm mb-4">Holes, cracks, water damage, and ceiling repairs — patched and finished to match your existing texture.</p>
                  <span className="text-[#E85818] font-semibold text-sm">View Drywall Repair →</span>
                </div>
              </Link>
              <Link href="/deck-repair-edwardsville-il">
                <div className="group border border-gray-200 rounded-2xl p-6 hover:border-[#E85818] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="bg-orange-50 rounded-full p-3 w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                    <Hammer className="h-6 w-6 text-[#E85818]" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#E85818] transition-colors">Deck Repair</h3>
                  <p className="text-gray-500 text-sm mb-4">Rotted boards, loose railings, structural damage, and deck staining — restored to safe, solid condition.</p>
                  <span className="text-[#E85818] font-semibold text-sm">View Deck Repair →</span>
                </div>
              </Link>
              <Link href="/door-repair-edwardsville-il">
                <div className="group border border-gray-200 rounded-2xl p-6 hover:border-[#E85818] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="bg-orange-50 rounded-full p-3 w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                    <DoorOpen className="h-6 w-6 text-[#E85818]" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#E85818] transition-colors">Door Repair</h3>
                  <p className="text-gray-500 text-sm mb-4">Sticking doors, broken hardware, damaged frames, and storm door repairs — fixed right the first time.</p>
                  <span className="text-[#E85818] font-semibold text-sm">View Door Repair →</span>
                </div>
              </Link>
              <Link href="/carpentry-services-edwardsville-il">
                <div className="group border border-gray-200 rounded-2xl p-6 hover:border-[#E85818] hover:shadow-md transition-all cursor-pointer h-full">
                  <div className="bg-orange-50 rounded-full p-3 w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                    <Wrench className="h-6 w-6 text-[#E85818]" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#E85818] transition-colors">Carpentry Services</h3>
                  <p className="text-gray-500 text-sm mb-4">Trim repair, exterior carpentry, cabinet adjustments, and custom built-in repairs for Edwardsville homes.</p>
                  <span className="text-[#E85818] font-semibold text-sm">View Carpentry Services →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#E85818] to-[#D42408] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Have a small repair or punch-list project? Call Hero Handyman Pro at 800-741-6056 or request a free quote. Reliable handyman service with same-week availability when possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:618-368-4335">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (618) 368-4335
                </Button>
              </a>
              <Link href="/#contact?city=Edwardsville">
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
}
