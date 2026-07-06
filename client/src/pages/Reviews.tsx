import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function Reviews() {
  return (
    <div className="flex flex-col">
      <SEO {...seoConfig.reviews} />
      <section className="py-12 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-7">
            <span className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">Reviews</span>
            <h2 className="text-3xl font-bold mt-1.5 mb-2">Customer Reviews</h2>
            <p className="text-[#4b5563] max-w-2xl">
              See what homeowners across St. Louis & Metro East are saying about Hero Handyman Pro.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
