
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onShowAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onShowAll }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS.slice(0, 8) 
    : PROJECTS.filter(p => p.category === activeCategory).slice(0, 8);

  return (
    <section id="projects" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-8 md:space-y-0 reveal">
          <div className="max-w-xl w-full text-center md:text-left">
            <h2 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3">Recent Work</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">Iconic Projects</h3>
          </div>
          
          <div className="flex overflow-x-auto md:flex-wrap gap-2 pb-4 md:pb-0 no-scrollbar w-full md:w-auto justify-center md:justify-end px-4 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-[11px] font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`reveal group relative overflow-hidden rounded-lg aspect-[4/5] bg-slate-200 cursor-pointer shadow-lg`}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
                <span className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-black text-white mb-2 leading-tight">
                  {project.title}
                </h4>
                <p className="text-white/70 text-xs mb-6 line-clamp-2 font-medium">
                  Engineering excellence meets architectural vision in this hallmark project located in the heart of Qatar.
                </p>
                
                <button className="inline-flex items-center space-x-2 text-white bg-orange-600/90 hover:bg-orange-600 px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-[0.2em] transition-all w-fit group/btn">
                  <span>View Project</span>
                  <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <button 
            onClick={onShowAll}
            className="bg-slate-900 text-white hover:bg-orange-600 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
