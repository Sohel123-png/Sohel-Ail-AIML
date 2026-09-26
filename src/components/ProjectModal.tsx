import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link as LinkIcon, Code2, LayoutTemplate } from 'lucide-react';
import { GithubIcon as Github } from './icons';
import { projects } from '../data';

interface ProjectModalProps {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-surface border border-primary/10 rounded-2xl shadow-2xl flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-primary/10 rounded-full text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase rounded-full">
                  {project.category}
                </span>
                <span className="text-secondary font-mono">{project.number}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                {project.title}
              </h2>
              
              <p className="text-xl text-secondary mb-10 leading-relaxed">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <LayoutTemplate className="w-5 h-5 text-accent" />
                      Problem
                    </h3>
                    <p className="text-secondary leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-accent" />
                      Approach / Solution
                    </h3>
                    <p className="text-secondary leading-relaxed">{project.approach}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.split('·').map(t => t.trim()).map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-surfaceHighlight border border-primary/5 rounded-lg text-sm text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Important Implementation Details</h3>
                    <p className="text-secondary leading-relaxed">{project.details}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-primary/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-surfaceHighlight text-primary font-semibold rounded-xl hover:bg-primary/10 transition-colors border border-primary/5"
                  >
                    <LinkIcon className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                
                <span className="text-sm text-secondary/60 ml-auto">
                  {project.live ? 'Verified live demo available.' : 'Source code available.'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
