import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'data', label: 'Data & Backend' }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(p => 
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  return (
    <section id="work" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center gap-3">
              03 / PROJECTS
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-primary mb-6">
              Work, not just badges.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-md">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-primary text-background scale-105'
                    : 'bg-surface border border-primary/5 text-secondary hover:text-primary hover:border-primary/20 hover:bg-primary/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Feature the first two projects visually in the grid if 'all' is selected
              const isFeatured = activeCategory === 'all' && (project.id === 1 || project.id === 2);
              
              return (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  featured={isFeatured}
                  onSelect={() => setSelectedProject(project)}
                />
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
