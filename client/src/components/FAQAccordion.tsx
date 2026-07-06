import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-4 text-gray-700 bg-gray-50 border-t border-gray-200">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
