
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-charcoal mb-20 animate-in fade-in slide-in-from-bottom-8 duration-800">
          Results-driven, strategy-smart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Layers;
            return (
              <div 
                key={service.id}
                className={`bg-white p-12 md:p-14 rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-12 duration-800 delay-[${index * 200}ms]`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 hover:rotate-6"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                >
                  <IconComponent size={32} />
                </div>
                <h3 className="font-bold text-2xl text-charcoal mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed text-[16px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
