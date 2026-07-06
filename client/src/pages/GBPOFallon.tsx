import { Link } from 'wouter';
import { Phone, MapPin, Star, Clock, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { SeasonalPromoBanner } from '@/components/SeasonalPromoBanner';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { LocationFAQ } from '@/components/LocationFAQ';
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function GBPOFallon() {
  return (
    <div className="min-h-screen">
      <SEO {...seoConfig.gbpOFallon} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving O'Fallon & Metro East Illinois</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted O'Fallon Handyman
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-teal-50">
              Hero Handyman Pro (formerly Rapid Repair Pro)
            </p>
            
            <p className="text-lg mb-8 text-teal-100 max-w-2xl mx-auto">
              Professional home repair and remodeling services for O'Fallon, Belleville, Fairview Heights, and surrounding Metro East communities.
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
              <span className="text-teal-100">(135 Google Reviews)</span>
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
              title: "New Year Home Refresh Special",
              description: "Start 2025 right! Get 15% off any interior repair or remodeling project over $500.",
              discount: "15% OFF",
              validUntil: "February 28, 2025"
            }}
          />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
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
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-teal-600" />
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
                <h3 className="font-semibold text-lg mb-3 text-teal-700">Home Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Drywall repair & patching</li>
                  <li>• <Link href="/door-repair-ofallon-il" className="text-teal-700 hover:underline">Door repair & installation</Link></li>
                  <li>• Window repair & replacement</li>
                  <li>• Deck repair & maintenance</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-teal-700">Remodeling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bathroom remodeling</li>
                  <li>• Kitchen remodeling</li>
                  <li>• Basement finishing</li>
                  <li>• Deck construction</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-teal-700">Carpentry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Trim & molding installation</li>
                  <li>• Custom shelving</li>
                  <li>• Cabinet installation</li>
                  <li>• Structural repairs</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-teal-700">Electrical & Plumbing</h3>
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
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
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

      {/* Schema Markup */}
      <LocalBusinessSchema
        city="O'Fallon"
        state="IL"
        pageUrl="/gbp/ofallon-il/"
        phone="+1-618-353-0955"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Call us today for a free estimate on your O'Fallon home repair or remodeling project.
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
}
