import { Link } from 'wouter';
import { Phone, MapPin, Star, Clock, Shield, Award, CheckCircle, Wrench, DoorOpen, TreePine, Hammer, Zap, Home } from 'lucide-react';
import { SetPagePhone } from '@/contexts/PhoneContext';
import { Button } from '@/components/ui/button';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { SeasonalPromoBanner } from '@/components/SeasonalPromoBanner';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { LocationFAQ } from '@/components/LocationFAQ';
import SEO from '@/components/SEO';
import LazyProjectGallery from '@/components/LazyProjectGallery';
import type { ProjectPair } from '@/components/ProjectGallery';
import { useSeoRoute } from '@/hooks/useSeoRoute';
const desperesProjects: ProjectPair[] = [
  {
    beforeSrc: "/images/door-before-stcharles.webp",
    afterSrc: "/images/door-after-stcharles.webp",
    beforeAlt: "Old damaged front door with peeling paint and torn weatherstripping – West St. Louis County",
    afterAlt: "New navy blue fiberglass front door with sidelights installed – West St. Louis County",
    caption: "Front door replacement",
    city: "West St. Louis County",
  },
  {
    beforeSrc: "/images/drywall-before-stlouis.webp",
    afterSrc: "/images/drywall-after-stlouis.webp",
    beforeAlt: "Water-damaged ceiling with large brown stain and cracked drywall – West St. Louis MO",
    afterAlt: "Repaired and freshly painted ceiling, smooth and stain-free – West St. Louis MO",
    caption: "Water-damaged ceiling drywall repair",
    city: "West St. Louis, MO",
  },
  {
    beforeSrc: "/images/carpentry-before-belleville.webp",
    afterSrc: "/images/carpentry-after-belleville.webp",
    beforeAlt: "Damaged door casing trim with peeling paint – Chesterfield MO area",
    afterAlt: "Freshly repaired and painted door casing trim – Chesterfield MO area",
    caption: "Interior trim & carpentry repair",
    city: "Chesterfield, MO",
  },
];

const services = [
  {
    icon: <Wrench className="w-7 h-7 text-[#E85818]" />,
    title: "Drywall Repair",
    description: "Patches, holes, water damage, and texture matching for walls and ceilings throughout your West St. Louis home.",
    link: "/drywall-repair",
    linkText: "drywall repair services",
  },
  {
    icon: <DoorOpen className="w-7 h-7 text-[#E85818]" />,
    title: "Door Repair & Installation",
    description: "Entry doors, interior doors, and patio doors repaired or replaced with proper fit, weatherstripping, and hardware.",
    link: "/door-installation",
    linkText: "door repair and installation",
  },
  {
    icon: <TreePine className="w-7 h-7 text-[#E85818]" />,
    title: "Deck Repair",
    description: "Rotted boards, loose railings, and structural issues repaired to keep your deck safe and looking its best.",
    link: "/handyman-services/deck-repair/",
    linkText: "deck repair",
  },
  {
    icon: <Hammer className="w-7 h-7 text-[#E85818]" />,
    title: "Trim Carpentry",
    description: "Baseboards, crown molding, door casings, and window trim installed or replaced with clean, precise results.",
    link: "/handyman-services",
    linkText: "carpentry services",
  },
  {
    icon: <Zap className="w-7 h-7 text-[#E85818]" />,
    title: "Ceiling Fan & Light Fixture Installation",
    description: "Ceiling fans, light fixtures, and basic electrical fixtures installed safely and correctly in any room.",
    link: "/handyman-services",
    linkText: "fixture installation",
  },
  {
    icon: <Home className="w-7 h-7 text-[#E85818]" />,
    title: "General Home Repairs",
    description: "From squeaky doors to damaged trim, we handle the everyday repairs that keep your home in top condition.",
    link: "/handyman-near-me",
    linkText: "handyman near you",
  },
  {
    icon: <Award className="w-7 h-7 text-[#E85818]" />,
    title: "Small Remodeling Projects",
    description: "Bathroom updates, laundry room improvements, and small room refreshes handled with professional-grade workmanship.",
    link: "/handyman-services",
    linkText: "remodeling services",
  },
];

const trustPoints = [
  {
    icon: <CheckCircle className="w-6 h-6 text-[#E85818]" />,
    title: "Clear Communication",
    desc: "We explain the work before we start, keep you updated throughout, and make sure you are satisfied before we leave.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#E85818]" />,
    title: "Dependable Scheduling",
    desc: "We show up when we say we will. No vague windows, no last-minute cancellations.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#E85818]" />,
    title: "Professional Workmanship",
    desc: "35+ years of experience means your repairs are done right the first time, with attention to detail that shows.",
  },
  {
    icon: <Home className="w-6 h-6 text-[#E85818]" />,
    title: "Respect for Your Home",
    desc: "We treat your home as if it were our own — clean work areas, careful handling, and no shortcuts.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#E85818]" />,
    title: "Fully Insured",
    desc: "Hero Handyman Pro carries full general liability insurance for your protection and peace of mind.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#E85818]" />,
    title: "Fast Response for Small & Mid-Size Repairs",
    desc: "We specialize in the projects other contractors turn down — quick repairs, honey-do lists, and single-trade jobs.",
  },
];

export default function GBPDesPeres() {
  const seo = useSeoRoute();
  return (
    <div className="min-h-screen">
      <SetPagePhone phone="314-931-3732" display="(314) 931-3732" />
      <SEO {...seo} />

      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-[#E85818] via-[#D42408] to-[#C01800] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Serving West St. Louis County</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Handyman Services in West St. Louis, MO
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-orange-50">
              Fast, reliable home repairs for homeowners in Chesterfield, Ballwin, Des Peres, Wildwood, Town and Country, Kirkwood, and nearby West St. Louis communities. Small jobs welcome.
            </p>

            <p className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto">
              Hero Handyman Pro provides professional{' '}
              <Link href="/handyman-services/" className="underline underline-offset-2 hover:text-white">
                handyman services
              </Link>{' '}
              for drywall repair, door repair, deck repair, carpentry, fixture installation, and general home repairs throughout West St. Louis County. Our team makes home repair simple with clear communication, dependable scheduling, and quality workmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/#contact?city=West+St.+Louis">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  Get a Free Quote
                </Button>
              </Link>

              <a href="tel:314-931-3732">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (314) 931-3732
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-yellow-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.8 Stars</span>
              <span className="text-orange-100">(60+ Google Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Promotion Banner ── */}
      <section className="py-8 bg-white">
        <div className="container">
          <SeasonalPromoBanner
            city="West St. Louis"
            promotion={{
              title: "Spring Special: Deck & Exterior Repairs",
              description: "Get your deck and exterior ready for spring! Free inspection included with any deck repair or exterior carpentry service.",
              discount: "15% OFF",
              validUntil: "June 30, 2026"
            }}
          />
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#E85818]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">35+ Years Experience</h3>
              <p className="text-gray-600">Trusted expertise in home repairs</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Immediate Response</h3>
              <p className="text-gray-600">We strive to respond the same day</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#E85818]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Top-Rated Service</h3>
              <p className="text-gray-600">4.8-star Google rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Handyman Services for West St. Louis Homes
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From quick repairs to small remodeling projects, we handle the work that keeps your home safe, functional, and looking its best.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((svc, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="mb-3">{svc.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{svc.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{svc.description}</p>
                  <Link href={svc.link} className="text-[#E85818] hover:text-[#E85818] text-sm font-medium underline underline-offset-2">
                    {svc.linkText} →
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/#contact?city=West+St.+Louis">
                <Button size="lg" className="bg-[#E85818] hover:bg-[#E85818] text-white">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area Section ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              West St. Louis Service Areas
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We serve homeowners across West St. Louis County, including Chesterfield, Ballwin, Des Peres, Wildwood, Town and Country, Kirkwood, Ellisville, Creve Coeur, and surrounding communities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <Link href="/handyman-chesterfield-mo">
                <div className="bg-white border border-orange-200 rounded-lg py-3 px-4 text-[#E85818] font-semibold text-sm shadow-sm hover:border-[#E85818] hover:shadow-md transition-all cursor-pointer">
                  Chesterfield
                </div>
              </Link>
              <Link href="/handyman-ballwin-mo">
                <div className="bg-white border border-orange-200 rounded-lg py-3 px-4 text-[#E85818] font-semibold text-sm shadow-sm hover:border-[#E85818] hover:shadow-md transition-all cursor-pointer">
                  Ballwin
                </div>
              </Link>
              {[
                "Des Peres",
                "Wildwood",
                "Town and Country",
                "Kirkwood",
                "Ellisville",
                "Creve Coeur",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-white border border-orange-100 rounded-lg py-3 px-4 text-gray-800 font-medium text-sm shadow-sm"
                >
                  {city}
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-10 text-sm">
              Not sure if we cover your area?{' '}
              <a href="tel:314-931-3732" className="text-[#E85818] hover:text-[#E85818] font-medium">
                Call (314) 931-3732
              </a>{' '}
              and we'll let you know right away.
            </p>

            {/* Service Area Map */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Service Coverage Area</h3>
              <p className="text-gray-600 mb-6">
                We proudly serve Des Peres and the surrounding 15-mile radius in West St. Louis County.
              </p>
              <ServiceAreaMap
                center={{ lat: 38.5989, lng: -90.4324 }}
                radiusMiles={15}
                locationName="Hero Handyman Pro – West St. Louis"
                height="500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Before/After Project Gallery ── */}
      <LazyProjectGallery
        projects={desperesProjects}
        title="Recent Projects in West St. Louis"
        subtitle="Before-and-after results from homes in Chesterfield, Des Peres, Kirkwood, and surrounding West County communities."
      />

      {/* ── Why West St. Louis Homeowners Choose Us ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why West St. Louis Homeowners Choose Hero Handyman Pro
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We built this business on the belief that home repairs should be simple, honest, and done right. Here is what that looks like in practice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 mt-0.5">{point.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                Ready to work with a handyman you can count on? Explore our{' '}
                <Link href="/handyman-services/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                  handyman services
                </Link>{' '}
                or find a{' '}
                <Link href="/handyman-near-me/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                  handyman near you
                </Link>.
              </p>
              <Link href="/#contact?city=West+St.+Louis">
                <Button size="lg" className="bg-[#E85818] hover:bg-[#E85818] text-white">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What West St. Louis Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Real reviews from homeowners in Chesterfield, Kirkwood, Ballwin, and surrounding communities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Phil and his team did an amazing job repairing our deck. They were professional, on time, and the quality of work exceeded our expectations. Highly recommend for anyone in West County!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Jennifer M.</p>
                  <p className="text-sm text-gray-600">Chesterfield, MO</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "We needed several doors repaired and new trim installed in our Kirkwood home. Hero Handyman Pro was responsive, fair-priced, and did excellent work. Will definitely use them again."
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Robert K.</p>
                  <p className="text-sm text-gray-600">Kirkwood, MO</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Outstanding service from start to finish. They fixed our drywall damage and painted our living room. Clean, efficient, and the results look great. Best handyman service in West County!"
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">Susan T.</p>
                  <p className="text-sm text-gray-600">Ballwin, MO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internal Links / Related Pages ── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore more:{' '}
              <Link href="/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                Hero Handyman Pro home
              </Link>{' '}
              ·{' '}
              <Link href="/handyman-services/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                handyman services
              </Link>{' '}
              ·{' '}
              <Link href="/handyman-near-me/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                handyman near you
              </Link>{' '}
              ·{' '}
              <Link href="/handyman-services/drywall-repair/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                drywall repair services
              </Link>{' '}
              ·{' '}
              <Link href="/gbp/des-peres-mo/" className="text-[#E85818] hover:text-[#E85818] underline underline-offset-2">
                Des Peres handyman services
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <LocationFAQ
        city="West St. Louis"
        faqs={[
          {
            question: "Do you serve Chesterfield, Ballwin, and other West County communities?",
            answer: "Yes. We serve all of West St. Louis County including Chesterfield, Ballwin, Des Peres, Wildwood, Town and Country, Kirkwood, Ellisville, Creve Coeur, and surrounding areas within our 15-mile service radius."
          },
          {
            question: "What's your typical response time for West St. Louis jobs?",
            answer: "We strive to respond to all inquiries the same day during business hours. For smaller repairs, we can often schedule same-week or next-week appointments. Call (314) 931-3732 for the fastest response."
          },
          {
            question: "Do you offer free estimates for West St. Louis projects?",
            answer: "Absolutely. We provide free, no-obligation estimates for all projects in West St. Louis County. Call us at (314) 931-3732 or fill out our contact form and we will schedule a convenient time to assess your project."
          },
          {
            question: "Are you licensed and insured to work in West St. Louis County?",
            answer: "Yes. Hero Handyman Pro is fully insured with general liability coverage for all work performed throughout West St. Louis County, including Chesterfield, Ballwin, Des Peres, and Kirkwood."
          },
          {
            question: "What types of home repairs do you handle in West County?",
            answer: "We handle drywall repair, door repair and installation, deck repair, trim carpentry, ceiling fan and light fixture installation, general home repairs, and small remodeling projects. If you are unsure whether we cover your specific job, just call and ask."
          },
          {
            question: "How far in advance should I schedule a project in West St. Louis?",
            answer: "For smaller repairs and handyman services, we can often accommodate same-week or next-week appointments. For larger projects, we recommend scheduling 2–3 weeks in advance. Contact us as soon as you know your timeline."
          }
        ]}
      />

      {/* ── Internal Links Section ── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Nearby Handyman Service Pages</h2>
            <p className="text-gray-600 mb-6">
              Looking for handyman services in a specific West St. Louis community? We have dedicated pages for our most-requested areas.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/handyman-ballwin-mo">
                <Button variant="outline" className="rounded-full border-orange-300 text-[#E85818] hover:bg-orange-50">
                  Ballwin handyman services
                </Button>
              </Link>
              <Link href="/handyman-chesterfield-mo">
                <Button variant="outline" className="rounded-full border-orange-300 text-[#E85818] hover:bg-orange-50">
                  Handyman in Chesterfield MO
                </Button>
              </Link>
              <Link href="/handyman-near-me/">
                <Button variant="outline" className="rounded-full border-orange-300 text-[#E85818] hover:bg-orange-50">
                  Handyman near me
                </Button>
              </Link>
              <Link href="/handyman-services/">
                <Button variant="outline" className="rounded-full border-orange-300 text-[#E85818] hover:bg-orange-50">
                  All handyman services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schema Markup ── */}
      <LocalBusinessSchema
        city="Des Peres"
        state="MO"
        pageUrl="/gbp/des-peres-mo/"
        phone="+1-314-931-3732"
      />

      {/* ── Final CTA Section ── */}
      <section className="py-16 bg-gradient-to-br from-[#E85818] to-[#D42408] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Have a small repair or punch-list project? Call Hero Handyman Pro at (314) 931-3732 or request a free quote. Reliable handyman service with same-week availability when possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact?city=West+St.+Louis">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  Get a Free Quote
                </Button>
              </Link>
              <a href="tel:314-931-3732">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (314) 931-3732
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
