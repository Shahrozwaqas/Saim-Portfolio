
import React from 'react';
import { X, ArrowRight, ArrowLeft, Clock, Target, Users, ExternalLink, PlayCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isAllProjects: boolean;
  allProjects: Project[];
  onClose: () => void;
  onProjectClick: (project: Project) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isAllProjects, 
  allProjects, 
  onClose,
  onProjectClick 
}) => {
  // Helper to render video content (supports direct links and simple youtube/vimeo detection)
  const renderVideo = (url: string) => {
    const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
    const isVimeo = url.includes('vimeo.com');

    if (isYoutube || isVimeo) {
      let embedUrl = url;
      if (isYoutube) {
        const id = url.split('v=')[1] || url.split('/').pop();
        embedUrl = `https://www.youtube.com/embed/${id}`;
      } else if (isVimeo) {
        const id = url.split('/').pop();
        embedUrl = `https://player.vimeo.com/video/${id}`;
      }
      return (
        <iframe
          src={embedUrl}
          className="w-full h-full rounded-[24px]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }

    return (
      <video 
        src={url} 
        controls 
        autoPlay 
        muted 
        loop 
        className="w-full h-full object-cover rounded-[24px]"
      >
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in slide-in-from-bottom duration-500">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-8 md:px-20 border-b border-gray-100 bg-white sticky top-0 z-[110]">
        <h2 className="font-serif text-xl text-charcoal">
          {isAllProjects ? 'All Projects' : project?.title}
        </h2>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:rotate-90 transition-transform duration-300"
        >
          <X size={24} />
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 md:px-20 py-16 scroll-smooth">
        <div className="max-w-7xl mx-auto">
          
          {isAllProjects ? (
            /* All Projects Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {allProjects.map((p) => (
                <div 
                  key={p.id}
                  onClick={() => onProjectClick(p)}
                  className="group relative aspect-[16/10] overflow-hidden rounded-[20px] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">{p.type}</p>
                    <h3 className="text-white font-serif text-2xl">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Individual Project Details */
            <div className="space-y-20">
              {/* Hero Image */}
              <div className="w-full aspect-[16/7] rounded-[24px] overflow-hidden shadow-2xl bg-gray-100">
                <img src={project?.image} alt={project?.title} className="w-full h-full object-cover" />
              </div>

              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-8">
                  <div>
                    <p className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Project Type</p>
                    <p className="text-xl font-serif">{project?.type}</p>
                  </div>
                  <div className="flex items-center space-x-3 text-muted">
                    <Clock size={18} />
                    <span>Year: {project?.year}</span>
                  </div>
                  
                  {/* Behance Button */}
                  {project?.behanceUrl && (
                    <div className="pt-2">
                      <a 
                        href={project.behanceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-charcoal text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-muted transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>View on Behance</span>
                      </a>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project?.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-cream rounded-full text-xs font-medium text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-3xl md:text-4xl mb-6">Overview</h3>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {project?.shortDescription}
                  </p>
                  {project?.caseStudy && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                      <div className="p-8 bg-cream rounded-2xl">
                        <h4 className="font-bold flex items-center space-x-2 mb-4">
                          <Target size={20} className="text-brown" />
                          <span>The Challenge</span>
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">{project.caseStudy.challenge}</p>
                      </div>
                      <div className="p-8 bg-primary/10 rounded-2xl">
                        <h4 className="font-bold flex items-center space-x-2 mb-4">
                          <Users size={20} className="text-primary" />
                          <span>The Solution</span>
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">{project.caseStudy.solution}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Showcase (Conditional) */}
              {project?.videoUrl && (
                <div className="space-y-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <PlayCircle size={24} />
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl">Product Showcase</h3>
                  </div>
                  <div className="w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-black">
                    {renderVideo(project.videoUrl)}
                  </div>
                </div>
              )}

              {/* Results */}
              <div className="bg-charcoal text-white p-12 md:p-20 rounded-[32px] text-center">
                <p className="text-primary font-bold tracking-widest uppercase mb-6">Key Impact</p>
                <h3 className="font-serif text-4xl md:text-6xl mb-8">
                  {project?.caseStudy?.results || "Delivered world-class experience with zero compromise on usability."}
                </h3>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-20 border-t border-gray-100">
                <button className="flex items-center space-x-3 text-muted hover:text-charcoal transition-colors font-medium group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Project</span>
                </button>
                <button className="flex items-center space-x-3 text-muted hover:text-charcoal transition-colors font-medium group">
                  <span>Next Project</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
