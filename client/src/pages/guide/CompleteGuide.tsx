import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import SEO from '@/components/SEO';
import { useSeoRoute } from '@/hooks/useSeoRoute';
export default function CompleteGuide() {
  const seo = useSeoRoute();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/handyman-website-builder-guide.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading guide:', err));
  }, []);

  return (
    <>
      <SEO {...seo} />
      
      {/* Header */}
      <div className="bg-teal-600 text-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/guide">
              <a className="inline-flex items-center gap-2 text-white hover:text-teal-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Guide Home
              </a>
            </Link>
            <a
              href="/handyman-website-builder-guide.md"
              download="handyman-website-builder-guide.md"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Guide
            </a>
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
            <div className="mt-12 p-8 bg-teal-50 rounded-lg border-2 border-teal-200">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
              <p className="text-gray-700 mb-6">
                Download the quick-start checklist to gather all your information, then use the prompts in this guide with an AI website builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide/checklist">
                  <a className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    <FileText className="w-5 h-5" />
                    Get Checklist
                  </a>
                </Link>
                <a
                  href="/handyman-website-builder-guide.md"
                  download="handyman-website-builder-guide.md"
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download This Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
