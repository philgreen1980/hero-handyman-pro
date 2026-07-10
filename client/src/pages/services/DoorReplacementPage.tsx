import { Link } from 'wouter';
import { Phone, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight, Shield, Award, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import SEO from '@/components/SEO';
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DoorReplacementPage() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <PageBreadcrumb crumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/handyman-services/" },
    { label: "Door Replacement" }
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
              Professional Door Replacement Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Expert door replacement for interior and exterior doors. Same-day service available. Licensed & insured with 35+ years experience.
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
              <Clock3 className="w-6 h-6 text-teal-600" />
              <span className="font-semibold">Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Replace Your Doors */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Replace Your Doors?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Improve Energy Efficiency</h3>
                <p className="text-gray-600">
                  Old doors with gaps and worn weatherstripping can account for up to 30% of your home's heating and cooling loss. New energy-efficient doors can significantly reduce your utility bills.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Enhance Home Security</h3>
                <p className="text-gray-600">
                  Modern doors feature advanced locking mechanisms, reinforced frames, and impact-resistant materials that provide superior protection for your family and belongings.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Boost Curb Appeal</h3>
                <p className="text-gray-600">
                  A new front door can dramatically improve your home's appearance and increase property value. Studies show door replacement offers one of the highest ROI of any home improvement project.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Fix Operational Issues</h3>
                <p className="text-gray-600">
                  Doors that stick, won't close properly, or have damaged hardware create daily frustration. Replacement eliminates these problems and ensures smooth, reliable operation.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Door Replacement Pricing</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for complete door replacement. Prices include removal of old door, installation, hardware, and cleanup.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Interior Door Replacement */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Interior Doors</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$250-$600</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Remove old door</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Install new door & hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Trim & casing included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Paint or stain available</span>
                  </li>
                </ul>
              </div>

              {/* Exterior Door Replacement */}
              <div className="bg-white rounded-lg p-6 border-2 border-teal-600 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Exterior Doors</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$500-$1,500</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Remove old door & frame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Install pre-hung door system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Weatherstripping & insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Deadbolt & hardware</span>
                  </li>
                </ul>
              </div>

              {/* Patio Door Replacement */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Patio Doors</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$800-$2,000</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sliding or French style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Energy-efficient glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete frame replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Professional sealing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Prices vary based on door size, material, style, and complexity of installation. Custom doors, sidelights, and structural modifications may increase cost. All estimates include labor, basic hardware, and disposal of old door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Doors We Replace */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Types of Doors We Replace</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Interior Doors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Bedroom Doors:</strong> Hollow core, solid core, or panel doors in various styles
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Bathroom Doors:</strong> Privacy doors with proper ventilation and moisture resistance
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Closet Doors:</strong> Bifold, sliding, or standard swing doors
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>French Doors:</strong> Interior French doors for offices, dining rooms, or room dividers
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Pocket Doors:</strong> Space-saving sliding doors that disappear into the wall
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Exterior Doors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Entry Doors:</strong> Steel, fiberglass, or wood front doors with sidelights
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Back Doors:</strong> Service doors for garages, basements, and rear entries
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Storm Doors:</strong> Screen and glass combination doors for added protection
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Patio Doors:</strong> Sliding glass doors and French patio doors
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Garage Entry Doors:</strong> Fire-rated doors connecting garage to home
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Replacement Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Door Replacement Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Consultation & Measurement</h3>
                  <p className="text-gray-600">
                    We visit your home to assess the current door, take precise measurements, discuss your style preferences, and provide a detailed quote. We'll help you choose the right door for your needs and budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Door Selection & Ordering</h3>
                  <p className="text-gray-600">
                    Once you've selected your door, we order it from our trusted suppliers. We'll coordinate delivery and schedule your installation at a time that's convenient for you.
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
                    Our experienced team removes your old door, prepares the opening (if needed), and installs your new door with precision. We ensure proper alignment, weatherproofing, and operation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Finishing Touches & Cleanup</h3>
                  <p className="text-gray-600">
                    We install all hardware, adjust the door for perfect operation, apply weatherstripping, and clean up all debris. We'll walk you through the features of your new door and ensure you're completely satisfied.
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
                <h3 className="text-xl font-bold mb-3">How long does door replacement take?</h3>
                <p className="text-gray-600">
                  Most interior door replacements take 1-2 hours per door. Exterior door replacements typically take 3-4 hours. Complex installations with structural modifications may take longer.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do I need to replace the door frame?</h3>
                <p className="text-gray-600">
                  Not always. If your existing frame is in good condition, level, and square, we can often just replace the door slab. However, exterior doors and damaged frames typically require complete replacement for best results.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the best material for exterior doors?</h3>
                <p className="text-gray-600">
                  Steel doors offer the best security and energy efficiency at an affordable price. Fiberglass doors resist warping and require less maintenance. Wood doors provide classic beauty but need more upkeep. We'll help you choose based on your priorities.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can you match my existing trim and hardware?</h3>
                <p className="text-gray-600">
                  Yes! We can match your existing trim style and finish, or upgrade to new trim throughout for a cohesive look. We also offer a wide selection of hardware finishes to complement your home's style.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer same-day door replacement?</h3>
                <p className="text-gray-600">
                  For emergency situations (broken doors, security issues), we can often provide same-day service with in-stock doors. Custom door orders typically take 1-2 weeks for delivery before installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Replace Your Doors?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Get a free estimate today! We serve St. Louis, MO and Metro East, IL with professional door replacement services.
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
            title="Free Door Selection Guide"
            description="Download our comprehensive guide to choosing the right doors for your home."
            pdfUrl="/downloads/door-selection-guide.pdf"
            pdfFilename="door-selection-guide.pdf"
          />
        </div>
      </section>

      <LocalBusinessSchema 
        city="St. Louis"
        state="MO"
        pageUrl="https://www.herohandymanpro.com/services/door-replacement"
      />
      <ServiceSchema 
        serviceName="Door Replacement Services"
        description="Professional door replacement for interior and exterior doors in St. Louis & Metro East. Same-day service available."
        serviceType="Door Replacement"
        areaServed="St. Louis"
        priceRange="$250-$2000"
        pageUrl="/services/door-replacement"
      />
      <FAQSchema 
        pageUrl="/services/door-replacement"
        faqs={[
          {
            question: "How long does door replacement take?",
            answer: "Most interior door replacements take 1-2 hours per door. Exterior door replacements typically take 3-4 hours. Complex installations with structural modifications may take longer."
          },
          {
            question: "Do I need to replace the door frame?",
            answer: "Not always. If your existing frame is in good condition, level, and square, we can often just replace the door slab. However, exterior doors and damaged frames typically require complete replacement for best results."
          },
          {
            question: "What's the best material for exterior doors?",
            answer: "Steel doors offer the best security and energy efficiency at an affordable price. Fiberglass doors resist warping and require less maintenance. Wood doors provide classic beauty but need more upkeep. We'll help you choose based on your priorities."
          },
          {
            question: "Can you match my existing trim and hardware?",
            answer: "Yes! We can match your existing trim style and finish, or upgrade to new trim throughout for a cohesive look. We also offer a wide selection of hardware finishes to complement your home's style."
          },
          {
            question: "Do you offer same-day door replacement?",
            answer: "For emergency situations (broken doors, security issues), we can often provide same-day service with in-stock doors. Custom door orders typically take 1-2 weeks for delivery before installation."
          }
        ]}
      />
    </div>
  );
}
