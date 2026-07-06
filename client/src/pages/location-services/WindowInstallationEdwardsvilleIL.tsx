import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Clock, Shield, Star, Thermometer, Wind, DollarSign } from "lucide-react";
import SEO from "@/components/SEO";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import { useSeoRoute } from '@/hooks/useSeoRoute';

export default function WindowInstallationEdwardsvilleIL() {
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
              Window Installation in Edwardsville, IL
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Energy-efficient replacement windows for Edwardsville homeowners. Reduce drafts, lower energy bills, and improve your home's appearance. Free estimates, same-week scheduling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
                  onClick={() => trackCTAClick('Get Free Quote', 'Window Installation Edwardsville - Hero CTA')}
                >
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Window Installation Edwardsville Hero')}>
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
                <h2 className="text-3xl font-bold text-primary mb-4">Window Installation in Edwardsville, IL</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Edwardsville has a mix of housing stock that spans several decades — from mid-century ranches near downtown to newer construction in subdivisions along Troy Road and Route 157. Older homes often have original wood-frame windows that have long since lost their seal, while newer homes sometimes have builder-grade windows that underperform in Madison County's climate extremes. In both cases, replacement windows deliver a meaningful improvement in comfort and energy efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hero Handyman Pro installs replacement windows throughout Edwardsville (62025) and the surrounding Madison County communities. Phil handles the complete installation — measuring the existing rough opening, removing the old window and disposing of it, preparing the frame, installing the new unit with proper shimming and flashing, insulating the cavity, and finishing the interior and exterior trim. The result is a tight, weatherproof installation that performs correctly from day one.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The estimate is free and comes with no obligation. Phil will assess each window, note any frame damage or rot that needs to be addressed before installation, and give you a written quote covering materials, labor, and cleanup. Most Edwardsville window installations are completed in a single day.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Common Reasons Edwardsville Homeowners Replace Windows</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <Thermometer className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Rising Energy Bills</h3>
                      <p className="text-sm text-muted-foreground">Failed window seals and single-pane glass are among the most common causes of high heating and cooling costs in Edwardsville homes. Modern double-pane Low-E windows significantly reduce heat transfer, and most homeowners see a noticeable reduction in their Ameren Illinois bills within the first season.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <Wind className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Drafts and Condensation</h3>
                      <p className="text-sm text-muted-foreground">If you can feel cold air near a closed window or see condensation forming between the panes of a double-pane unit, the seal has failed. Resealing is rarely effective long-term — replacement is the right fix. Vinyl frames maintain a consistent seal through Madison County's freeze-thaw cycles without warping or painting.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/20 rounded-lg">
                    <DollarSign className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Preparing to Sell</h3>
                      <p className="text-sm text-muted-foreground">Updated windows consistently appear on home inspection reports as a positive feature and remove a common buyer objection. For Edwardsville homeowners listing with a realtor, new windows are one of the few improvements that show up clearly in both the appraisal and the buyer's first impression.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Window Types We Install in Edwardsville</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most common replacement in Edwardsville homes is the double-hung window — both sashes tilt in for easy cleaning, and they're available in a wide range of sizes to fit existing rough openings without structural modification. For homes with casement, sliding, or picture windows, Phil sources and installs the appropriate replacement to match the existing style and opening size.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For homeowners interested in bay windows, bow windows, or specialty shapes, Phil can handle those installations as well. These projects typically require more lead time for ordering and may involve minor framing work, which will be detailed in the written estimate before any work begins.
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
                <h3 className="font-bold text-xl mb-4">Get a Free Window Estimate</h3>
                <p className="text-primary-foreground/90 text-sm mb-6">Tell us how many windows and we'll provide a clear, written quote — no pressure, no obligation.</p>
                <Link href="/contact/">
                  <Button
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                    onClick={() => trackCTAClick('Get Free Quote', 'Window Installation Edwardsville - Sidebar CTA')}
                  >
                    Request Estimate
                  </Button>
                </Link>
                <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Window Installation Edwardsville Sidebar')}>
                  <Button variant="outline" className="w-full mt-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Phone className="w-4 h-4 mr-2" /> 800-741-6056
                  </Button>
                </a>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg text-primary mb-4">Installation Includes</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Measure existing rough openings",
                    "Remove and haul away old windows",
                    "Frame preparation and leveling",
                    "New window installation with shimming",
                    "Proper flashing and weatherproofing",
                    "Insulation of frame cavity",
                    "Interior and exterior trim finishing",
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
                  <li><Link href="/handyman-services/window-installation/"><span className="text-primary hover:underline cursor-pointer">Window Installation Services</span></Link></li>
                  <li><Link href="/services/doors-windows/"><span className="text-primary hover:underline cursor-pointer">Door Installation & Repair</span></Link></li>
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
            Ready to Replace Your Windows in Edwardsville?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free, written estimate. Phil responds within 24 hours and most installations are completed in a single day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
                onClick={() => trackCTAClick('Get Free Quote', 'Window Installation Edwardsville - Bottom CTA')}
              >
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:800-741-6056" onClick={() => trackPhoneClick('800-741-6056', 'Window Installation Edwardsville Bottom')}>
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
