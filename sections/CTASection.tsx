
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { BENEFITS } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section className="bg-charcoal py-24 md:py-32 px-6 md:px-20 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-800">
          Start with a free consultation
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-800 delay-200">
          Ready to transform your digital presence? Let's talk about your project and see how we can build something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = (LucideIcons as any)[benefit.icon] || LucideIcons.Zap;
            return (
              <div 
                key={benefit.id}
                className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-12 duration-800"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-white flex justify-center mb-5">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-3 tracking-tight">
                  {benefit.title}
                </h4>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <a 
          href="#contact"
          className="inline-block bg-white text-charcoal px-14 py-5 rounded-xl text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300 animate-in fade-in scale-90 duration-800 delay-500"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default CTASection;
