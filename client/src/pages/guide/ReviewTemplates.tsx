import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Download, ArrowLeft, Printer } from 'lucide-react';
import SEO from '@/components/SEO';

import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function ReviewTemplates() {
  const seo = useSeoRoute();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch the guide and extract Appendix B
    fetch('/handyman-website-builder-guide.md')
      .then(res => res.text())
      .then(text => {
        // Extract Appendix B section
        const appendixBStart = text.indexOf('## Appendix B: Review Response Templates');
        const advancedStart = text.indexOf('## Advanced Optimization Strategies');
        if (appendixBStart !== -1 && advancedStart !== -1) {
          const appendixB = text.substring(appendixBStart, advancedStart);
          setContent(appendixB);
        }
      })
      .catch(err => console.error('Error loading review templates:', err));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO {...seo} />
      
      {/* Header */}
      <div className="bg-teal-600 text-white py-6 print:hidden">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/guide">
              <a className="inline-flex items-center gap-2 text-white hover:text-teal-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Guide Home
              </a>
            </Link>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
              >
                <Printer className="w-5 h-5" />
                Print
              </button>
              <a
                href="/handyman-website-builder-guide.md"
                download="handyman-website-builder-guide.md"
                className="inline-flex items-center gap-2 bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Full Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed">
                {content}
              </pre>
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-teal-50 rounded-lg border-2 border-teal-200 print:hidden">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your GBP?</h3>
              <p className="text-gray-700 mb-6">
                Use our comprehensive GBP audit checklist to ensure your Google Business Profile is fully optimized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide/gbp-audit">
                  <a className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    View GBP Audit Checklist
                  </a>
                </Link>
                <Link href="/guide/complete">
                  <a className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Read Complete Guide
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
