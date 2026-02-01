
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Content */}
      <div className="w-full md:w-[55%] bg-gradient-to-br from-primary via-[#FFF2F2] to-cream flex items-center justify-center p-8 md:p-20">
        <div className="max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out fill-mode-both">
          <p className="text-muted text-sm md:text-lg font-medium tracking-[0.2em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            {PERSONAL_INFO.subtitle}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-charcoal mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            {PERSONAL_INFO.tagline}
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            {PERSONAL_INFO.approach}
          </p>
          <a 
            href="#contact"
            className="inline-block bg-charcoal text-white px-10 py-4 rounded-xl text-base font-medium shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800"
          >
            Contact Now
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] bg-cream flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
        <div className="relative w-full max-w-[500px] aspect-[5/6] animate-in fade-in slide-in-from-right-12 duration-1000 delay-500 fill-mode-both">
          <div className="absolute -inset-4 border border-primary/30 rounded-[32px] animate-pulse"></div>
          <img 
            src={PERSONAL_INFO.heroImage} 
            alt={PERSONAL_INFO.name} 
            className="w-full h-full object-cover rounded-[24px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-brown/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
