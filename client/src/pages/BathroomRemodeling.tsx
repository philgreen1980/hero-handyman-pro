import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, Shield, Star } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function BathroomRemodeling() {
  const seo = useSeoRoute();
  const faqs = [
    {
      question: "How much does a bathroom remodel cost?",
      answer: "Bathroom remodeling costs vary widely based on the scope of work and materials chosen. A basic refresh (new fixtures, paint, flooring) typically costs $5,000-$10,000. Mid-range remodels with new tile, vanity, and fixtures average $10,000-$20,000. Full luxury remodels can range from $20,000-$40,000+. We provide detailed, itemized quotes so you know exactly what you're getting."
    },
    {
      question: "How long does a bathroom remodel take?",
      answer: "Most bathroom remodels take 2-4 weeks depending on the scope. A simple cosmetic update can be completed in 1-2 weeks, while a full gut renovation with plumbing and electrical work typically takes 3-4 weeks. We provide a detailed timeline during your consultation and keep you updated throughout the project."
    },
    {
      question: "Do I need to move out during the remodel?",
      answer: "No, you don't need to move out. However, the bathroom being remodeled will be out of service during construction. If it's your only bathroom, we can work with you to minimize downtime and establish temporary arrangements. Many clients with multiple bathrooms continue their normal routines with minimal disruption."
    },
    {
      question: "Can you work with my existing layout or do walls need to move?",
      answer: "We can work with your existing layout to save costs and time, or we can reconfigure the space if you want to change the layout. Moving plumbing fixtures (toilet, shower, sink) to new locations adds cost and time, but it's often worth it to create a more functional bathroom. We'll discuss all options during your consultation."
    },
    {
      question: "What's included in a full bathroom remodel?",
      answer: "A full bathroom remodel typically includes: demolition and disposal, new plumbing fixtures (toilet, sink, shower/tub), tile work (floor and walls), new vanity and countertop, lighting and electrical updates, ventilation fan, painting, and final cleanup. We handle all aspects including permits, so you have a single point of contact throughout the project."
    },
    {
      question: "Do you handle permits for bathroom remodeling?",
      answer: "Yes, we handle all necessary permits for your bathroom remodel. Permits are typically required for plumbing, electrical, and structural work. We're familiar with local building codes in St. Louis and Metro East, and we ensure all work meets or exceeds code requirements for your safety and peace of mind."
    }
  ];  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <FAQSchema faqs={faqs} pageUrl="/handyman-services/bathroom-remodeling/" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Complete Bathroom Renovations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bathroom Remodeling & Renovation in St. Louis & Metro East
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Transform your outdated bathroom into a beautiful, functional space you'll love. From small updates to complete renovations, we handle every aspect of your bathroom remodel with expert craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking/">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Bathroom Quote', 'Bathroom Remodeling - Hero CTA')}
                >
                  Get Free Bathroom Quote
                </Button>
              </Link>
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Bathroom Remodeling Hero')}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 800-741-6056
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 bg-gray-50 border-b border-gray-200">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Licensed & Insured</div>
              <div className="text-sm text-gray-600">Fully Certified</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Free Consultations</div>
              <div className="text-sm text-gray-600">Design Help Included</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Lifetime Labor Warranty</div>
              <div className="text-sm text-gray-600">On All Work</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">4.9 Rating</div>
              <div className="text-sm text-gray-600">235+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Complete Bathroom Remodeling Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Whether you want a simple refresh or a complete transformation, we provide comprehensive bathroom remodeling services tailored to your vision and budget.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Bathroom Remodels</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Complete layout redesign and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Plumbing relocation and upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Electrical work and lighting installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Flooring installation (tile, vinyl, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Drywall, painting, and finishing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shower & Tub Installation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Walk-in shower installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Tub-to-shower conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Bathtub replacement and installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Tile shower and tub surrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Shower door and enclosure installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vanity & Fixtures</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Vanity installation and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Sink and faucet installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Toilet installation and upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Mirror and medicine cabinet installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Towel bars, hooks, and accessories</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tile & Flooring</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Ceramic and porcelain tile installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Natural stone tile (marble, granite, slate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Luxury vinyl plank (LVP) flooring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Heated floor installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>Backsplash and accent tile work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Bathroom Remodeling Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your vision, budget, and timeline. We'll measure your space and provide design suggestions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Quote</h3>
              <p className="text-gray-600">
                We create a detailed plan with material selections and provide a transparent, itemized quote.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction</h3>
              <p className="text-gray-600">
                We complete the work efficiently with minimal disruption. We protect your home and clean up daily.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Final Walkthrough</h3>
              <p className="text-gray-600">
                We review everything with you to ensure you're completely satisfied with your new bathroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Hero Handyman Pro for Bathroom Remodeling?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Service</h3>
              <p className="text-gray-600">
                We handle every aspect of your remodel - plumbing, electrical, tile, carpentry, painting. No need to coordinate multiple contractors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                35+ years of experience in home remodeling. We take pride in precise tile work, clean finishes, and attention to every detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time, On-Budget</h3>
              <p className="text-gray-600">
                We provide realistic timelines and stick to them. No surprise costs - you'll know exactly what to expect from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews CTA */}
      <section className="py-12 px-6 bg-teal-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            See What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Read authentic reviews from homeowners who trusted us with their bathroom remodeling projects.
          </p>
          <Link href="/reviews/bathroom-remodeling/">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-8"
              onClick={() => trackCTAClick('Read Customer Reviews', 'Bathroom Remodeling - Reviews CTA')}
            >
              <Star className="w-5 h-5 mr-2" />
              Read Customer Reviews
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving St. Louis & Metro East
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Professional bathroom remodeling services throughout the region
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/service-areas/ofallon-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">O'Fallon, IL</span></Link>
            <Link href="/service-areas/edwardsville-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Edwardsville, IL</span></Link>
            <Link href="/service-areas/collinsville-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Collinsville, IL</span></Link>
            <Link href="/service-areas/belleville-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Belleville, IL</span></Link>
            <Link href="/service-areas/glen-carbon-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Glen Carbon, IL</span></Link>
            <Link href="/service-areas/st-louis-mo-handyman/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">St. Louis, MO</span></Link>
            <Link href="/service-areas/st-charles-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">St. Charles, MO</span></Link>
            <Link href="/service-areas/fenton-handyman-services/"><span className="px-4 py-2 bg-white rounded-full hover:bg-teal-100 cursor-pointer">Fenton, MO</span></Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Common questions about our bathroom remodeling services.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Get a free consultation and quote for your bathroom remodeling project. Let's discuss your vision and create the bathroom you've always wanted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Bathroom Remodeling - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Bathroom Remodeling Bottom')}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call: 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
