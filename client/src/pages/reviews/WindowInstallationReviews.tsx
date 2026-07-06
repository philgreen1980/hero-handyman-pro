import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Quote, Phone, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function WindowInstallationReviews() {
  const seo = useSeoRoute();  const reviews = [
    {
      name: "Sarah M.",
      location: "O'Fallon, IL",
      rating: 5,
      date: "December 2025",
      project: "Replaced 8 windows throughout home",
      review: "Phil and his team did an outstanding job replacing all our windows. The difference in our energy bills is already noticeable! They were professional, on time, and cleaned up everything perfectly. The windows look beautiful and operate so smoothly. Highly recommend for anyone considering window replacement."
    },
    {
      name: "Michael T.",
      location: "Edwardsville, IL",
      rating: 5,
      date: "November 2025",
      project: "Bay window installation",
      review: "We wanted a bay window in our living room and Hero Handyman Pro made it happen. The installation was flawless - they handled the structural work, framing, and finishing with expert precision. The bay window completely transformed our living room. Worth every penny."
    },
    {
      name: "Jennifer K.",
      location: "St. Louis, MO",
      rating: 5,
      date: "October 2025",
      project: "Full home window replacement",
      review: "After getting quotes from three companies, Hero Handyman Pro offered the best value and service. They replaced all 12 windows in our home in just two days. No drafts, no noise, and our home looks so much better. The crew was respectful of our home and very detail-oriented."
    },
    {
      name: "David R.",
      location: "Collinsville, IL",
      rating: 5,
      date: "September 2025",
      project: "Basement egress windows",
      review: "Needed egress windows installed in our basement for code compliance. Phil explained everything clearly and the installation was done perfectly. They handled the cutting, framing, and window wells with no issues. Our basement is now brighter and up to code."
    },
    {
      name: "Lisa H.",
      location: "Glen Carbon, IL",
      rating: 5,
      date: "August 2025",
      project: "Kitchen and dining room windows",
      review: "Our old windows were rotting and drafty. Hero Handyman Pro replaced them with beautiful energy-efficient windows. The installation was clean and professional. They even fixed some water damage around the frames. Our kitchen feels brand new!"
    },
    {
      name: "Robert P.",
      location: "Belleville, IL",
      rating: 5,
      date: "July 2025",
      project: "Front picture window replacement",
      review: "The large picture window in our front room was fogged between the panes. Phil replaced it with a gorgeous new window that really enhances our curb appeal. The installation was quick and the price was very fair. Great experience from start to finish."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <ReviewSchema 
        serviceName="Window Installation & Replacement"
        serviceUrl="/reviews/window-installation/"
        reviews={reviews.map(r => ({
          author: r.name,
          location: r.location,
          rating: r.rating,
          date: r.date,
          reviewBody: r.review,
          project: r.project
        }))}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 6
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Link href="/reviews/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Reviews
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Window Installation Reviews
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Real customer experiences with our professional window installation and replacement services throughout St. Louis and Metro East Illinois.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-teal-100">({reviews.length} window installation reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-teal-700 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600">{review.location}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-teal-900">
                    Project: {review.project}
                  </p>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Link */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Window Installation?
          </h2>
          <p className="text-gray-600 mb-6">
            Learn more about our professional window installation and replacement services.
          </p>
          <Link href="/handyman-services/window-installation/">
            <Button variant="outline" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-50">
              View Window Installation Services
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join our satisfied customers. Get a free quote for professional window installation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Window Installation Reviews - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Window Installation Reviews Bottom')}>
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
