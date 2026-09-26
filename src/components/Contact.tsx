import { motion } from 'framer-motion';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons';
import { personalInfo } from '../data';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-10 border-t border-primary/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center justify-center gap-3">
            07 / LET'S CONNECT
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight">
            Let's build something useful.
          </h3>
          <p className="text-lg md:text-xl text-secondary mb-16 max-w-2xl mx-auto leading-relaxed">
            Open to opportunities and projects across Data Science, Machine Learning, AI/ML Engineering, Generative AI and intelligent backend systems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-primary text-background font-bold text-lg rounded-full hover:bg-gray-200 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowUpRight className="w-5 h-5 opacity-50" />
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 glass-card text-primary font-medium rounded-full hover:bg-primary/5 hover:border-primary/20 transition-all shadow-lg hover:-translate-y-1 duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 glass-card text-primary font-medium rounded-full hover:bg-primary/5 hover:border-primary/20 transition-all shadow-lg hover:-translate-y-1 duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 glass-card text-primary font-medium rounded-full hover:bg-primary/5 hover:border-primary/20 transition-all shadow-lg hover:-translate-y-1 duration-300"
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
