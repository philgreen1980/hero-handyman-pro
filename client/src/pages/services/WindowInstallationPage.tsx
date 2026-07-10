import { Link } from 'wouter';
import { Phone, MapPin, CheckCircle2, ArrowRight, Shield, Award, Clock3, Thermometer, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import SEO from '@/components/SEO';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function WindowInstallationPage() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Window Installation" }
  ]} />
      <SEO {...seo} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving St. Louis & Metro East</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Window Installation & Replacement
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Energy-efficient window installation for your home. Reduce energy bills, improve comfort, and boost curb appeal. Licensed & insured with 35+ years experience.
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

      {/* Benefits of New Windows */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Install New Windows?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <Thermometer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Lower Energy Bills</h3>
                <p className="text-gray-600">
                  Old, drafty windows can account for 25-30% of heating and cooling costs. Energy-efficient replacement windows can reduce your utility bills by up to $500 per year.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <DollarSign className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Increase Home Value</h3>
                <p className="text-gray-600">
                  Window replacement offers an average ROI of 70-80%. New windows dramatically improve curb appeal and are a major selling point for potential buyers.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <CheckCircle2 className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Improved Comfort</h3>
                <p className="text-gray-600">
                  Eliminate cold drafts, reduce outside noise, and maintain consistent temperatures throughout your home. UV-blocking glass protects furniture from fading.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <Shield className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
                <p className="text-gray-600">
                  Modern vinyl and fiberglass windows never need painting, resist moisture damage, and are easy to clean. Many feature tilt-in sashes for convenient cleaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Window Installation Pricing</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for complete window replacement. Prices include removal of old windows, installation, insulation, and trim work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Single-Hung Windows */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Single-Hung</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$300-$600</div>
                <p className="text-sm text-gray-600 mb-4">Per window installed</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Energy-efficient vinyl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Double-pane glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Standard sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Trim & insulation</span>
                  </li>
                </ul>
              </div>

              {/* Double-Hung Windows */}
              <div className="bg-white rounded-lg p-6 border-2 border-teal-600 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Double-Hung</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$400-$800</div>
                <p className="text-sm text-gray-600 mb-4">Per window installed</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Both sashes open</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Tilt-in for easy cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Low-E glass option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lifetime warranty</span>
                  </li>
                </ul>
              </div>

              {/* Specialty Windows */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Specialty</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$500-$1,500</div>
                <p className="text-sm text-gray-600 mb-4">Per window installed</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Bay & bow windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Casement & awning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Picture windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom shapes & sizes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Prices vary based on window size, style, glass options, and installation complexity. Custom windows, structural modifications, and premium features (triple-pane glass, argon fill) may increase cost. All estimates include removal of old windows, installation, insulation, and interior/exterior trim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Window Styles We Install</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Standard Windows</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Double-Hung:</strong> Classic style with two operable sashes that tilt in for easy cleaning
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Single-Hung:</strong> Budget-friendly option with bottom sash that opens
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Casement:</strong> Side-hinged windows that crank open for maximum ventilation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Sliding:</strong> Horizontal opening windows perfect for wide openings
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Awning:</strong> Top-hinged windows that open outward, great for ventilation in rain
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Specialty Windows</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Bay Windows:</strong> Three-panel windows that project outward, adding space and light
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Bow Windows:</strong> Curved multi-panel windows for dramatic architectural impact
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Picture Windows:</strong> Large fixed windows for unobstructed views and natural light
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Garden Windows:</strong> Box-style windows that extend outward, perfect for plants
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Custom Shapes:</strong> Arched, circular, or geometric windows for unique designs
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Window Installation Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Free In-Home Consultation</h3>
                  <p className="text-gray-600">
                    We measure your windows, assess the current condition, discuss your energy efficiency goals, and provide a detailed quote. We'll help you choose the right windows for your needs and budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Window Selection & Ordering</h3>
                  <p className="text-gray-600">
                    Choose your window style, glass options, and features. We order custom-sized windows from our trusted manufacturers and schedule your installation at your convenience.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                  <p className="text-gray-600">
                    Our experienced team carefully removes old windows, prepares the openings, installs new windows with proper insulation and sealing, and completes all interior and exterior trim work.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Cleanup</h3>
                  <p className="text-gray-600">
                    We test all windows for proper operation, clean up all debris, and walk you through care instructions and warranty information. Your satisfaction is guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How long does window installation take?</h3>
                <p className="text-gray-600">
                  Most standard window replacements take 30-60 minutes per window. A typical whole-house window replacement (10-15 windows) can be completed in 1-2 days.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the difference between insert and full-frame replacement?</h3>
                <p className="text-gray-600">
                  Insert replacement (retrofit) installs new windows into existing frames - faster and less expensive. Full-frame replacement removes everything including the frame - necessary if frames are damaged or you want to change window size.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How much can I save on energy bills with new windows?</h3>
                <p className="text-gray-600">
                  Energy-efficient replacement windows can reduce heating and cooling costs by 15-30%, saving the average homeowner $200-$500 per year. Actual savings depend on your current windows, home size, and local climate.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What warranty do you offer?</h3>
                <p className="text-gray-600">
                  Most quality windows come with a lifetime manufacturer warranty on the frame and sash, plus 10-20 years on glass seal failure. We also provide a lifetime workmanship warranty on our installation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can you install windows in winter?</h3>
                <p className="text-gray-600">
                  Yes! We install windows year-round. Modern installation techniques minimize exposure time (typically 15-30 minutes per window), and we take extra precautions to protect your home from the elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Window Installation by Location</h2>
            <p className="text-xl text-gray-600 mb-12">
              Looking for window installation services in your specific area? We've created dedicated pages with local information, pricing, and service details for each community we serve.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/service-areas/window-installation-ofallon-il/"
                className="group bg-gray-50 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-600 rounded-lg p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600">O'Fallon, IL</h3>
                  <ArrowRight className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-gray-600 text-left">
                  Serving Thornbury, Stonebridge, Heritage Pointe, and all O'Fallon neighborhoods. Local expertise for O'Fallon homeowners.
                </p>
              </Link>
              
              <Link 
                href="/services/window-installation-edwardsville-il"
                className="group bg-gray-50 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-600 rounded-lg p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600">Edwardsville, IL</h3>
                  <ArrowRight className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-gray-600 text-left">
                  Serving Governors' Hill, Montclaire, The Orchards, and all Edwardsville areas. Trusted by SIUE community members.
                </p>
              </Link>
              
              <Link 
                href="/services/window-installation-belleville-il"
                className="group bg-gray-50 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-600 rounded-lg p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600">Belleville, IL</h3>
                  <ArrowRight className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-gray-600 text-left">
                  Serving West Belleville, Signal Hill, Belleville Square, and all Belleville neighborhoods. Local window experts.
                </p>
              </Link>
              
              <Link 
                href="/services/window-installation-collinsville-il"
                className="group bg-gray-50 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-600 rounded-lg p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600">Collinsville, IL</h3>
                  <ArrowRight className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-gray-600 text-left">
                  Serving Maryville, Caseyville, Fairmont City, and all Collinsville areas. Trusted local service.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Windows?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Get a free estimate today! We serve St. Louis, MO and Metro East, IL with professional window installation services.
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
            center={{ lat: 38.6270, lng: -90.1994 }}
            radiusMiles={15}
            locationName="St. Louis & Metro East"
          />
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <LeadMagnetForm 
            title="Free Window Buying Guide"
            description="Download our comprehensive guide to choosing energy-efficient windows for your home."
            pdfUrl="/downloads/window-buying-guide.pdf"
            pdfFilename="window-buying-guide.pdf"
          />
        </div>
      </section>

      <LocalBusinessSchema 
        city="St. Louis"
        state="MO"
        pageUrl="https://www.herohandymanpro.com/services/window-installation"
      />
      <ServiceSchema 
        serviceName="Window Installation & Replacement"
        description="Professional window installation and replacement services in St. Louis & Metro East. Energy-efficient windows that reduce utility bills."
        serviceType="Window Installation"
        areaServed="St. Louis"
        priceRange="$300-$1500"
        pageUrl="/services/window-installation"
      />
      <FAQSchema 
        pageUrl="/services/window-installation"
        faqs={[
          {
            question: "How long does window installation take?",
            answer: "Most standard window replacements take 30-60 minutes per window. A typical whole-house window replacement (10-15 windows) can be completed in 1-2 days."
          },
          {
            question: "What's the difference between insert and full-frame replacement?",
            answer: "Insert replacement (retrofit) installs new windows into existing frames - faster and less expensive. Full-frame replacement removes everything including the frame - necessary if frames are damaged or you want to change window size."
          },
          {
            question: "How much can I save on energy bills with new windows?",
            answer: "Energy-efficient replacement windows can reduce heating and cooling costs by 15-30%, saving the average homeowner $200-$500 per year. Actual savings depend on your current windows, home size, and local climate."
          },
          {
            question: "What warranty do you offer?",
            answer: "Most quality windows come with a lifetime manufacturer warranty on the frame and sash, plus 10-20 years on glass seal failure. We also provide a lifetime workmanship warranty on our installation."
          },
          {
            question: "Can you install windows in winter?",
            answer: "Yes! We install windows year-round. Modern installation techniques minimize exposure time (typically 15-30 minutes per window), and we take extra precautions to protect your home from the elements."
          }
        ]}
      />
    </div>
  );
}
