
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import ServicesDeepDive from './sections/ServicesDeepDive';
import About from './sections/About';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject || isAllProjectsModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject, isAllProjectsModalOpen]);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsAllProjectsModalOpen(false);
  };

  const openAllProjects = () => {
    setIsAllProjectsModalOpen(true);
    setSelectedProject(null);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsAllProjectsModalOpen(false);
  };

  return (
    <div className="relative font-sans text-charcoal">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio 
          onProjectClick={openProjectDetails} 
          onViewAllClick={openAllProjects} 
        />
        <ServicesDeepDive />
        <About />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />

      {/* Project Modals */}
      {(selectedProject || isAllProjectsModalOpen) && (
        <ProjectModal 
          project={selectedProject} 
          isAllProjects={isAllProjectsModalOpen}
          allProjects={PROJECTS}
          onClose={closeModal}
          onProjectClick={openProjectDetails}
        />
      )}
    </div>
  );
};

export default App;
