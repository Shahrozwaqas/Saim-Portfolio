
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-center text-charcoal mb-20 animate-in fade-in slide-in-from-bottom-4 duration-800">
          FAQs
        </h2>

        <div className="space-y-5">
          {FAQS.map((faq, index) => (
            <div 
              key={faq.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-600`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button 
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-7 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-semibold text-charcoal pr-6">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 transition-transform duration-300">
                  {openId === faq.id ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-7 pt-0 text-muted leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
