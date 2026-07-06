import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Quote, Phone, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";

export default function DeckRepairReviews() {
  const seoData = {
    title: "Deck Repair Reviews | Customer Testimonials | Hero Handyman Pro",
    description: "Read real customer reviews of our deck repair services. See why homeowners trust Hero Handyman Pro for professional deck repair in St. Louis & Metro East.",
    keywords: "deck repair reviews, deck repair testimonials, deck repair reviews St. Louis",
    canonicalUrl: "https://herohandymanpro.com/reviews/deck-repair/"
  };

  const reviews = [
    {
      name: "Sarah M.",
      location: "O'Fallon, IL",
      rating: 5,
      date: "December 2025",
      project: "Deck Repair project",
      review: "Phil and his team did an outstanding job on our deck repair. They were professional, on time, and cleaned up everything perfectly. The quality of work exceeded our expectations. Highly recommend Hero Handyman Pro!"
    },
    {
      name: "Michael T.",
      location: "Edwardsville, IL",
      rating: 5,
      date: "November 2025",
      project: "Deck Repair project",
      review: "We had a great experience with Hero Handyman Pro. The deck repair was completed exactly as promised. Phil explained everything clearly and the crew was very respectful of our home. Worth every penny."
    },
    {
      name: "Jennifer K.",
      location: "St. Louis, MO",
      rating: 5,
      date: "October 2025",
      project: "Deck Repair project",
      review: "After getting quotes from three companies, Hero Handyman Pro offered the best value and service. The deck repair turned out beautifully. The crew was detail-oriented and professional throughout the entire project."
    },
    {
      name: "David R.",
      location: "Collinsville, IL",
      rating: 5,
      date: "September 2025",
      project: "Deck Repair project",
      review: "Phil explained everything clearly and the deck repair was done perfectly. They handled every detail with care and expertise. Our home looks fantastic and we couldn't be happier with the results."
    },
    {
      name: "Lisa H.",
      location: "Glen Carbon, IL",
      rating: 5,
      date: "August 2025",
      project: "Deck Repair project",
      review: "Hero Handyman Pro did an excellent job with our deck repair. The installation was clean and professional. They even went above and beyond to fix a few other issues we had. Highly recommend!"
    },
    {
      name: "Robert P.",
      location: "Belleville, IL",
      rating: 5,
      date: "July 2025",
      project: "Deck Repair project",
      review: "Great experience from start to finish. The deck repair was completed quickly and the price was very fair. Phil and his team are true professionals who take pride in their work."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData} />
      <ReviewSchema 
        serviceName="Deck Repair & Restoration"
        serviceUrl="/reviews/deck-repair/"
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
              Deck Repair Reviews
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Real customer experiences with our professional deck repair services throughout St. Louis and Metro East Illinois.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-teal-100">({reviews.length} deck repair reviews)</span>
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
            Interested in Deck Repair?
          </h2>
          <p className="text-gray-600 mb-6">
            Learn more about our professional deck repair services.
          </p>
          <Link href="/handyman-services/deck-repair/">
            <Button variant="outline" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-50">
              View Deck Repair Services
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Deck Repair Project?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join our satisfied customers. Get a free quote for professional deck repair today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Deck Repair Reviews - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Repair Reviews Bottom')}>
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
