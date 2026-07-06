import { Link } from 'wouter';
import { Phone, MapPin, CheckCircle2, ArrowRight, Shield, Award, Clock3, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function PorchRepairOFallon() {
  return (
    <div className="min-h-screen">
      <SEO {...seoConfig.porchRepairOFallon} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Proudly Serving O'Fallon, IL</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Porch Repair in O'Fallon, IL
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              Expert porch repairs for sagging floors, rotted wood, damaged railings, and more. Restore your porch's safety and beauty. Licensed & insured with 30+ years experience.
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

      {/* Common Porch Problems */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Common Porch Problems We Fix</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <Hammer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Sagging or Bouncy Floors</h3>
                <p className="text-gray-600">
                  Caused by deteriorated floor joists, inadequate support posts, or settling foundations. We reinforce or replace structural members to restore stability and safety.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <Hammer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Rotted Wood & Boards</h3>
                <p className="text-gray-600">
                  Moisture damage from poor drainage, leaking roofs, or ground contact causes wood rot. We remove and replace damaged boards, posts, and structural members with treated lumber.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <Hammer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Damaged Railings & Balusters</h3>
                <p className="text-gray-600">
                  Loose, wobbly, or broken railings create serious safety hazards. We repair or replace railings to meet current building codes and ensure your family's safety.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <Hammer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Cracked or Settling Concrete</h3>
                <p className="text-gray-600">
                  Concrete porch slabs crack and settle over time. We level sunken areas, fill cracks, and apply protective coatings or install new concrete as needed.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <Hammer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Peeling Paint & Stain</h3>
                <p className="text-gray-600">
                  Weathered finishes allow moisture penetration and accelerate wood decay. We prep, prime, and apply quality exterior coatings for long-lasting protection.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <Hammer className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold mb-3">Leaking Porch Roofs</h3>
                <p className="text-gray-600">
                  Water damage from leaking roofs ruins ceilings and accelerates wood rot. We repair or replace roofing, flashing, and gutters to keep your porch dry.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Porch Repair Pricing</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for porch repairs. Prices include materials, labor, and cleanup.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Minor Repairs */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Minor Repairs</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$200-$800</div>
                <p className="text-sm text-gray-600 mb-4">Small fixes & maintenance</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Replace 5-10 deck boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Repair loose railings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fix squeaky stairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Patch small rot areas</span>
                  </li>
                </ul>
              </div>

              {/* Moderate Repairs */}
              <div className="bg-white rounded-lg p-6 border-2 border-teal-600 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Common
                </div>
                <h3 className="text-xl font-bold mb-2">Moderate Repairs</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$800-$2,500</div>
                <p className="text-sm text-gray-600 mb-4">Structural & safety fixes</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Replace support posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Rebuild railing system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Repair floor joists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Replace stairs</span>
                  </li>
                </ul>
              </div>

              {/* Major Repairs */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Major Repairs</h3>
                <div className="text-3xl font-bold text-teal-600 mb-4">$2,500-$8,000</div>
                <p className="text-sm text-gray-600 mb-4">Extensive restoration</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete floor replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Structural reinforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Roof repair/replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full porch restoration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Prices vary based on porch size, extent of damage, materials used, and accessibility. Structural issues, code compliance upgrades, and custom features may increase cost. All estimates include materials, labor, and debris removal. Free on-site inspection required for accurate quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Porches We Repair */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Types of Porches We Repair</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Porch Styles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Front Porches:</strong> Entry porches, covered porches, and wraparound porches
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Back Porches:</strong> Screened porches, three-season rooms, and open decks
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Concrete Porches:</strong> Stamped concrete, painted concrete, and slab repairs
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Wood Porches:</strong> Treated lumber, composite, and hardwood decking
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Common Repairs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Floor Repairs:</strong> Replace rotted boards, reinforce joists, level sagging areas
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Railing Repairs:</strong> Rebuild railings, replace balusters, secure posts
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Stair Repairs:</strong> Replace treads, rebuild stringers, fix handrails
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Roof Repairs:</strong> Fix leaks, replace shingles, repair flashing
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Porch Repair Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Inspection & Assessment</h3>
                  <p className="text-gray-600">
                    We thoroughly inspect your porch to identify all structural issues, safety hazards, and areas of damage. We'll explain what needs repair and why, with photos and detailed notes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Detailed Quote & Timeline</h3>
                  <p className="text-gray-600">
                    We provide a clear, itemized estimate with material options and expected timeline. No hidden fees or surprises - you'll know exactly what to expect before we start.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Repair Work</h3>
                  <p className="text-gray-600">
                    Our experienced team removes damaged materials, reinforces or replaces structural members, and installs new components using quality materials and proven techniques that meet building codes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Warranty</h3>
                  <p className="text-gray-600">
                    We walk you through the completed work, ensure everything meets your expectations, and clean up thoroughly. All work is backed by our satisfaction guarantee.
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
                <h3 className="text-xl font-bold mb-3">How do I know if my porch needs repair?</h3>
                <p className="text-gray-600">
                  Warning signs include sagging or bouncy floors, loose railings, visible rot or decay, cracks in concrete, peeling paint, and water damage. If you notice any of these issues, schedule a free inspection to assess the extent of damage.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Can you match my existing porch materials?</h3>
                <p className="text-gray-600">
                  Yes! We can match existing wood species, stain colors, and railing styles. For older homes, we'll find the closest match available or recommend complementary materials that blend seamlessly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How long do porch repairs take?</h3>
                <p className="text-gray-600">
                  Minor repairs typically take 1-2 days. Moderate repairs take 3-5 days. Major structural repairs or full restorations can take 1-2 weeks. Timeline depends on extent of damage, weather, and material availability.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do I need a permit for porch repairs?</h3>
                <p className="text-gray-600">
                  Minor repairs usually don't require permits. Structural repairs, railing replacements, or work affecting load-bearing members typically do. We'll advise you on permit requirements and can handle the permitting process if needed.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What's the best way to prevent future porch damage?</h3>
                <p className="text-gray-600">
                  Regular maintenance is key: seal or paint wood every 2-3 years, ensure proper drainage, keep gutters clean, trim vegetation away from the porch, and address small issues promptly before they become major problems.
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
              Ready to Repair Your Porch?
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Get a free inspection and estimate today! We serve St. Louis, MO and Metro East, IL with professional porch repair services.
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
                  Request Free Inspection
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
            title="Free Porch Maintenance Checklist"
            description="Download our seasonal porch maintenance checklist to prevent costly repairs."
            pdfUrl="/downloads/porch-maintenance-checklist.pdf"
            pdfFilename="porch-maintenance-checklist.pdf"
          />
        </div>
      </section>

      <LocalBusinessSchema 
        city="St. Louis"
        state="MO"
        pageUrl="https://herohandymanpro.com/services/porch-repair"
      />
      <ServiceSchema 
        serviceName="Porch Repair & Restoration"
        description="Professional porch repair services in St. Louis & Metro East. Fix sagging floors, rotted wood, damaged railings, and more."
        serviceType="Porch Repair"
        areaServed="St. Louis"
        priceRange="$200-$8000"
        pageUrl="/services/porch-repair"
      />
      <FAQSchema 
        pageUrl="/services/porch-repair"
        faqs={[
          {
            question: "How do I know if my porch needs repair?",
            answer: "Warning signs include sagging or bouncy floors, loose railings, visible rot or decay, cracks in concrete, peeling paint, and water damage. If you notice any of these issues, schedule a free inspection to assess the extent of damage."
          },
          {
            question: "Can you match my existing porch materials?",
            answer: "Yes! We can match existing wood species, stain colors, and railing styles. For older homes, we'll find the closest match available or recommend complementary materials that blend seamlessly."
          },
          {
            question: "How long do porch repairs take?",
            answer: "Minor repairs typically take 1-2 days. Moderate repairs take 3-5 days. Major structural repairs or full restorations can take 1-2 weeks. Timeline depends on extent of damage, weather, and material availability."
          },
          {
            question: "Do I need a permit for porch repairs?",
            answer: "Minor repairs usually don't require permits. Structural repairs, railing replacements, or work affecting load-bearing members typically do. We'll advise you on permit requirements and can handle the permitting process if needed."
          },
          {
            question: "What's the best way to prevent future porch damage?",
            answer: "Regular maintenance is key: seal or paint wood every 2-3 years, ensure proper drainage, keep gutters clean, trim vegetation away from the porch, and address small issues promptly before they become major problems."
          }
        ]}
      />
    </div>
  );
}
