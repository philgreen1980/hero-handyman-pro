import SEO from '@/components/SEO';
import { Link } from 'wouter';
import { Star, ArrowRight } from 'lucide-react';
import { useSeoRoute } from '@/hooks/useSeoRoute';

const reviewCategories = [
  {
    title: "Handyman Services Reviews",
    href: "/reviews/handyman/",
    description: "Reviews for general home repair, maintenance, and handyman services across St. Louis and Metro East.",
    rating: 4.9,
    count: 47,
  },
  {
    title: "Deck Repair Reviews",
    href: "/reviews/deck-repair/",
    description: "Customer reviews for deck board replacement, rail repair, stair repair, and deck restoration projects.",
    rating: 5.0,
    count: 18,
  },
  {
    title: "Door Installation Reviews",
    href: "/reviews/door-installation/",
    description: "Reviews for front door replacement, interior door installation, and door hardware upgrades.",
    rating: 4.9,
    count: 23,
  },
];

const featuredReviews = [
  {
    name: "Sarah M.",
    location: "O'Fallon, IL",
    text: "Hero Handyman Pro saved the day! They fixed our deck rot quickly and it looks brand new. Highly recommend!",
    service: "Deck Repair",
  },
  {
    name: "James R.",
    location: "St. Louis, MO",
    text: "Professional, polite, and clean. Fixed my drywall and installed new light fixtures in one afternoon.",
    service: "Handyman Services",
  },
  {
    name: "Emily T.",
    location: "Edwardsville, IL",
    text: "Finally a handyman who shows up on time! Great communication and fair pricing. Will use again.",
    service: "Door Installation",
  },
  {
    name: "Mark D.",
    location: "Belleville, IL",
    text: "Phil replaced our front door and the whole entry looks transformed. Clean work, no mess left behind.",
    service: "Door Installation",
  },
  {
    name: "Linda K.",
    location: "Collinsville, IL",
    text: "Had a large drywall patch after a plumbing repair. They matched the texture perfectly — you can't even tell.",
    service: "Drywall Repair",
  },
  {
    name: "Tom H.",
    location: "Glen Carbon, IL",
    text: "Deck was rotting in two spots. They replaced the boards and re-sealed the whole deck in one day. Great value.",
    service: "Deck Repair",
  },
];

export default function Reviews() {
  const seo = useSeoRoute();
  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-14 px-6">
        <div className="max-w-[1120px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Reviews</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3 leading-tight">
            Customer Reviews
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            See what homeowners across St. Louis &amp; Metro East are saying about Hero Handyman Pro. 4.9 stars across 88+ verified reviews.
          </p>
          <div className="flex items-center gap-2 mt-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-amber-400 font-bold text-lg ml-1">4.9</span>
            <span className="text-gray-400 text-sm ml-1">(88+ reviews)</span>
          </div>
        </div>
      </section>

      {/* Live Google Reviews — Elfsight Widget */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Google Reviews</h2>
          <p className="text-gray-500 text-sm mb-8">Verified reviews pulled directly from our Google Business Profile.</p>
          <div className="elfsight-app-e72c9ada-9202-4037-bc7b-e25ffd7014ed" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse Reviews by Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviewCategories.map((cat) => (
              <Link key={cat.href} href={cat.href}>
                <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-2 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-amber-600 font-bold text-sm">{cat.rating}</span>
                    <span className="text-gray-400 text-xs">({cat.count})</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-teal-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-teal-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    Read reviews <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                  <span className="text-xs bg-teal-50 text-teal-700 font-medium px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready for your project? Get a free quote in 24 hrs.</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            Join hundreds of satisfied homeowners across St. Louis and Metro East Illinois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:800-741-6056"
              className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Call 800-741-6056
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                else window.location.href = '/#contact';
              }}
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-colors cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
