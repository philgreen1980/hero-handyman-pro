import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "/services/" },
    { label: "Packages", href: "/handyman-service-packages" },
    { label: "Why Choose Us", href: "/about/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Handyman Near Me", href: "/handyman-near-me" },
    { label: "Reviews", href: "/reviews/" },
    { label: "Partners", href: "/trusted-local-partners/" },
    { label: "Membership", href: "/membership/" },
    { label: "Get a Free Quote", href: "/contact/" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container max-w-[1120px] mx-auto px-6 flex items-center justify-between h-16 gap-6">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-teal-700">
                <img src="/phil-green.jpg" alt="Phil Green - Hero Handyman Pro" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide">Hero Handyman Pro</span>
                <span className="text-xs text-gray-500">Trusted Local Handyman Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                <span className="text-sm font-medium text-gray-600 hover:text-teal-800 transition-colors cursor-pointer">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm">
              <a href="tel:800-741-6056" className="font-semibold text-teal-800 hover:text-teal-900">
                Call Now: 800-741-6056
              </a>
            </span>
            <a href="/contact/">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-5 text-sm">
                Get a Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <span className="text-lg font-medium text-gray-700 hover:text-teal-800 transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </a>
                ))}
                <div className="text-sm mt-4">
                  <a href="tel:800-741-6056" className="font-semibold text-teal-800">
                    Call Now: 800-741-6056
                  </a>
                </div>
                <a href="/contact/" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-full">
                    Get a Free Quote
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-6 mt-6">
        <div className="container max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* Column 1: About */}
            <div>
              <div className="text-gray-200 font-semibold mb-2">Hero Handyman Pro</div>
              <p className="text-gray-400 mb-3 text-sm">
                Trusted handyman and home repair services for St. Louis & Metro East. We show up, do it right, and treat
                your home with respect.
              </p>
              <p className="text-xs text-gray-500">
                <strong className="text-gray-400">Serving:</strong> St. Louis, MO & Metro East Illinois<br />
                <strong className="text-gray-400">Phone:</strong> <a href="tel:800-741-6056" className="hover:text-gray-300">800-741-6056</a><br />
                <strong className="text-gray-400">Email:</strong> <a href="mailto:info@herohandymanpro.com" className="hover:text-gray-300">info@herohandymanpro.com</a><br />
                <strong className="text-gray-400">Hours:</strong> Mon–Fri 8:00 AM – 5:00 PM
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <div className="text-gray-200 font-semibold mb-2">Services</div>
              <div className="space-y-1">
                <Link href="/handyman-services/" className="block hover:text-gray-300 transition-colors">
                  All Services
                </Link>
                <Link href="/deck-repair" className="block hover:text-gray-300 transition-colors">
                  Deck Repair
                </Link>
                <Link href="/drywall-repair" className="block hover:text-gray-300 transition-colors">
                  Drywall Repair
                </Link>
                <Link href="/door-installation" className="block hover:text-gray-300 transition-colors">
                  Door Installation
                </Link>
                <Link href="/carpentry-services" className="block hover:text-gray-300 transition-colors">
                  Carpentry Services
                </Link>
              </div>
            </div>
            
            {/* Column 3: Resources */}
            <div>
              <div className="text-gray-200 font-semibold mb-2">Resources</div>
              <div className="space-y-1">
                <Link href="/handyman-near-me" className="block hover:text-gray-300 transition-colors">
                  Handyman Near Me
                </Link>
                <Link href="/trusted-local-partners/" className="block hover:text-gray-300 transition-colors">
                  Trusted Partners
                </Link>
                <Link href="/about/" className="block hover:text-gray-300 transition-colors">
                  About Hero Handyman Pro
                </Link>
                <Link href="/reviews/" className="block hover:text-gray-300 transition-colors">
                  Customer Reviews
                </Link>
              </div>
            </div>
            
            {/* Column 4: Company */}
            <div>
              <div className="text-gray-200 font-semibold mb-2">Company</div>
              <div className="space-y-1.5">
                <Link href="/handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">General Handyman</span>
                </Link>
                <Link href="/handyman-services/deck-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Deck & Carpentry Repairs</span>
                </Link>
                <Link href="/handyman-services/door-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Door Repair & Replacement</span>
                </Link>
                <Link href="/handyman-services/drywall-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Drywall & Ceiling Repair</span>
                </Link>
                <Link href="/handyman-services/ceiling-fan-installation/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Ceiling Fan Installation</span>
                </Link>
                <Link href="/handyman-services/faucet-install-and-repair/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Faucets, Sinks & Toilets</span>
                </Link>
              </div>
            </div>

            {/* Column 5: Service Areas */}
            <div>
              <div className="text-gray-200 font-semibold mb-2">Service Areas</div>
              <div className="space-y-1.5">
                <Link href="/service-areas/ofallon-handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">O'Fallon, IL</span>
                </Link>
                <Link href="/service-areas/edwardsville-handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Edwardsville, IL</span>
                </Link>
                <Link href="/service-areas/collinsville-handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Collinsville, IL</span>
                </Link>
                <Link href="/service-areas/belleville-handyman-services/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Belleville, IL</span>
                </Link>
                <Link href="/service-areas/st-louis-mo-handyman/">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">St. Louis, MO</span>
                </Link>
                <Link href="/handyman-chesterfield-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Chesterfield, MO</span>
                </Link>
                <Link href="/handyman-ballwin-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">Ballwin, MO</span>
                </Link>
                <Link href="/handyman-st-charles-mo">
                  <span className="text-gray-400 hover:text-gray-200 cursor-pointer block">St. Charles, MO</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-200 font-semibold text-sm">Ready to get started?</p>
              <p className="text-gray-500 text-xs">Call or request a quote — we respond fast.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:800-741-6056"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 text-sm font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                800-741-6056
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Rebrand Note */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-600 text-center">
            Hero Handyman Pro is the new name for Rapid Repair Pro. Same trusted team, same quality service.
          </div>

          {/* Footer Bottom */}
          <div className="mt-3 flex flex-wrap justify-between gap-4 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} Hero Handyman Pro. All rights reserved.</span>
            <span>Website content for informational purposes only. Call for current availability and pricing.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
