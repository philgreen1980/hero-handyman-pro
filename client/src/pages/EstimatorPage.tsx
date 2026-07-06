import SEO from "@/components/SEO";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import EstimatorTool from "@/components/EstimatorTool";
import { Link } from "wouter";
import { ArrowLeft, DollarSign, Clock, Shield } from "lucide-react";

import { useSeoRoute } from '@/hooks/useSeoRoute';
// Structured data for Google's "Online Estimates" filter eligibility.
// Uses LocalBusiness + Service + Offer + PriceSpecification + EntryPoint pattern.
// Google scans for interactive estimate tools, visible price ranges, and
// structured pricing language — this JSON-LD provides the machine-readable signal.
const ESTIMATOR_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://herohandymanpro.com/#business",
      "name": "Hero Handyman Pro",
      "url": "https://herohandymanpro.com",
      "telephone": "+18007416056",
      "email": "info@herohandymanpro.com",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Check, Credit Card, Venmo, Zelle",
      "areaServed": [
        { "@type": "City", "name": "O'Fallon", "addressRegion": "IL" },
        { "@type": "City", "name": "Belleville", "addressRegion": "IL" },
        { "@type": "City", "name": "Edwardsville", "addressRegion": "IL" },
        { "@type": "City", "name": "Collinsville", "addressRegion": "IL" },
        { "@type": "City", "name": "Swansea", "addressRegion": "IL" },
        { "@type": "City", "name": "St. Louis", "addressRegion": "MO" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "O'Fallon",
        "addressRegion": "IL",
        "postalCode": "62269",
        "addressCountry": "US"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Free Online Project Estimate",
          "description": "Get an instant ballpark price range for your handyman project in under 2 minutes — no phone call required.",
          "url": "https://herohandymanpro.com/estimator/",
          "priceCurrency": "USD",
          "eligibleRegion": { "@type": "State", "name": "Illinois" },
          "availability": "https://schema.org/InStock",
          "priceSpecification": [
            { "@type": "PriceSpecification", "name": "Small Drywall Patch", "minPrice": 375, "maxPrice": 450, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Medium Drywall Repair", "minPrice": 750, "maxPrice": 900, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Large Drywall Repair", "minPrice": 1400, "maxPrice": 1750, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Interior Door Repair", "minPrice": 375, "maxPrice": 500, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Interior Door Replacement", "minPrice": 750, "maxPrice": 900, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Exterior Door Replacement", "minPrice": 1650, "maxPrice": 2200, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Ceiling Fan Installation", "minPrice": 550, "maxPrice": 700, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Deck Repair", "minPrice": 800, "maxPrice": 1100, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "Fence Repair", "minPrice": 800, "maxPrice": 1100, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "General Handyman Half Day", "minPrice": 700, "maxPrice": 875, "priceCurrency": "USD" },
            { "@type": "PriceSpecification", "name": "General Handyman Full Day", "minPrice": 1400, "maxPrice": 1750, "priceCurrency": "USD" }
          ]
        }
      ],
      "potentialAction": {
        "@type": "RequestQuoteAction",
        "name": "Get Free Online Estimate",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://herohandymanpro.com/estimator/",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Quotation",
          "name": "Handyman Project Cost Estimate",
          "description": "Instant ballpark price range for handyman services in O'Fallon IL and Metro East"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://herohandymanpro.com/estimator/#webpage",
      "url": "https://herohandymanpro.com/estimator/",
      "name": "Free Handyman Project Cost Estimator — Hero Handyman Pro",
      "description": "Get an instant ballpark price range for your handyman project in under 2 minutes. Select your service, answer a few questions, and see what it typically costs — no phone call required.",
      "isPartOf": { "@id": "https://herohandymanpro.com/#website" },
      "about": { "@id": "https://herohandymanpro.com/#business" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": "https://herohandymanpro.com/og-image.png" }
    }
  ]
};

export default function EstimatorPage() {
  const seo = useSeoRoute();
  return (
    <>
      <SEO {...seo} />

      <div className="min-h-screen bg-gray-50">
        {/* Header band */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container max-w-4xl">
            <PageBreadcrumb
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Pricing Guide", href: "/handyman-pricing/" },
                { label: "Cost Estimator" },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-14">
          <div className="container max-w-3xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-5">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Free Project Cost Estimator
            </h1>
            <p className="text-teal-100 text-lg max-w-xl mx-auto mb-8">
              Answer a few quick questions and get a ballpark price range for
              your project — no phone call, no commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-teal-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Takes under 2 minutes
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                No obligation
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Real local pricing
              </div>
            </div>
          </div>
        </div>

        {/* Estimator */}
        <div className="container max-w-4xl py-12">
          <EstimatorTool />

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link href="/handyman-pricing/">
              <span className="inline-flex items-center gap-2 text-sm text-teal-700 hover:text-teal-900 font-medium">
                <ArrowLeft className="w-4 h-4" />
                Back to Full Pricing Guide
              </span>
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="bg-white border-t border-gray-200 py-8">
          <div className="container max-w-3xl text-center">
            <p className="text-sm text-gray-500 mb-4">
              This estimate is a ballpark range based on typical O'Fallon IL and
              Metro East project costs. Your actual quote may vary based on
              on-site conditions. All formal quotes are free and written.
            </p>
            <p className="text-sm font-medium text-gray-700">
              Questions? Call or text us at{" "}
              <a href="tel:8007416056" className="text-teal-700 hover:underline">
                800-741-6056
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
