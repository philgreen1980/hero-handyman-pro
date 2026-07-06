import SEO from "@/components/SEO";

export default function About() {
  const seoData = {
    title: "About Hero Handyman Pro® | Local, Trusted Handyman Services",
    description: "Meet Hero Handyman Pro—built on craftsmanship, integrity, and reliable service. Learn how we protect your home and deliver dependable handyman solutions.",
    keywords: "about Hero Handyman Pro, local handyman, trusted handyman, handyman company",
    canonicalUrl: "https://herohandymanpro.com/about"
  };

  return (
    <div className="flex flex-col">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <span className="text-xs uppercase tracking-[0.18em] text-teal-700">About Us</span>
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">About Hero Handyman Pro</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Fast, reliable home repairs for St. Louis and Metro East homeowners — done right the first time.
          </p>
        </div>
      </section>

      {/* Meet Phil Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-teal-700">Meet Your Handyman</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">Phil Green</h2>
            <p className="text-gray-700 mb-4">
              Phil Green is the owner and lead craftsman behind Hero Handyman Pro. With over 30 years of hands-on experience in home repair, carpentry, and exterior work, Phil has built a reputation across the Metro East for showing up on time, doing the job right, and treating every home with the same care he'd give his own.
            </p>
            <p className="text-gray-700 mb-4">
              Phil previously built Rapid Repair Pro into one of the most trusted handyman services in the Metro East. Today that experience continues under the new name Hero Handyman Pro — same team, same values, same commitment to quality that homeowners in Edwardsville, O'Fallon, and the greater St. Louis area have relied on for years.
            </p>
            <p className="text-gray-700">
              Whether it's a leaky faucet, a rotted deck board, a sticky door, or a full exterior carpentry project, Phil brings the same level of professionalism and craftsmanship to every job — no matter the size.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-teal-700 shadow-lg">
              <img
                src="/phil-green.jpg"
                alt="Phil Green - Owner, Hero Handyman Pro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Why Homeowners Choose Hero Handyman Pro</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-teal-700 pl-5">
              <h3 className="font-bold text-gray-900 mb-2">On Time, Every Time</h3>
              <p className="text-gray-600 text-sm">We respect your schedule. When we say we'll be there, we're there — no waiting around, no last-minute cancellations.</p>
            </div>
            <div className="border-l-4 border-teal-700 pl-5">
              <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">You'll know exactly what the job costs before we start. No hidden fees, no surprises on the invoice.</p>
            </div>
            <div className="border-l-4 border-teal-700 pl-5">
              <h3 className="font-bold text-gray-900 mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600 text-sm">Every repair is done to last. We take pride in our work and stand behind it — because your home deserves more than a quick fix.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-teal-700 text-white">
        <div className="max-w-[1120px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            Call Phil directly or request a free quote online. Most jobs can be scheduled within 1–2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:800-741-6056" className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors">
              Call 800-741-6056
            </a>
            <a href="/contact/" className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
