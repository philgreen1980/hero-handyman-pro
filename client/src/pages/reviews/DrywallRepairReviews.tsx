import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Quote, Phone, ArrowLeft, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

const reviews = [
  {
    name: "Karen B.",
    location: "Edwardsville, IL",
    rating: 5,
    date: "March 2026",
    project: "Water-damaged ceiling drywall repair",
    review: "We had a slow roof leak that damaged about a 3-foot section of our bedroom ceiling — the drywall was soft and the texture was completely gone. Phil removed the damaged section, replaced it, and texture-matched it so well I genuinely cannot tell where the repair is. He also checked the surrounding area for moisture before closing it up, which I really appreciated."
  },
  {
    name: "Tom H.",
    location: "O'Fallon, IL",
    rating: 5,
    date: "February 2026",
    project: "Multiple drywall holes from door handles",
    review: "Three different rooms had door-handle holes in the drywall — the kind that build up over years of kids and pets. Phil patched all three in one visit, matched the orange-peel texture on two walls and the smooth finish on the third. You'd never know they were there. Very efficient, very clean."
  },
  {
    name: "Susan L.",
    location: "Belleville, IL",
    rating: 5,
    date: "January 2026",
    project: "Drywall crack repair along ceiling line",
    review: "We had a long hairline crack running along the ceiling-to-wall joint in our living room — classic settling crack in an older home. Phil taped, mudded, and feathered it out beautifully. He was honest that it might crack again slightly over time as the house continues to settle, but explained what to watch for. Appreciated the transparency."
  },
  {
    name: "David M.",
    location: "Collinsville, IL",
    rating: 5,
    date: "March 2026",
    project: "Drywall repair after plumbing access",
    review: "Our plumber had to cut into the wall to fix a pipe and left a 12-inch square hole. Phil came out, patched it with a proper backing board, mudded, sanded, and matched the texture. The repair is completely invisible. He also touched up the paint on the surrounding area so the patch didn't stand out. Excellent work."
  },
  {
    name: "Linda P.",
    location: "Glen Carbon, IL",
    rating: 5,
    date: "February 2026",
    project: "Basement drywall repair after minor flooding",
    review: "After a heavy rain, we had water come in along the basement wall and damage about 4 feet of drywall at the base. Phil removed the wet section, let it dry, treated the area, and installed new moisture-resistant drywall. He also recommended we seal the exterior crack before winter — good advice that saved us from a repeat."
  },
  {
    name: "Mark T.",
    location: "St. Charles, MO",
    rating: 5,
    date: "January 2026",
    project: "Drywall repair after TV mount removal",
    review: "We removed a large wall-mounted TV and the mounting hardware left four large anchor holes and some torn paper facing. Phil filled, sanded, and texture-matched the entire area. He also repainted the section so it blended with the existing wall color. Looks completely original. Quick, professional, and reasonably priced."
  },
];export default function DrywallRepairReviews() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />
      <ReviewSchema
        serviceName="Drywall Repair Services"
        serviceUrl="/reviews/drywall-repair/"
        reviews={reviews.map(r => ({
          author: r.name,
          location: r.location,
          rating: r.rating,
          date: r.date,
          reviewBody: r.review,
          project: r.project
        }))}
        aggregateRating={{ ratingValue: 5.0, reviewCount: 28 }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 text-white py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <Link href="/reviews/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Reviews
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Drywall Repair Reviews — St. Louis & Metro East
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Real reviews from homeowners who trusted Hero Handyman Pro with drywall patching, water damage repair, texture matching, and ceiling repairs across Metro East Illinois and Greater St. Louis.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-slate-300">(28 verified reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-slate-900 text-white py-4 px-6">
        <div className="container max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
          {["Licensed & Insured", "Texture Matching Specialist", "Water Damage Repair", "Same-Week Scheduling"].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-teal-400" /> {item}
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-slate-700 transition-colors">
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
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-slate-900">Project: {review.project}</p>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-slate-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Our Drywall Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Drywall Repair Services", href: "/handyman-services/drywall-repair/" },
              { label: "Drywall Repair in Edwardsville IL", href: "/drywall-repair-edwardsville-il" },
              { label: "Drywall Repair in O'Fallon IL", href: "/service-areas/drywall-repair-ofallon-il/" },
              { label: "Home Repair Services", href: "/handyman-services/" },
              { label: "Painting & Interior Finishing", href: "/handyman-services/painting/" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <span className="inline-block border border-slate-600 text-slate-700 hover:bg-slate-50 font-medium px-4 py-2 rounded-full text-sm cursor-pointer transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your project? Get a free quote in 24 hrs.</h2>
          <p className="text-xl text-slate-200 mb-8">
            Join 28 satisfied homeowners who trusted Hero Handyman Pro with their drywall repair.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking/">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Drywall Reviews - Bottom CTA')}
              >
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Drywall Reviews Bottom')}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" /> Call: 800-741-6056
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
