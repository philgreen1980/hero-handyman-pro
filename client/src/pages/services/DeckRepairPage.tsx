import { Link } from 'wouter';
import { Phone, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import SEO from '@/components/SEO';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckRepairPage() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Deck Repair" }
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
              Professional Deck Repair Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Expert deck repairs, restoration, and maintenance. From minor fixes to complete deck rebuilds, we've got you covered.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Deck Repair Pricing Guide</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for common deck repair services. Final costs depend on materials, deck size, and project complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Minor Repairs */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Minor Repairs</h3>
                    <p className="text-gray-600 text-sm">Small fixes and maintenance</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$200-$500</div>
                    <div className="text-sm text-gray-500">Typical range</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Loose board replacement (1-5 boards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Railing repair or tightening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Stair tread replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Post cap replacement</span>
                  </li>
                </ul>
              </div>

              {/* Moderate Repairs */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-teal-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Moderate Repairs</h3>
                    <p className="text-gray-600 text-sm">Structural fixes and upgrades</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$500-$1,500</div>
                    <div className="text-sm text-gray-500">Typical range</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Joist repair or replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Railing section replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Stair rebuild (3-5 steps)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ledger board repair</span>
                  </li>
                </ul>
              </div>

              {/* Major Repairs */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Major Repairs</h3>
                    <p className="text-gray-600 text-sm">Extensive restoration work</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$1,500-$4,000</div>
                    <div className="text-sm text-gray-500">Typical range</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete deck resurfacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full railing replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Support post replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Structural beam repair</span>
                  </li>
                </ul>
              </div>

              {/* Deck Restoration */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Complete Restoration</h3>
                    <p className="text-gray-600 text-sm">Full deck rebuild or overhaul</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">$4,000+</div>
                    <div className="text-sm text-gray-500">Varies by size</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete deck rebuild</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Foundation and framing replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Material upgrade (composite, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Code compliance updates</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-lg border border-teal-200">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Factors Affecting Cost</h4>
                  <p className="text-gray-700 mb-3">
                    Final pricing depends on several factors including deck size, material type (pressure-treated wood, cedar, composite), 
                    accessibility, extent of damage, and whether permits are required. We provide free, detailed estimates after inspecting your deck.
                  </p>
                  <Button variant="default" className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/#contact">
                      Schedule Free Inspection
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Deck Repair Process</h2>
              <p className="text-lg text-gray-600">
                From initial inspection to final walkthrough, here's what to expect when you hire Hero Handyman Pro.
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
                    <h3 className="text-xl font-bold">Free Inspection & Estimate</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      1-2 hours
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We visit your property to inspect your deck, identify all issues, take measurements, and discuss your goals. 
                    You'll receive a detailed written estimate within 24 hours with a breakdown of all work and costs.
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
                    <h3 className="text-xl font-bold">Scheduling & Preparation</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      1-3 days
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Once you approve the estimate, we schedule your project based on your availability. We order materials, 
                    obtain any necessary permits, and confirm the start date. Most projects can begin within 1-2 weeks.
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
                    <h3 className="text-xl font-bold">Deck Repair Work</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 inline mr-1" />
                      1-5 days
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Our experienced team arrives on time, protects your property, and completes all repairs efficiently. 
                    Minor repairs typically take 1 day, while major projects may require 3-5 days. We keep you updated throughout.
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
                      Same day
                    </span>
                  </div>
                  <p className="text-gray-700">
                    We walk through the completed work with you, ensure you're completely satisfied, and answer any questions. 
                    We thoroughly clean the work area and haul away all debris. Your satisfaction is guaranteed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center p-6 bg-white rounded-lg border-2 border-teal-600">
              <h4 className="font-bold text-xl mb-2">Total Timeline: 3-10 Days</h4>
              <p className="text-gray-600 mb-4">
                From first contact to completed project. Emergency repairs can often be completed within 24-48 hours.
              </p>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="/#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Start Your Project Today
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Deck Repair Service Area</h2>
              <p className="text-lg text-gray-600">
                Serving St. Louis County, Metro East Illinois, and surrounding communities
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
                <p className="text-sm text-gray-600">Don't see your city? Call us - we may still serve your area!</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Download: Complete Deck Maintenance Checklist</h2>
              <p className="text-lg text-gray-600">
                Get our comprehensive seasonal maintenance guide to keep your deck beautiful and safe year-round. Includes inspection checklists, cleaning tips, and repair schedules.
              </p>
            </div>
            <LeadMagnetForm
              title="Deck Maintenance Checklist"
              description="Download your free 8-page guide with seasonal checklists, pro tips, and maintenance schedules to extend your deck's lifespan."
              pdfUrl="/deck-maintenance-checklist.pdf"
              pdfFilename="Hero-Handyman-Pro-Deck-Maintenance-Checklist.pdf"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Deck?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Get a free inspection and detailed estimate. Most projects can start within 1-2 weeks.
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
        pageUrl="/services/deck-repair"
      />
    </div>
  );
}
