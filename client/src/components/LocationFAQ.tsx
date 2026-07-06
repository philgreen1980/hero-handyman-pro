import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationFAQProps {
  faqs: FAQItem[];
  city: string;
}

export function LocationFAQ({ faqs, city }: LocationFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Common questions from {city} customers about our handyman services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
