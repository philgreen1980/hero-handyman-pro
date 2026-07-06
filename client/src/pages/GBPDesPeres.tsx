import { Link } from 'wouter';
import { Phone, MapPin, Star, Clock, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { SeasonalPromoBanner } from '@/components/SeasonalPromoBanner';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { LocationFAQ } from '@/components/LocationFAQ';
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function GBPDesPeres() {
  return (
    <div className="min-h-screen">
      <SEO {...seoConfig.gbpDesPeres} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving Des Peres & St. Louis County</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Des Peres Handyman
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-teal-50">
              Hero Handyman Pro (formerly Rapid Repair Pro)
            </p>
            
            <p className="text-lg mb-8 text-teal-100 max-w-2xl mx-auto">
              Professional home repair and remodeling services for Des Peres, Manchester, Kirkwood, and surrounding St. Louis County communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:314-931-3732">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (314) 931-3732
                </Button>
              </a>
              
              <Link href="/#contact?city=Des+Peres">
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
              <span className="text-white font-semibold">4.8 Stars</span>
              <span className="text-teal-100">(60 Google Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Promotion Banner */}
      <section className="py-8 bg-white">
        <div className="container">
          <SeasonalPromoBanner
            city="Des Peres"
            promotion={{
              title: "Winter Special: Deck & Outdoor Repairs",
              description: "Get your deck winter-ready! Free inspection included with any deck repair or winterization service.",
              discount: "15% OFF",
              validUntil: "March 31, 2025"
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
              <p className="text-gray-600">4.8-star Google rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Des Peres Handyman Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-teal-700">Home Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Drywall repair & patching</li>
                  <li>• Door repair & installation</li>
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
              <Link href="/#contact?city=Des+Peres">
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
              Proudly Serving Des Peres & Surrounding Areas
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We provide professional handyman and remodeling services throughout St. Louis County, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 mb-12">
              <div>Des Peres</div>
              <div>Manchester</div>
              <div>Kirkwood</div>
              <div>Town & Country</div>
              <div>Ballwin</div>
              <div>Chesterfield</div>
              <div>Creve Coeur</div>
              <div>Ladue</div>
            </div>
            
            {/* Service Area Map */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Service Coverage Area</h3>
              <p className="text-gray-600 mb-6">
                We proudly serve Des Peres and the surrounding 15-mile radius in St. Louis County.
              </p>
              <ServiceAreaMap
                center={{ lat: 38.5989, lng: -90.4324 }} // Des Peres, MO coordinates
                radiusMiles={15}
                locationName="Hero Handyman Pro - Des Peres"
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
              What Des Peres Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Real reviews from your neighbors in Des Peres and St. Louis County
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
                  "Phil and his team did an amazing job repairing our deck. They were professional, on time, and the quality of work exceeded our expectations. Highly recommend for anyone in Des Peres!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Jennifer M.</p>
                  <p className="text-sm text-gray-600">Des Peres, MO</p>
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
                  "We needed several doors repaired and new trim installed in our Kirkwood home. Hero Handyman Pro was responsive, fair-priced, and did excellent work. Will definitely use them again."
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Robert K.</p>
                  <p className="text-sm text-gray-600">Kirkwood, MO</p>
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
                  "Outstanding service from start to finish. They fixed our drywall damage and painted our living room. Clean, efficient, and the results look perfect. Best handyman service in West County!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Susan T.</p>
                  <p className="text-sm text-gray-600">Manchester, MO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <LocationFAQ
        city="Des Peres"
        faqs={[
          {
            question: "Do you serve my neighborhood in Des Peres or West County?",
            answer: "Yes! We serve all of Des Peres and surrounding West County communities including Manchester, Kirkwood, Town & Country, Ballwin, Chesterfield, Creve Coeur, and Ladue within our 15-mile service radius."
          },
          {
            question: "What's your typical response time in Des Peres?",
            answer: "We strive to respond to all inquiries within 2-4 hours during business hours. For emergency repairs, we offer same-day or next-day service depending on availability. Des Peres is in our primary service area, so we can typically schedule appointments quickly."
          },
          {
            question: "Do you offer free estimates for Des Peres projects?",
            answer: "Absolutely! We provide free, no-obligation estimates for all projects in Des Peres and St. Louis County. Simply call us at (314) 931-3732 or fill out our contact form, and we'll schedule a convenient time to assess your project and provide a detailed quote."
          },
          {
            question: "Are you licensed and insured to work in Des Peres?",
            answer: "Yes, Hero Handyman Pro is fully licensed and insured to perform handyman and remodeling work throughout St. Louis County, including Des Peres. We carry general liability insurance and workers' compensation coverage for your protection and peace of mind."
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept cash, checks, and all major credit cards (Visa, Mastercard, American Express, Discover) for your convenience. Payment is typically due upon completion of the work, and we'll provide you with a detailed invoice."
          },
          {
            question: "How far in advance should I schedule a project in Des Peres?",
            answer: "For smaller repairs and handyman services, we can often accommodate same-week or next-week appointments. For larger remodeling projects like bathroom or kitchen renovations, we recommend scheduling 2-3 weeks in advance to ensure availability. Contact us as soon as you know your timeline!"
          }
        ]}
      />

      {/* Schema Markup */}
      <LocalBusinessSchema
        city="Des Peres"
        state="MO"
        pageUrl="/gbp/des-peres-mo/"
        phone="+1-314-931-3732"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Call us today for a free estimate on your Des Peres home repair or remodeling project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:314-931-3732">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (314) 931-3732
                </Button>
              </a>
              <Link href="/#contact?city=Des+Peres">
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
