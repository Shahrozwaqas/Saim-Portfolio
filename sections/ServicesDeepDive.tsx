
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_DEEP_DIVE } from '../constants';

const ServicesDeepDive: React.FC = () => {
  // Set initial image to the first item in uxDesign
  const [activeImage, setActiveImage] = useState(SERVICE_DEEP_DIVE.uxDesign[0].image);

  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left: Sticky Image Container */}
        <div className="w-full md:w-[40%]">
          <div className="md:sticky md:top-32 rounded-[20px] overflow-hidden shadow-2xl aspect-[5/7] relative bg-gray-200">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={activeImage}
                src={activeImage} 
                alt="Service Representation" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 animate-in fade-in slide-in-from-bottom-4 duration-800">
            How I can help you...
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-bold text-2xl mb-6 flex items-center">
                UX Design
              </h3>
              <ul className="space-y-4">
                {SERVICE_DEEP_DIVE.uxDesign.map((item) => (
                  <li 
                    key={item.label}
                    onMouseEnter={() => setActiveImage(item.image)}
                    className="flex items-center space-x-4 text-muted hover:text-charcoal hover:translate-x-2 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Check size={14} />
                    </div>
                    <span className="text-lg leading-loose">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-6 flex items-center">
                Brand Design
              </h3>
              <ul className="space-y-4">
                {SERVICE_DEEP_DIVE.brandDesign.map((item) => (
                  <li 
                    key={item.label}
                    onMouseEnter={() => setActiveImage(item.image)}
                    className="flex items-center space-x-4 text-muted hover:text-charcoal hover:translate-x-2 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Check size={14} />
                    </div>
                    <span className="text-lg leading-loose">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDeepDive;
