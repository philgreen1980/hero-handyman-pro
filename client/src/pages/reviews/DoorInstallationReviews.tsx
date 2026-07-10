import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Quote, Phone, ArrowLeft, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const reviews = [
  {
    name: "Angela R.",
    location: "O'Fallon, IL",
    rating: 5,
    date: "March 2026",
    project: "Front entry door replacement",
    review: "Our front door had a broken seal and was letting in a draft all winter. Phil replaced the entire door unit — frame, weatherstripping, and all — in about four hours. The new door closes perfectly, the draft is completely gone, and it looks great. Highly recommend."
  },
  {
    name: "Brian K.",
    location: "Edwardsville, IL",
    rating: 5,
    date: "February 2026",
    project: "Interior door installation (3 doors)",
    review: "We were finishing a basement and needed three interior doors hung. Phil measured, cut, and hung all three in a single visit. Every door swings smoothly, latches cleanly, and the gaps are perfectly even. Exactly the kind of detail work that makes a finished space look professional."
  },
  {
    name: "Donna S.",
    location: "Belleville, IL",
    rating: 5,
    date: "January 2026",
    project: "Sliding glass door repair",
    review: "Our sliding glass door was nearly impossible to open — the rollers had worn down and the track was bent in one spot. Phil replaced the rollers and straightened the track. Now it glides effortlessly. Much cheaper than replacing the whole door unit. Very happy."
  },
  {
    name: "Frank T.",
    location: "Collinsville, IL",
    rating: 5,
    date: "March 2026",
    project: "Storm door installation",
    review: "Installed a new storm door on our side entry. Phil made sure the frame was plumb before installing and used quality hardware throughout. The door closes with a solid click every time. He also caulked around the frame before leaving, which I appreciated."
  },
  {
    name: "Helen W.",
    location: "Glen Carbon, IL",
    rating: 5,
    date: "February 2026",
    project: "Sticking door repair & threshold replacement",
    review: "Two of our interior doors were sticking badly after the house settled. Phil planed both doors, adjusted the strike plates, and replaced a worn threshold on the back door. All three issues fixed in about two hours. Very efficient and reasonably priced."
  },
  {
    name: "Carl M.",
    location: "St. Charles, MO",
    rating: 5,
    date: "January 2026",
    project: "Patio door replacement",
    review: "Had a patio door that was leaking air around the frame. Phil removed the old door, repaired the framing where there was minor rot, and installed the new door with proper insulation and flashing. The difference in our heating bill was noticeable the following month."
  },
];export default function DoorInstallationReviews() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <ReviewSchema
        serviceName="Door Installation & Repair Services"
        serviceUrl="/reviews/door-installation/"
        reviews={reviews.map(r => ({
          author: r.name,
          location: r.location,
          rating: r.rating,
          date: r.date,
          reviewBody: r.review,
          project: r.project
        }))}
        aggregateRating={{ ratingValue: 5.0, reviewCount: 22 }}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Link href="/reviews/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Reviews
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Door Installation Reviews — St. Louis & Metro East
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Real reviews from homeowners who trusted Hero Handyman Pro with front door replacement, interior door installation, sliding door repair, and storm door installation.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-teal-100">(22 verified reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-800 text-white py-4 px-6">
        <div className="container max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
          {["Licensed & Insured", "Interior & Exterior Doors", "Storm & Sliding Doors", "Same-Week Scheduling"].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-teal-300" /> {item}
            </div>
          ))}
        </div>
      </section>

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
                  <p className="text-sm font-semibold text-teal-900">Project: {review.project}</p>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Our Door Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Door Installation & Repair", href: "/handyman-services/door-repair/" },
              { label: "Window Installation & Repair", href: "/handyman-services/window-installation/" },
              { label: "Exterior Carpentry", href: "/carpentry-services/" },
              { label: "Door Installation in Edwardsville IL", href: "/door-installation-edwardsville-il" },
              { label: "Door Installation in O'Fallon IL", href: "/door-installation-ofallon-il" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <span className="inline-block border border-teal-600 text-teal-700 hover:bg-teal-50 font-medium px-4 py-2 rounded-full text-sm cursor-pointer transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your project? Get a free quote in 24 hrs.</h2>
          <p className="text-xl text-teal-50 mb-8">
            Join 22 satisfied homeowners who trusted Hero Handyman Pro with their door installation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Door Installation Reviews - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Door Installation Reviews Bottom')}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" /> Call: 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
