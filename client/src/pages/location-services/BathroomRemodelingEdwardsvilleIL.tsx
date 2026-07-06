import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Clock, Shield, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function BathroomRemodelingEdwardsvilleIL() {
  const seo = useSeoRoute();  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving Edwardsville, IL & Surrounding Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bathroom Remodeling in Edwardsville, IL
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Your local bathroom remodeling experts in Edwardsville. Professional service with expert craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking/">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Quote', 'Bathroom Remodeling Edwardsville - Hero CTA')}
                >
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:618-353-0955" onClick={() => trackPhoneClick('618-353-0955', 'Bathroom Remodeling Edwardsville Hero')}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 618-353-0955
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
              <div className="font-semibold text-gray-900">Local Edwardsville Team</div>
              <div className="text-sm text-gray-600">Not a Franchise</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-teal-700 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Same-Day Quotes</div>
              <div className="text-sm text-gray-600">Fast Response</div>
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

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started in Edwardsville?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Get a free quote for professional bathroom remodeling in Edwardsville, IL. Same-day estimates available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Bathroom Remodeling Edwardsville - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:618-353-0955" onClick={() => trackPhoneClick('618-353-0955', 'Bathroom Remodeling Edwardsville Bottom')}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call: 618-353-0955
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
