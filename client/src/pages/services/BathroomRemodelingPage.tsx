import { Link } from 'wouter';
import { Phone, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import SEO from '@/components/SEO';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function BathroomRemodelingPage() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Bathroom Remodeling" }
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
              Bathroom Remodeling Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Transform your bathroom with professional remodeling. From simple updates to complete renovations, we handle every detail.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bathroom Remodeling Pricing Guide</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for bathroom remodeling projects. Final costs depend on size, materials, fixtures, and scope of work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Cosmetic Updates */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cosmetic Updates</h3>
                    <p className="text-gray-600 text-sm">Refresh without major changes</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$1,500-$3,500</div>
                    <div className="text-sm text-gray-500">Typical range</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Paint walls and ceiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Replace vanity and mirror</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Update light fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">New hardware and accessories</span>
                  </li>
                </ul>
              </div>

              {/* Mid-Range Remodel */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-teal-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mid-Range Remodel</h3>
                    <p className="text-gray-600 text-sm">Most popular option</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$8,000-$15,000</div>
                    <div className="text-sm text-gray-500">Typical range</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">New tub/shower surround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Tile floor and walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">New vanity, toilet, and fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Updated lighting and ventilation</span>
                  </li>
                </ul>
              </div>

              {/* Upscale Remodel */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Upscale Remodel</h3>
                    <p className="text-gray-600 text-sm">Premium materials and features</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$15,000-$25,000</div>
                    <div className="text-sm text-gray-500">Typical range</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Walk-in shower with glass enclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom tile work and design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Double vanity with quartz countertops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Heated floors and premium fixtures</span>
                  </li>
                </ul>
              </div>

              {/* Luxury Renovation */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Luxury Renovation</h3>
                    <p className="text-gray-600 text-sm">Complete transformation</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$25,000+</div>
                    <div className="text-sm text-gray-500">Custom pricing</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Layout reconfiguration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">High-end fixtures and finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Smart home integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Spa-like features (steam shower, soaking tub)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-lg border border-teal-200">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">What's Included in Our Pricing</h4>
                  <p className="text-gray-700 mb-3">
                    All estimates include labor, materials, permits, debris removal, and cleanup. We provide detailed line-item quotes 
                    so you know exactly what you're paying for. Financing options available for projects over $5,000.
                  </p>
                  <Button variant="default" className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/#contact">
                      Request Detailed Quote
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bathroom Remodeling Process</h2>
              <p className="text-lg text-gray-600">
                A step-by-step guide to your bathroom transformation from design to completion.
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
                    <h3 className="text-xl font-bold">Design Consultation & Quote</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      1-2 visits
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We meet at your home to discuss your vision, take measurements, and understand your budget. We'll show you material 
                    samples and design options. You'll receive a detailed proposal with 3D renderings within 3-5 business days.
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
                    <h3 className="text-xl font-bold">Material Selection & Permits</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      1-2 weeks
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Once you approve the design, we help you finalize material selections (tile, fixtures, vanity, etc.). We order 
                    all materials and obtain necessary permits. We schedule your project start date based on your availability.
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
                    <h3 className="text-xl font-bold">Demolition & Rough-In Work</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      2-4 days
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We protect your home, remove old fixtures and finishes, and complete any necessary plumbing or electrical rough-in work. 
                    We install new subfloor if needed and prepare surfaces for tile and fixtures.
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
                    <h3 className="text-xl font-bold">Installation & Finishing</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      5-10 days
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We install tile, vanity, toilet, shower/tub, and all fixtures. We complete painting, caulking, and all finishing 
                    touches. We conduct a thorough quality inspection and make any necessary adjustments.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Final Walkthrough & Cleanup</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      Same day
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We walk through your new bathroom with you, demonstrate how everything works, and ensure you're completely satisfied. 
                    We remove all debris, clean thoroughly, and provide warranty documentation. Your bathroom is ready to enjoy!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center p-6 bg-white rounded-lg border-2 border-teal-600">
              <h4 className="font-bold text-xl mb-2">Total Timeline: 3-6 Weeks</h4>
              <p className="text-gray-600 mb-4">
                From design consultation to completed bathroom. Cosmetic updates can be completed in 1-2 weeks.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="/#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Design Consultation
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
                Professional bathroom remodeling throughout St. Louis & Metro East
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Download: Bathroom Planning Worksheet</h2>
              <p className="text-lg text-gray-600">
                Get our comprehensive planning guide to organize your bathroom remodel. Includes fixture selection checklists, budget worksheets, and timeline planning tools.
              </p>
            </div>
            <LeadMagnetForm
              title="Bathroom Planning Worksheet"
              description="Download your free 12-page guide with detailed checklists, material comparisons, and budget planning tools to ensure your bathroom remodel stays on track."
              pdfUrl="/bathroom-planning-worksheet.pdf"
              pdfFilename="Hero-Handyman-Pro-Bathroom-Planning-Worksheet.pdf"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Get a free design consultation and detailed estimate. Financing available for qualified projects.
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
        pageUrl="/services/bathroom-remodeling"
      />
    </div>
  );
}
