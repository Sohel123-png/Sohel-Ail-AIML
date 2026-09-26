import { motion } from 'framer-motion';
import { Database, BrainCircuit, TerminalSquare } from 'lucide-react';
import { personalInfo } from '../data';

export const About = () => {
  const lifecycle = [
    { icon: Database, label: 'Data', color: 'text-emerald-400' },
    { icon: BrainCircuit, label: 'Model', color: 'text-accent' },
    { icon: TerminalSquare, label: 'Deploy', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative z-10 border-t border-primary/5 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center gap-3">
              01 / ABOUT
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight text-primary mb-6">
              More than a model builder.
            </h3>
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              {personalInfo.about.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:ml-auto w-full max-w-md"
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
              
              <h4 className="text-xl font-bold text-primary mb-10">The ML Lifecycle</h4>
              
              <div className="flex flex-col gap-6 relative z-10">
                {lifecycle.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/10 to-transparent" />
                      <span className="text-lg font-semibold text-primary/90 group-hover:text-primary transition-colors">{step.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
