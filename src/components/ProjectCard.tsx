import { motion } from 'framer-motion';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { GithubIcon as Github } from './icons';
import { projects } from '../data';
import { ProjectVisual } from './ProjectVisual';
import { TechIcon } from './TechIcon';

interface ProjectCardProps {
  project: typeof projects[0];
  onSelect: () => void;
  featured?: boolean;
}

export const ProjectCard = ({ project, onSelect, featured = false }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group flex flex-col glass-card overflow-hidden cursor-pointer hover:border-primary/10 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.2)] transition-all duration-500 [transform-style:preserve-3d] ${featured ? 'md:col-span-2' : ''}`}
      onClick={onSelect}
    >
      {/* Cover Visual Area */}
      <div className={`relative w-full ${featured ? 'h-72' : 'h-56'} bg-background/50 overflow-hidden border-b border-primary/5 [transform-style:preserve-3d]`}>
        <motion.div 
          className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ transform: "translateZ(-10px)" }}
        >
          <ProjectVisual id={project.id} />
        </motion.div>
        
        {/* Number Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-primary/10 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase shadow-lg">
            Project {project.number}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-surfaceHighlight border border-primary/10 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2/3 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>

        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-primary tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-secondary mt-3 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold bg-primary/5 text-primary/80 rounded border border-primary/5 tracking-wide">
              <TechIcon name={tag} className="w-3.5 h-3.5 opacity-90" />
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA & Links */}
        <div className="flex items-center justify-between pt-5 border-t border-primary/5">
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-secondary hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <span className="text-sm font-bold text-accent transition-opacity">
            Read Case Study
          </span>
        </div>
      </div>
    </motion.article>
  );
};
