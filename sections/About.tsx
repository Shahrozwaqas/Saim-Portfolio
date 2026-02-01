
import React from 'react';
import { MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-charcoal text-white overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 animate-in fade-in slide-in-from-left duration-1000">
          <img 
            src={PERSONAL_INFO.aboutImage} 
            alt="About Saim" 
            className="absolute inset-0 w-full h-full object-cover md:rounded-r-[20px]"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 animate-in fade-in slide-in-from-right duration-1000 delay-200 fill-mode-both">
          <div className="max-w-xl">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-6">
              A bit about me
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              Passionately creative, dedicated to harnessing the power of design.
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              {PERSONAL_INFO.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 flex items-center text-primary space-x-3">
              <MapPin size={20} />
              <span className="font-medium text-[15px]">Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
