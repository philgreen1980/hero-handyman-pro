import { Link } from 'wouter';
import { Phone, MapPin, CheckCircle2, Shield, Award, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import SEO from '@/components/SEO';
import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function WindowInstallationOFallon() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <SEO {...seo} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Proudly Serving O'Fallon, IL</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Window Installation in O'Fallon, IL
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Local, trusted window installation for O'Fallon homeowners. Energy-efficient windows that reduce utility bills and boost home value. Same-day estimates available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="/#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 800-741-6056
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
                <Link href="/#contact">
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-teal-600" />
              <span className="font-semibold">30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-6 h-6 text-teal-600" />
              <span className="font-semibold">Energy Star Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why O'Fallon Homeowners Choose Us</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                As a locally-owned business serving O'Fallon, IL and the surrounding Metro East area, we understand the unique needs of homeowners in our community. O'Fallon's climate—with hot, humid summers and cold winters—puts extra stress on your windows. Old, drafty windows can account for up to 30% of your home's energy loss, making your HVAC system work overtime.
              </p>
              
              <p>
                We've been installing energy-efficient replacement windows in O'Fallon neighborhoods like Thornbury, Stonebridge, and Heritage Pointe for over 35 years. Our team knows the local building codes, understands the architectural styles common in O'Fallon homes, and can recommend the best window solutions for your specific needs and budget.
              </p>
              
              <p>
                Whether you live near Scott Air Force Base, downtown O'Fallon, or in one of the newer developments off Highway 50, we provide fast, professional window installation with transparent pricing and a satisfaction guarantee.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">$200-$500</div>
                <div className="text-sm text-gray-600">Average annual savings on energy bills</div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">1-2 Days</div>
                <div className="text-sm text-gray-600">Typical whole-house installation time</div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">70-80%</div>
                <div className="text-sm text-gray-600">Average ROI on window replacement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Window Installation Pricing for O'Fallon Homes</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-2">Single-Hung</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$300-$600</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient vinyl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Double-pane glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Full installation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-teal-600 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Double-Hung</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$400-$800</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Tilt-in for easy cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Low-E glass option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Lifetime warranty</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-2">Specialty</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$500-$1,500</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Bay & bow windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Casement & awning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Custom sizes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm">
                <strong>Free estimates for O'Fallon residents.</strong> Prices include removal of old windows, installation, insulation, trim work, and cleanup. Same-day service available for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your O'Fallon Home's Windows?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Call today for a free, no-obligation estimate. We serve all O'Fallon neighborhoods and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="/#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 800-741-6056
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-gray-100 border-white" asChild>
                <Link href="/#contact">
                  Request Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-white">
        <div className="container">
          <ServiceAreaMap 
            center={{ lat: 38.5962, lng: -89.9112 }}
            radiusMiles={10}
            locationName="O'Fallon, IL"
          />
        </div>
      </section>

      <LocalBusinessSchema 
        city="O'Fallon"
        state="IL"
        pageUrl="https://herohandymanpro.com/services/window-installation-ofallon-il"
      />
      <ServiceSchema 
        serviceName="Window Installation in O'Fallon, IL"
        description="Professional window installation services in O'Fallon, IL. Energy-efficient replacement windows for local homeowners."
        serviceType="Window Installation"
        areaServed="O'Fallon, IL"
        priceRange="$300-$1500"
        pageUrl="/services/window-installation-ofallon-il"
      />
    </div>
  );
}
