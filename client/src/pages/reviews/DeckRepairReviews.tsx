import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Quote, Phone, ArrowLeft, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const reviews = [
  {
    name: "Tom H.",
    location: "Glen Carbon, IL",
    rating: 5,
    date: "March 2026",
    project: "Deck board replacement & re-sealing",
    review: "Two sections of our deck were rotting through — you could feel them flex underfoot. Phil replaced the boards and re-sealed the whole deck in one day. The new boards match the existing wood well and the deck feels completely solid again. Great value for the work done."
  },
  {
    name: "Mark D.",
    location: "O'Fallon, IL",
    rating: 5,
    date: "February 2026",
    project: "Deck railing repair & stair tread replacement",
    review: "Our back deck railing was wobbly and two stair treads had cracked. Phil assessed everything, gave me a clear quote, and had it all fixed the following week. The railing is rock solid now and the new treads look great. Very professional from start to finish."
  },
  {
    name: "Christine B.",
    location: "Edwardsville, IL",
    rating: 5,
    date: "January 2026",
    project: "Full deck board replacement",
    review: "We had significant wood rot across most of the deck surface. Phil gave us an honest assessment — he could have oversold us on a full rebuild but instead recommended targeted board replacement which saved us a lot of money. The deck looks brand new and has been solid through winter."
  },
  {
    name: "Greg N.",
    location: "Belleville, IL",
    rating: 5,
    date: "March 2026",
    project: "Deck post repair & ledger board reinforcement",
    review: "One of our deck posts had rotted at the base and the ledger board where it attached to the house needed reinforcement. Phil identified both issues on the initial inspection. The repair was done correctly with proper hardware and the deck is now safer than it has been in years."
  },
  {
    name: "Patricia L.",
    location: "Collinsville, IL",
    rating: 5,
    date: "February 2026",
    project: "Deck board spot repair & staining",
    review: "Had about a dozen boards that needed replacing after a wet winter. Phil replaced them and then stained the entire deck so everything matched. The color blend is perfect — guests cannot tell which boards are new. Showed up on time both days and left the yard clean."
  },
  {
    name: "Steve M.",
    location: "St. Louis, MO",
    rating: 5,
    date: "January 2026",
    project: "Deck inspection & structural repair",
    review: "Called Hero Handyman Pro after noticing the deck felt springy in one corner. Phil found that two joists had significant rot and the flashing where the deck meets the house had failed. He fixed both issues properly. Honest, thorough, and reasonably priced."
  },
];export default function DeckRepairReviews() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <ReviewSchema
        serviceName="Deck Repair Services"
        serviceUrl="/reviews/deck-repair/"
        reviews={reviews.map(r => ({
          author: r.name,
          location: r.location,
          rating: r.rating,
          date: r.date,
          reviewBody: r.review,
          project: r.project
        }))}
        aggregateRating={{ ratingValue: 5.0, reviewCount: 18 }}
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
              Deck Repair Reviews — St. Louis & Metro East
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Real reviews from homeowners who trusted Hero Handyman Pro with deck board replacement, railing repair, rot repair, and structural deck work.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-teal-100">(18 verified reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-800 text-white py-4 px-6">
        <div className="container max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
          {["Licensed & Insured", "Free Deck Inspection", "Rot Repair Specialists", "Same-Week Scheduling"].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-teal-300" /> {item}
            </div>
          ))}
        </div>
      </section>

      {/* Intro copy section */}
      <section className="py-12 px-6 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">What Deck Repair Customers Say About Hero Handyman Pro</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The reviews below are from real homeowners across St. Louis and Metro East Illinois who hired Hero Handyman Pro for deck repair work. Projects range from replacing a handful of rotted boards to full structural rebuilds where the ledger board, posts, and framing had to be replaced before the surface could be addressed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Deck repair is one of those jobs where the difference between a handyman who knows what he's doing and one who doesn't shows up quickly. A board replacement that doesn't account for the underlying joist condition, or a railing repair that doesn't address the post footing, will fail again within a season or two. Phil's approach is to assess the full structure before quoting, so the repair addresses the actual problem rather than just the visible symptom.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your deck has soft spots, wobbly railings, rotted fascia, or boards that have pulled away from the framing, call for a free inspection. Phil will walk the deck, identify what needs to be done, and give you a written estimate before any work begins.
            </p>
          </div>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Our Deck Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Deck Repair & Restoration", href: "/handyman-services/deck-repair/" },
              { label: "Deck Construction", href: "/handyman-services/deck-construction/" },
              { label: "Porch & Exterior Stair Repair", href: "/handyman-services/porch-repair/" },
              { label: "Exterior Carpentry & Wood Rot", href: "/carpentry-services/" },
              { label: "Deck Repair in Edwardsville IL", href: "/service-areas/deck-building-edwardsville-il/" },
              { label: "Deck Repair in O'Fallon IL", href: "/service-areas/deck-building-ofallon-il/" },
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
            Join 18 satisfied homeowners who trusted Hero Handyman Pro with their deck repair.
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
                <Phone className="w-5 h-5 mr-2" /> Call: 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
