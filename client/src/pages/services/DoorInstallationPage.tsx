import { Link } from 'wouter';
import { Phone, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function DoorInstallationPage() {
  return (
    <div className="min-h-screen">
      <SEO {...seoConfig.doorInstallation} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving St. Louis & Metro East</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Door Installation & Replacement
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Professional door installation and replacement services. Interior doors, exterior doors, storm doors, and more.
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

      {/* Pricing Guide Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Door Installation Pricing Guide</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for door installation and replacement. Prices include labor and basic hardware.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Interior Doors */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Interior Doors</h3>
                    <p className="text-gray-600 text-sm">Bedroom, bathroom, closet doors</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$200-$500</div>
                    <div className="text-sm text-gray-500">Per door</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hollow core door: $200-$300</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Solid core door: $300-$400</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">French doors (pair): $400-$500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Includes trim and hardware installation</span>
                  </li>
                </ul>
              </div>

              {/* Exterior Doors */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-teal-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Exterior Doors</h3>
                    <p className="text-gray-600 text-sm">Front, back, and side entry doors</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$400-$1,200</div>
                    <div className="text-sm text-gray-500">Per door</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Steel entry door: $400-$700</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fiberglass door: $600-$900</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Wood entry door: $800-$1,200</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Includes weatherstripping and lockset</span>
                  </li>
                </ul>
              </div>

              {/* Storm & Screen Doors */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Storm & Screen Doors</h3>
                    <p className="text-gray-600 text-sm">Added protection and ventilation</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$250-$600</div>
                    <div className="text-sm text-gray-500">Per door</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic storm door: $250-$350</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full-view storm door: $350-$500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Retractable screen door: $400-$600</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Professional installation included</span>
                  </li>
                </ul>
              </div>

              {/* Patio & Sliding Doors */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Patio & Sliding Doors</h3>
                    <p className="text-gray-600 text-sm">Large openings and glass doors</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$800-$2,000</div>
                    <div className="text-sm text-gray-500">Per unit</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sliding patio door: $800-$1,200</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">French patio doors: $1,000-$1,500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Bi-fold or multi-panel: $1,500-$2,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Includes threshold and sealing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-lg border border-teal-200">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">What's Included</h4>
                  <p className="text-gray-700 mb-3">
                    All prices include professional installation, basic hardware (hinges, lockset, strike plate), trim work, 
                    caulking, and cleanup. Door units are priced separately and can be purchased through us or supplied by you. 
                    Custom sizes, specialty hardware, and frame repairs may incur additional charges.
                  </p>
                  <Button variant="default" className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/#contact">
                      Get Exact Quote for Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Door Installation Process</h2>
              <p className="text-lg text-gray-600">
                From measurement to completion, here's how we ensure a perfect door installation every time.
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Measurement & Consultation</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      30-60 minutes
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We visit your property to measure door openings, assess frame condition, and discuss your preferences for 
                    door style, material, and hardware. We'll show you samples and provide recommendations based on your needs and budget.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Door Selection & Ordering</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      1-2 weeks
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Once you approve the estimate, we order your door(s) and hardware. Standard doors typically arrive within 1-2 weeks. 
                    Custom doors may take 3-4 weeks. We'll notify you as soon as your door arrives and schedule installation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Professional Installation</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      2-4 hours per door
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Our experienced installers remove the old door (if applicable), prepare the opening, install the new door, 
                    adjust for proper fit and operation, install hardware, add weatherstripping (exterior doors), and ensure 
                    everything works perfectly.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Final Inspection & Cleanup</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      15-30 minutes
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We test the door operation, check alignment and seal, demonstrate lock operation, and ensure you're satisfied 
                    with the installation. We clean up all debris, remove the old door, and leave your home spotless.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center p-6 bg-white rounded-lg border-2 border-teal-600">
              <h4 className="font-bold text-xl mb-2">Total Timeline: 2-4 Weeks</h4>
              <p className="text-gray-600 mb-4">
                From initial consultation to completed installation. In-stock doors can often be installed within 1 week.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="/#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Area</h2>
              <p className="text-lg text-gray-600">
                Professional door installation throughout St. Louis & Metro East
              </p>
            </div>
            
            <ServiceAreaMap
              locationName="St. Louis & Metro East"
              center={{ lat: 38.6270, lng: -90.1994 }}
              radiusMiles={15}
            />
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">St. Louis County</h3>
                <p className="text-sm text-gray-600">Des Peres, Manchester, Kirkwood, Ballwin, Chesterfield</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Metro East IL</h3>
                <p className="text-sm text-gray-600">O'Fallon, Edwardsville, Belleville, Collinsville</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">15-Mile Radius</h3>
                <p className="text-sm text-gray-600">Serving all surrounding communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Download: Door Selection Guide</h2>
              <p className="text-lg text-gray-600">
                Get our comprehensive guide to choosing the perfect doors for your home. Compare materials, styles, security features, and energy efficiency options.
              </p>
            </div>
            <LeadMagnetForm
              title="Door Selection Guide"
              description="Download your free 14-page guide with detailed comparisons of door materials, styles, hardware options, and cost breakdowns to make confident decisions."
              pdfUrl="/door-selection-guide.pdf"
              pdfFilename="Hero-Handyman-Pro-Door-Selection-Guide.pdf"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for New Doors?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Get a free consultation and detailed estimate. We'll help you choose the perfect doors for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 800-741-6056
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

      {/* Schema Markup */}
      <LocalBusinessSchema
        city="St. Louis"
        state="MO"
        pageUrl="/services/door-installation"
      />
    </div>
  );
}
