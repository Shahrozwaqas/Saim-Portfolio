
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface PortfolioProps {
  onProjectClick: (project: Project) => void;
  onViewAllClick: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick, onViewAllClick }) => {
  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <section id="work" className="bg-white py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-charcoal mb-16 animate-in fade-in slide-in-from-bottom-4 duration-800">
          Selected work...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="group relative aspect-[16/10] overflow-hidden rounded-[20px] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs md:text-sm font-medium tracking-widest uppercase mb-3 opacity-90">
                  {project.type}
                </p>
                <h3 className="text-white font-serif text-2xl md:text-3xl mb-3">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button 
            onClick={onViewAllClick}
            className="border-2 border-charcoal text-charcoal px-10 py-4 rounded-xl font-medium hover:bg-charcoal hover:text-white transition-all duration-400"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
