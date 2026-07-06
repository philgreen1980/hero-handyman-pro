import { Link } from 'wouter';
import { FileText, CheckSquare, Download, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function GuideLanding() {
  const seo = useSeoRoute();
  return (
    <>
      <SEO {...seo} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Handyman Website in Days, Not Months
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50">
              A complete, step-by-step guide to creating an SEO-optimized website with Google Business Profile landing pages for your handyman or remodeling business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guide/complete">
                <a className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                  Read Complete Guide
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <Link href="/guide/checklist">
                <a className="inline-flex items-center gap-2 bg-teal-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-900 transition-colors border-2 border-white">
                  Get Quick-Start Checklist
                  <CheckSquare className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Information Gathering</h3>
                <p className="text-gray-600">
                  Learn exactly what business information, photos, testimonials, and data you need to collect before starting your website project.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Prompts</h3>
                <p className="text-gray-600">
                  Get 9 copy-and-paste prompts to use with AI website builders like Manus to create your complete website step-by-step.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">GBP Landing Pages</h3>
                <p className="text-gray-600">
                  Create location-specific landing pages with interactive maps, testimonials, and schema markup for each Google Business Profile.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
                <p className="text-gray-600">
                  Implement email capture forms, downloadable lead magnets, and an admin dashboard to manage and export your leads.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                <p className="text-gray-600">
                  Add meta descriptions, Open Graph tags, XML sitemaps, and schema markup to rank in Google search results.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Success Metrics</h3>
                <p className="text-gray-600">
                  Track the right KPIs to measure your website's performance and identify opportunities for improvement.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Business Profile</h3>
                <p className="text-gray-600">
                  Set up and optimize your Google Business Profile with photos, reviews, posts, and NAP consistency for maximum local visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gather Information</h3>
                  <p className="text-gray-600">
                    Use our comprehensive checklist to collect all business details, Google Business Profile data, services, testimonials, and photos before starting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Your Website</h3>
                  <p className="text-gray-600">
                    Follow the 9 sequential AI prompts to create your homepage, service pages, GBP landing pages, lead generation system, and SEO optimization.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch and Optimize</h3>
                  <p className="text-gray-600">
                    Submit your sitemap to Google Search Console, update your GBP listings, set up analytics, and monitor performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/guide/gbp-audit">
                <a className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckSquare className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">GBP Audit Checklist</h3>
                      <p className="text-gray-600">
                        Comprehensive checklist to audit your Google Business Profile and ensure it's fully optimized for maximum visibility.
                      </p>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/guide/review-templates">
                <a className="block p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Review Response Templates</h3>
                      <p className="text-gray-600">
                        15 professional templates for responding to positive, neutral, and negative Google reviews quickly and professionally.
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with our quick-start checklist to gather all the information you need, then dive into the complete guide for step-by-step instructions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guide/checklist">
                <a className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  <CheckSquare className="w-5 h-5" />
                  Start with Checklist
                </a>
              </Link>
              <Link href="/guide/complete">
                <a className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <FileText className="w-5 h-5" />
                  Read Full Guide
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
