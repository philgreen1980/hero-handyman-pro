import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function CityPage() {
  // This is a template for O'Fallon, IL as requested
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-sm text-sm font-bold uppercase tracking-wider mb-4">
              <MapPin className="h-4 w-4" /> Service Area
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6">
              Handyman & Home Repair Services in O'Fallon, IL
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Trusted local repairs for homeowners in O'Fallon, Shiloh, and surrounding 62269 areas.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider">
                Get a Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-16 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* About O'Fallon Homes */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Home Repairs in O'Fallon</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              From the newer developments near the Family Sports Park to the established neighborhoods off Highway 50, O'Fallon homes have unique needs. We understand the common repairs required for both modern construction and older properties in our area.
            </p>
            <p className="text-muted-foreground">
              Whether it's fixing a deck that's seen too many Illinois winters or updating fixtures in a 20-year-old home, Hero Handyman Pro is your local partner.
            </p>
          </section>

          {/* Popular Services */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Popular Services in O'Fallon</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-secondary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">Deck Repair</h3>
                  <p className="text-muted-foreground text-sm mb-4">Replacing rotten boards and securing railings for safe outdoor living.</p>
                  <Link href="/services/deck-porch-repair/">
                    <span className="text-secondary font-bold text-sm uppercase hover:underline cursor-pointer">Learn More</span>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-secondary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">Drywall & Paint</h3>
                  <p className="text-muted-foreground text-sm mb-4">Fixing settling cracks, nail pops, and water damage spots.</p>
                  <Link href="/services/drywall-interior-repair/">
                    <span className="text-secondary font-bold text-sm uppercase hover:underline cursor-pointer">Learn More</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Local Reviews */}
          <section>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">What O'Fallon Neighbors Say</h2>
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <div className="flex gap-1 text-secondary mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="italic text-lg mb-4">"We had a list of small repairs that had been piling up for months. Hero Handyman came out to our house in the Reserves, gave us a fair quote, and knocked it all out in one day. Fantastic service!"</p>
              <p className="font-bold font-heading uppercase tracking-wide text-primary">- Mark & Lisa T., O'Fallon, IL</p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none"></div>
            <h3 className="font-heading font-bold text-2xl mb-4 relative z-10">Live in O'Fallon?</h3>
            <p className="mb-6 relative z-10 text-primary-foreground/90">We're in your neighborhood regularly. Contact us for a quick and easy estimate.</p>
            <Link href="/#contact">
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase relative z-10">
                Get Estimate
              </Button>
            </Link>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="font-heading font-bold text-xl text-primary mb-4">Nearby Areas</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/service-areas/edwardsville-il-handyman/"><span className="hover:text-secondary cursor-pointer">Edwardsville, IL</span></Link></li>
              <li><Link href="/service-areas/"><span className="hover:text-secondary cursor-pointer">Shiloh, IL</span></Link></li>
              <li><Link href="/service-areas/"><span className="hover:text-secondary cursor-pointer">Fairview Heights, IL</span></Link></li>
              <li><Link href="/service-areas/"><span className="hover:text-secondary cursor-pointer">Belleville, IL</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
