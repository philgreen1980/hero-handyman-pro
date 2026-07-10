import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Shield, 
  CheckCircle2, 
  Phone,
  Star,
  MapPin
} from "lucide-react";
import { Link } from "wouter";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function HandymanServicePackages() {
  const seo = useSeoRoute();
  const packages = [
    {
      icon: Home,
      title: "New Home Peace of Mind Package",
      microGuide: "Best for recent movers",
      valueAnchor: "Individually priced services often total $900+",
      pricing: {
        main: "$699",
        label: "Flat-Rate Package",
        memberSavings: "Hero Handyman Pro Members Save $100"
      },
      description: "Moving into a new home often means a long list of installs and small fixes. This package takes care of the most common move-in needs in one convenient visit.",
      whoItsFor: ["New homeowners", "Recent movers", "Realtors and property managers"],
      included: [
        "TV mounting (1 standard TV)",
        "Ceiling fan or light fixture installation (1)",
        "Smoke and carbon monoxide detector check (replace up to 3 units if provided)",
        "Door and hardware adjustments",
        "Minor drywall repairs (nail holes and small dings)"
      ],
      whyLoveIt: [
        "One visit handles the most common new-home tasks",
        "No surprise pricing",
        "Faster setup and peace of mind"
      ],
      ctaText: "Schedule New Home Package",
      ctaLink: "/booking"
    },
    {
      icon: Shield,
      title: "Home Care & Safety Check",
      microGuide: "Best for long-term homeowners",
      valueAnchor: "Preventative care saves hundreds in future repairs",
      pricing: {
        main: "$249",
        label: "Starting at",
        memberPrice: "$199",
        memberLabel: "Member Price"
      },
      description: "A preventative handyman visit designed to catch small issues early, improve safety, and help avoid costly repairs down the road.",
      whoItsFor: ["Long-time homeowners", "Busy professionals", "Seniors", "Landlords between tenants"],
      included: [
        "Door, lock, and hinge inspection and adjustments",
        "GFCI and outlet safety check",
        "Smoke and CO detector testing",
        "Faucet, toilet, and visible plumbing leak check",
        "Bathroom and kitchen caulking inspection",
        "Ceiling fan and light fixture safety check",
        "Basic drywall and trim inspection",
        "Written list of recommendations (no pressure)"
      ],
      whyLoveIt: [
        "Preventative peace of mind",
        "No-pressure recommendations",
        "Helps avoid expensive repairs"
      ],
      ctaText: "Book a Safety Check",
      ctaLink: "/booking"
    },
    {
      icon: CheckCircle2,
      title: "Honey-Do List Knockout",
      microGuide: "Best for multiple small projects",
      valueAnchor: "Individual handyman visits often cost $150+ per task",
      mostPopular: true,
      pricing: {
        tiers: [
          { tasks: "3 Tasks", price: "$299" },
          { tasks: "5 Tasks", price: "$499", popular: true },
          { tasks: "8 Tasks", price: "$699" }
        ],
        memberSavings: "Members Save $50–$100"
      },
      description: "Knock out multiple small home projects in one efficient visit with simple, upfront pricing.",
      whoItsFor: ["Busy homeowners", "Couples and families", "Seniors", "Anyone with a growing to-do list"],
      included: [
        "Up to 5 small handyman tasks",
        "Each task must take 30 minutes or less",
        "Completed in one scheduled visit",
        "Professional, insured handyman service"
      ],
      commonTasks: [
        "Light fixture or ceiling fan replacement",
        "Faucet or showerhead installation",
        "Drywall patching and nail hole repair",
        "Door and cabinet adjustments",
        "Shelves, blinds, or curtain rod installs",
        "Outlet, switch, or cover plate replacement",
        "TV, mirror, or artwork mounting"
      ],
      notIncluded: [
        "Large drywall or plaster repairs",
        "Tile or structural work",
        "Plumbing or electrical work requiring permits"
      ],
      whyLoveIt: [
        "No item-by-item estimates",
        "One visit instead of multiple appointments",
        "Predictable pricing"
      ],
      ctaText: "Clear My To-Do List",
      ctaLink: "/booking"
    }
  ];

  return (
    <>
      <SEO {...seo} />
      
      <LocalBusinessSchema 
        pageUrl="https://herohandymanpro.com/handyman-service-packages"
        city="St. Louis"
        state="MO"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Handyman Service Packages — Flat-Rate Pricing from $249
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-teal-50">
              Stop paying per-trip rates. Hero Handyman Pro's flat-rate service packages bundle your most common home repairs into one affordable visit — starting at $249 for homeowners across St. Louis and Metro East Illinois.
            </p>
            <p className="text-lg mb-8 text-teal-100">
              New home move-in, honey-do list, safety inspection, or membership plan — clear pricing, no surprises, same-day availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold text-lg h-14 px-8">
                  Book a Package
                </Button>
              </Link>
              <a href="tel:800-741-6056">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold text-lg h-14 px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 800-741-6056
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          {/* Trust Reinforcement */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 flex items-center justify-center gap-6 flex-wrap">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <strong>4.9-star rated</strong>
              </span>
              <span className="text-gray-400">•</span>
              <span><strong>Locally owned</strong></span>
              <span className="text-gray-400">•</span>
              <span><strong>Insured & professional</strong></span>
            </p>
            <p className="text-sm text-gray-600 mt-3">*Materials not included unless otherwise stated.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className="flex flex-col h-full border-t-4 border-t-teal-600 hover:shadow-xl transition-shadow relative">
                  {pkg.mostPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm shadow-md">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="bg-teal-100 p-4 rounded-full w-fit mb-6">
                      <IconComponent className="w-8 h-8 text-teal-700" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{pkg.title}</h2>
                    <p className="text-sm text-teal-700 font-medium italic mb-4">{pkg.microGuide}</p>
                    
                    {/* Value Anchor */}
                    <p className="text-sm text-gray-600 mb-4 bg-gray-100 px-3 py-2 rounded-md border border-gray-200">
                      💡 {pkg.valueAnchor}
                    </p>
                    
                    {/* Pricing Section */}
                    <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 mb-6">
                      {pkg.pricing.tiers ? (
                        // Tiered pricing for Honey-Do List
                        <div className="space-y-3">
                          {pkg.pricing.tiers.map((tier: any, i: number) => (
                            <div key={i} className={`flex justify-between items-center ${tier.popular ? 'bg-teal-600 text-white px-4 py-3 rounded-md -mx-2' : ''}`}>
                              <span className={`font-semibold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                                {tier.tasks}
                                {tier.popular && <span className="ml-2 text-xs bg-amber-400 text-gray-900 px-2 py-1 rounded-full">Most Popular</span>}
                              </span>
                              <span className={`text-2xl font-bold ${tier.popular ? 'text-white' : 'text-teal-700'}`}>{tier.price}</span>
                            </div>
                          ))}
                          <p className="text-teal-700 font-semibold text-center mt-4">⭐ {pkg.pricing.memberSavings}</p>
                        </div>
                      ) : (
                        // Simple or starting pricing
                        <div className="text-center">
                          <p className="text-gray-700 text-sm mb-2">{pkg.pricing.label}</p>
                          <p className="text-4xl font-bold text-teal-700 mb-3">{pkg.pricing.main}</p>
                          {pkg.pricing.memberPrice && (
                            <p className="text-teal-700 font-semibold mb-2">⭐ {pkg.pricing.memberLabel}: {pkg.pricing.memberPrice}</p>
                          )}
                          {pkg.pricing.memberSavings && (
                            <p className="text-teal-700 font-semibold">⭐ {pkg.pricing.memberSavings}</p>
                          )}
                        </div>
                      )}
                      <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                        *Pricing applies to qualifying tasks and standard installations. Materials not included. Some restrictions apply. Final confirmation occurs before work begins.
                      </p>
                      <Link href="/membership/" className="block mt-3">
                        <p className="text-sm text-teal-700 font-medium hover:underline text-center">
                          Membership often pays for itself on the first visit. →
                        </p>
                      </Link>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">Who This Is For:</h3>
                      <ul className="space-y-2">
                        {pkg.whoItsFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {pkg.included.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {pkg.commonTasks && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-3">Common Tasks:</h3>
                        <ul className="space-y-2">
                          {pkg.commonTasks.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <span className="text-teal-600 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {pkg.notIncluded && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-3">What's Not Included:</h3>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <span className="text-gray-400 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    

                    
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 mb-3">Why Homeowners Love It:</h3>
                      <ul className="space-y-2">
                        {pkg.whyLoveIt.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 fill-current" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <Link href={pkg.ctaLink}>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 text-lg">
                          {pkg.ctaText}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Save More with the Hero Handyman Pro Membership
            </h2>
            <p className="text-xl mb-8 text-teal-50">
              Members receive priority scheduling, discounted package pricing, and added convenience on every visit. In many cases, the membership pays for itself on the first service call.
            </p>
            <Link href="/membership/">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold text-lg h-14 px-8">
                View Membership Benefits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-teal-100 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-teal-700" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Serving Homeowners Near You
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Hero Handyman Pro proudly provides professional handyman services to homeowners in the Greater St. Louis area and Metro East Illinois. Fast response times, clear pricing, and dependable workmanship you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/service-areas/ofallon-il-handyman">
                <Button variant="outline" className="rounded-full">O'Fallon, IL</Button>
              </Link>
              <Link href="/gbp/edwardsville-il/">
                <Button variant="outline" className="rounded-full">Edwardsville, IL</Button>
              </Link>
              <Link href="/service-areas/st-louis-mo-handyman">
                <Button variant="outline" className="rounded-full">St. Louis, MO</Button>
              </Link>
              <Link href="/service-areas/">
                <Button variant="outline" className="rounded-full">View All Areas</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Not Sure Which Package Is Right for You?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our team is happy to help you choose the best option for your home and your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg h-14 px-8">
                  Book Online
                </Button>
              </Link>
              <a href="tel:800-741-6056">
                <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-bold text-lg h-14 px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 800-741-6056
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
