import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Download, ArrowLeft, FileText, Printer } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/lib/seo-config';

export default function Checklist() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/website-builder-checklist.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading checklist:', err));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEO {...seoConfig['/guide/checklist']} />
      
      {/* Header */}
      <div className="bg-teal-600 text-white py-6 print:hidden">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
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
                href="/website-builder-checklist.md"
                download="website-builder-checklist.md"
                className="inline-flex items-center gap-2 bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download
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
              <h3 className="text-2xl font-bold mb-4">Checklist Complete?</h3>
              <p className="text-gray-700 mb-6">
                Once you've gathered all your information, read the complete guide to get the step-by-step prompts for building your website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide/complete">
                  <a className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    <FileText className="w-5 h-5" />
                    Read Complete Guide
                  </a>
                </Link>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Printer className="w-5 h-5" />
                  Print Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
