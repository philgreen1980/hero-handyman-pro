import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Quote, Phone, ArrowLeft, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const reviews = [
  {
    name: "Sarah M.",
    location: "O'Fallon, IL",
    rating: 5,
    date: "March 2026",
    project: "Multi-item home repair punch list",
    review: "I had a long list of small repairs piling up — a sticky door, a cracked outlet cover, a leaky bathroom faucet, and drywall patching from where we'd had a pipe fixed. Phil knocked them all out in a single afternoon. Professional, tidy, and priced fairly. He even swept up before leaving. Highly recommend!"
  },
  {
    name: "James R.",
    location: "St. Louis, MO",
    rating: 5,
    date: "February 2026",
    project: "Drywall patching & light fixture installation",
    review: "Fixed my drywall and installed two new light fixtures in one afternoon. The drywall patch is completely invisible — he matched the texture perfectly. He even swept up after himself, which most contractors skip. Will absolutely call again for the next project."
  },
  {
    name: "Emily T.",
    location: "Edwardsville, IL",
    rating: 5,
    date: "March 2026",
    project: "General home maintenance",
    review: "Finally a handyman who shows up on time! Phil confirmed the appointment the evening before, arrived exactly when he said, and worked efficiently through everything on my list. Great communication from booking to completion. I've already scheduled a second visit."
  },
  {
    name: "Linda K.",
    location: "Collinsville, IL",
    rating: 5,
    date: "January 2026",
    project: "Drywall repair after plumbing work",
    review: "Had a large drywall patch needed after a plumber fixed a pipe behind the wall. Phil matched the texture perfectly — you genuinely cannot tell there was ever a hole there. He cleaned up completely before leaving. Couldn't be happier."
  },
  {
    name: "Robert S.",
    location: "Belleville, IL",
    rating: 5,
    date: "February 2026",
    project: "Squeaky stair, drywall holes & ceiling fan",
    review: "Called on a Monday, Phil was there Tuesday morning. Fixed a squeaky stair, patched two drywall holes, and installed a new ceiling fan — all in about 3 hours. Excellent value for the quality of work."
  },
  {
    name: "Karen W.",
    location: "Glen Carbon, IL",
    rating: 5,
    date: "March 2026",
    project: "Recurring home maintenance",
    review: "I've used Hero Handyman Pro three times now. Each time Phil is on time, communicates clearly about what he's doing and why, and the work is always done right the first time. My go-to for any home repair in Glen Carbon."
  },
  {
    name: "David H.",
    location: "Fenton, MO",
    rating: 5,
    date: "January 2026",
    project: "Pre-sale home punch list",
    review: "Needed several punch-list items done before listing my house. Phil completed everything on the list in one visit and even pointed out a few things I hadn't noticed that could have come up in inspection. Great attention to detail — the house sold quickly."
  },
  {
    name: "Nancy P.",
    location: "St. Charles, MO",
    rating: 4,
    date: "February 2026",
    project: "Bathroom exhaust fan, towel bar & ceiling patch",
    review: "Very happy with the work. Phil fixed our bathroom exhaust fan, replaced a broken towel bar, and patched a small hole in the ceiling. Took a little longer than expected but the quality was excellent and he was upfront about the extra time needed."
  },
];export default function HandymanReviews() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <ReviewSchema
        serviceName="Handyman Services"
        serviceUrl="/reviews/handyman/"
        reviews={reviews.map(r => ({
          author: r.name,
          location: r.location,
          rating: r.rating,
          date: r.date,
          reviewBody: r.review,
          project: r.project
        }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 47 }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Link href="/reviews/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Reviews
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Handyman Service Reviews — St. Louis & Metro East
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Real reviews from homeowners across O'Fallon, Edwardsville, Belleville, St. Louis, and surrounding communities.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-teal-100">(47 verified reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-teal-800 text-white py-4 px-6">
        <div className="container max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
          {["Licensed & Insured", "Same/Next-Day Availability", "Transparent Pricing", "Background-Checked"].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-teal-300" /> {item}
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
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

      {/* Related services */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Our Handyman Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Drywall & Ceiling Repair", href: "/handyman-services/drywall-repair/" },
              { label: "Ceiling Fan Installation", href: "/handyman-services/ceiling-fan-installation/" },
              { label: "Faucet & Sink Repair", href: "/handyman-services/faucet-install-and-repair/" },
              { label: "Home Repair Punch Lists", href: "/handyman-services/home-repair-services/" },
              { label: "Interior Trim & Carpentry", href: "/handyman-services/trim-carpentry/" },
              { label: "Senior Accessibility Upgrades", href: "/handyman-services/senior-accessibility-upgrades/" },
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

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your project? Get a free quote in 24 hrs.</h2>
          <p className="text-xl text-teal-50 mb-8">
            Join 47+ satisfied homeowners who trusted Hero Handyman Pro with their home repairs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Handyman Reviews - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Handyman Reviews Bottom')}>
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
