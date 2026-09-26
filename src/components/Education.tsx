import { motion } from 'framer-motion';
import { education, certifications } from '../data';

export const Education = () => {
  return (
    <section id="education" className="py-32 relative z-10 border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
        
        {/* Education Timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center gap-3">
              05 / EDUCATION
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Education & training.
            </h3>
          </motion.div>

          <div className="space-y-10 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/10 via-white/5 to-transparent" />
            
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-[1.125rem] top-2 w-4 h-4 rounded-full bg-surface border-2 border-accent z-10 group-hover:scale-150 group-hover:bg-accent transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">{edu.type}</span>
                  <span className="text-sm text-secondary/60 font-medium">{edu.period}</span>
                </div>
                
                <h4 className="text-xl font-bold text-primary tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">{edu.title}</h4>
                <p className="text-secondary mb-4 leading-relaxed">{edu.institution}</p>
                <span className="inline-block px-4 py-1.5 bg-surfaceHighlight border border-primary/5 rounded-lg text-xs text-secondary font-semibold tracking-wide">
                  {edu.focus}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center gap-3">
              06 / CREDENTIALS
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Certifications.
            </h3>
          </motion.div>

          <div className="grid gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex items-start gap-6 glass-card p-6 md:p-8 hover:border-primary/10 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 shrink-0 bg-surfaceHighlight rounded-2xl flex items-center justify-center font-bold text-accent border border-primary/5 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-lg">
                  {cert.mark}
                </div>
                
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">
                    {cert.type}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-primary tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">{cert.title}</h4>
                  <p className="text-sm text-secondary font-medium">
                    {cert.institution} <span className="mx-3 text-primary/10">|</span> {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
