import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Clock, Shield, Star, Hammer, TreePine, Layers } from "lucide-react";
import SEO from "@/components/SEO";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckBuildingEdwardsvilleIL() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving Edwardsville, IL & Madison County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Deck Building in Edwardsville, IL
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Custom deck construction for Edwardsville homeowners — pressure-treated lumber, composite decking, and custom railings. Free estimates, same-week scheduling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Quote', 'Deck Building Edwardsville - Hero CTA')}
                >
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Building Edwardsville Hero')}>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 800-741-6056
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 bg-muted/30 border-b border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Local Edwardsville Team</div>
              <div className="text-sm text-muted-foreground">Not a Franchise</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Same-Day Quotes</div>
              <div className="text-sm text-muted-foreground">Fast Response</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Fully Covered</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-semibold text-foreground">4.9 Rating</div>
              <div className="text-sm text-muted-foreground">235+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">

              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Custom Deck Construction in Edwardsville, IL</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Edwardsville is one of the fastest-growing communities in Madison County, and its mix of established neighborhoods and newer subdivisions means deck projects here range from replacing a 30-year-old pressure-treated structure to building a first deck on a newly constructed home. Hero Handyman Pro handles both ends of that spectrum — and everything in between.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Phil has built and repaired decks throughout Edwardsville, including neighborhoods near SIUE, the Goshen Road corridor, and the newer developments off Troy Road and Route 157. He's familiar with the City of Edwardsville permit process, understands the soil conditions in Madison County that affect footing depth and post sizing, and knows which HOA covenants in communities like Plum Creek and Autumn Ridge require specific railing styles or material approvals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The estimate visit is free and comes with no sales pressure. Phil will measure your space, discuss your goals and budget, and give you a written quote before any work begins. Most Edwardsville deck projects are scheduled within one to two weeks of estimate approval.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Deck Materials for Edwardsville's Climate</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Madison County gets hot, humid summers and cold winters with significant freeze-thaw cycling. The right material choice affects how long your deck lasts and how much maintenance it requires year to year.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <TreePine className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Pressure-Treated Lumber</h3>
                      <p className="text-sm text-muted-foreground">The most budget-friendly option for a new deck build. Modern ground-contact rated PT lumber handles Illinois winters well when installed with proper drainage slope and stainless or hot-dipped galvanized fasteners. Plan to stain or seal every two to three years to prevent surface checking and graying.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <Layers className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Composite Decking (Trex, TimberTech, Fiberon)</h3>
                      <p className="text-sm text-muted-foreground">Higher initial investment, but composite boards require almost no maintenance and carry 25-year manufacturer warranties. They won't rot, splinter, or fade significantly in the Edwardsville sun. A popular choice for homeowners who want a clean outdoor space without the annual upkeep.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <Hammer className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Cedar</h3>
                      <p className="text-sm text-muted-foreground">Cedar offers natural rot resistance and a warm, premium appearance at a mid-range price point. It's a good fit for Edwardsville homeowners who want the look of natural wood without committing to the full cost of tropical hardwoods. Cedar requires regular oiling or staining to maintain its appearance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">What a Complete Deck Build Includes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hero Handyman Pro manages every phase of the project. That includes the permit application with the City of Edwardsville, excavating and pouring concrete footings to the required 42-inch frost depth, framing the substructure with properly sized joists and beams, installing the decking surface, building the railing system to current IRC code, and constructing any stairs needed to reach grade. The project ends with a thorough cleanup — no debris left behind.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For homeowners adding a deck to an existing concrete patio or tying into an existing structure, Phil can design a build that integrates cleanly with what's already there. If you're replacing an old deck, he can handle the demolition and haul-away as part of the project scope.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Serving Edwardsville and Nearby Communities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hero Handyman Pro serves all of Edwardsville, IL (62025) including Glen Carbon, Maryville, Troy, Collinsville, and the surrounding Madison County communities. Phil can typically schedule an estimate within 24–48 hours of your call.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Get a Free Deck Estimate</h3>
                <p className="text-primary-foreground/90 text-sm mb-6">Tell us about your project and we'll provide a clear, written quote — no pressure, no obligation.</p>
                <Link href="/contact/">
                  <Button
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                    onClick={() => trackCTAClick('Get Free Quote', 'Deck Building Edwardsville - Sidebar CTA')}
                  >
                    Request Estimate
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Building Edwardsville Sidebar')}>
                  <Button variant="outline" className="w-full mt-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Phone className="w-4 h-4 mr-2" /> 800-741-6056
                  </Button>
                </a>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg text-primary mb-4">Typical Project Scope</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Permit application & inspections",
                    "Concrete footings (42\" frost depth)",
                    "Pressure-treated or composite framing",
                    "Decking boards — PT, composite, or cedar",
                    "Code-compliant railing system",
                    "Stairs with proper rise/run ratio",
                    "Post caps, fascia, and trim details",
                    "Full site cleanup",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg text-primary mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/handyman-services/deck-repair/"><span className="text-primary hover:underline cursor-pointer">Deck Repair & Restoration</span></Link></li>
                  <li><Link href="/handyman-services/porch-repair/"><span className="text-primary hover:underline cursor-pointer">Porch & Stair Repair</span></Link></li>
                  <li><Link href="/carpentry-services/"><span className="text-primary hover:underline cursor-pointer">Exterior Carpentry</span></Link></li>
                  <li><Link href="/service-areas/edwardsville-handyman-services/"><span className="text-primary hover:underline cursor-pointer">All Edwardsville Handyman Services</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Deck in Edwardsville?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free, written estimate for your deck project. Phil responds within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Deck Building Edwardsville - Bottom CTA')}
              >
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Deck Building Edwardsville Bottom')}>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8">
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
