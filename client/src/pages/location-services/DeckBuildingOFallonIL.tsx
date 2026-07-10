import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Clock, Shield, Star, Hammer, TreePine, Layers } from "lucide-react";
import SEO from "@/components/SEO";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function DeckBuildingOFallonIL() {
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
              <span className="text-sm font-medium">Serving O'Fallon, IL & Scott AFB Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Deck Building in O'Fallon, IL
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Custom deck construction for O'Fallon homeowners — pressure-treated lumber, composite decking, and custom railings. Free estimates, same-week scheduling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Quote', "Deck Building O'Fallon - Hero CTA")}
                >
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', "Deck Building O'Fallon Hero")}>
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
              <div className="font-semibold text-foreground">Local O'Fallon Team</div>
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
                <h2 className="text-3xl font-bold text-primary mb-4">Custom Deck Construction in O'Fallon, IL</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O'Fallon homeowners have some of the best backyards in Metro East — and a well-built deck is one of the most effective ways to use that space. Whether you want a ground-level platform off the back door, a raised deck with stairs, or a multi-level structure that wraps around the house, Hero Handyman Pro builds decks that are structurally sound, code-compliant, and built to handle Illinois winters.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Phil has been building and repairing decks in O'Fallon and the surrounding Scott AFB corridor for years. He knows the local permit process through the City of O'Fallon, understands the soil conditions that affect post depth and footing design, and has experience with the HOA guidelines common in newer O'Fallon subdivisions like Hartmann Farms, Wingate, and Pheasant Ridge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every deck build starts with an honest conversation about budget, use, and longevity. Phil will walk your yard, measure the space, and give you a clear written estimate before any work begins. No upselling, no vague quotes — just a straightforward scope and price.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Deck Materials We Work With</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The right material depends on your budget, how much maintenance you want to do, and how long you plan to stay in the home. Here is how the main options compare for O'Fallon's climate.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <TreePine className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Pressure-Treated Lumber</h3>
                      <p className="text-sm text-muted-foreground">The most cost-effective option for a new deck. Pressure-treated pine handles Metro East's freeze-thaw cycles well when properly installed with the right fasteners and drainage slope. Requires staining every 2–3 years to maintain appearance and prevent checking.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <Layers className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Composite Decking (Trex, TimberTech, Fiberon)</h3>
                      <p className="text-sm text-muted-foreground">Higher upfront cost, but virtually maintenance-free for 25+ years. No staining, no splinters, and composite boards hold their color well in direct sun. A popular choice for O'Fallon families with kids and pets who want a clean, low-maintenance outdoor space.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <Hammer className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Cedar & Hardwood</h3>
                      <p className="text-sm text-muted-foreground">Cedar offers natural rot resistance and a premium look at a mid-range price. Ipe and other tropical hardwoods are extremely durable but require specialized fasteners and finishing. Phil can source and install any of these materials based on your preference.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">What's Included in a Deck Build</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A complete deck build from Hero Handyman Pro covers every phase of the project. Phil handles the permit application with the City of O'Fallon, digs and pours the concrete footings to the required frost depth (42 inches in Illinois), frames the substructure with properly sized joists and beams, installs the decking boards, builds the railing system to code, and constructs any stairs needed to reach grade. Cleanup is included — you won't be left with a pile of lumber scraps and concrete bags in your yard.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For homeowners who already have a concrete patio or existing structure, Phil can also build a deck addition or elevated platform that ties into the existing layout. If you're not sure what's possible with your space, the free estimate visit is the right first step.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Serving O'Fallon and Nearby Communities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hero Handyman Pro serves all of O'Fallon, IL (62269) including neighborhoods near Scott Air Force Base, Shiloh, Mascoutah, Belleville, and Fairview Heights. If you're within 20 miles of O'Fallon, Phil can typically schedule an estimate within 24–48 hours.
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
                    onClick={() => trackCTAClick('Get Free Quote', "Deck Building O'Fallon - Sidebar CTA")}
                  >
                    Request Estimate
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', "Deck Building O'Fallon Sidebar")}>
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
                  <li><Link href="/gbp/ofallon-il/"><span className="text-primary hover:underline cursor-pointer">All O'Fallon Handyman Services</span></Link></li>
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
            Ready to Build Your Deck in O'Fallon?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free, written estimate for your deck project. Phil responds within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', "Deck Building O'Fallon - Bottom CTA")}
              >
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', "Deck Building O'Fallon Bottom")}>
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
