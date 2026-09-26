import { motion } from 'framer-motion';
import { approach } from '../data';

export const Approach = () => {
  return (
    <section id="approach" className="py-32 relative z-10 border-t border-primary/5 bg-surfaceHighlight/10">
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center gap-3">
            04 / APPROACH
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-primary max-w-2xl">
            From problem to usable system.
          </h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-[4.5rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/0 via-white/10 to-primary/0" />
          
          <div className="space-y-16">
            {approach.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 group"
              >
                <div className="flex items-center gap-6 md:w-36 md:shrink-0">
                  <div className="w-16 h-16 shrink-0 rounded-2xl glass-card flex items-center justify-center font-bold text-primary z-10 shadow-xl group-hover:scale-110 group-hover:border-accent/50 group-hover:text-accent transition-all duration-500">
                    {step.step}
                  </div>
                  {/* Horizontal line connector mobile */}
                  <div className="h-px bg-primary/10 flex-1 md:hidden" />
                </div>
                
                <div className="glass-card p-8 md:p-10 flex-1 hover:border-primary/10 transition-colors group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] duration-500">
                  <h4 className="text-2xl font-bold text-primary tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">{step.title}</h4>
                  <p className="text-secondary text-lg leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
