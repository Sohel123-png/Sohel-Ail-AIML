import { motion } from 'framer-motion';
import { skills } from '../data';
import { TechIcon } from './TechIcon';
import { 
  ProgrammingVisual, DataScienceVisual, MLVisual, 
  DeepLearningVisual, GenAIVisual, BackendVisual, 
  DatabaseVisual, ToolsVisual 
} from './SkillVisuals';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 flex items-center gap-3">
            02 / SKILLS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight text-primary max-w-2xl tracking-tight">
            Technology stack, at a glance.
          </h3>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {skills.map((skillGroup, idx) => {
            const CategoryIcon = skillGroup.icon;
            
            // Determine size and specific gradients based on category
            let cardClass = "col-span-1";
            let visualEl = null;
            let gradientClass = "from-surfaceHighlight to-surface/50";
            
            if (skillGroup.category === 'Programming') {
              cardClass = "md:col-span-2 lg:col-span-2 row-span-1";
              gradientClass = "from-blue-900/10 to-surface";
              visualEl = <ProgrammingVisual />;
            } else if (skillGroup.category === 'Data Science') {
              cardClass = "md:col-span-1 lg:col-span-2 row-span-1";
              gradientClass = "from-emerald-900/10 to-surface";
              visualEl = <DataScienceVisual />;
            } else if (skillGroup.category === 'Generative AI' || skillGroup.category === 'Generative & Agentic AI') {
              cardClass = "md:col-span-2 lg:col-span-2 row-span-2";
              gradientClass = "from-purple-900/10 to-surface";
              visualEl = <GenAIVisual />;
            } else if (skillGroup.category === 'Machine Learning') {
              cardClass = "md:col-span-1 lg:col-span-2 row-span-1";
              gradientClass = "from-indigo-900/10 to-surface";
              visualEl = <MLVisual />;
            } else if (skillGroup.category === 'Deep Learning') {
              cardClass = "md:col-span-1 lg:col-span-1 row-span-1";
              gradientClass = "from-cyan-900/10 to-surface";
              visualEl = <DeepLearningVisual />;
            } else if (skillGroup.category === 'Backend & Application') {
              cardClass = "md:col-span-1 lg:col-span-2 row-span-1";
              gradientClass = "from-amber-900/10 to-surface";
              visualEl = <BackendVisual />;
            } else if (skillGroup.category === 'Databases') {
              cardClass = "md:col-span-1 lg:col-span-1 row-span-1";
              gradientClass = "from-rose-900/10 to-surface";
              visualEl = <DatabaseVisual />;
            } else if (skillGroup.category === 'Tools & Engineering') {
              cardClass = "md:col-span-1 lg:col-span-1 row-span-1";
              gradientClass = "from-slate-800/20 to-surface";
              visualEl = <ToolsVisual />;
            }

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                className={`group relative overflow-hidden bg-gradient-to-br ${gradientClass} bg-surface border border-primary/5 rounded-3xl p-6 md:p-8 flex flex-col ${cardClass} hover:border-primary/10 transition-all shadow-lg hover:shadow-2xl hover:shadow-accent/10 [transform-style:preserve-3d]`}
              >
                {/* Background Visual Element */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out opacity-40 group-hover:opacity-60 group-hover:scale-105 origin-center" 
                  style={{ transform: "translateZ(-10px)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
                  {visualEl}
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-8">
                  <CategoryIcon className="w-5 h-5 text-accent" />
                  <h4 className="text-xl font-bold text-primary tracking-tight uppercase text-sm tracking-widest">
                    {skillGroup.category}
                  </h4>
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {skillGroup.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + (i * 0.03) }}
                        className="flex items-center gap-2 px-3 py-2 bg-primary/5 text-primary/90 border border-primary/5 rounded-lg group-hover:border-primary/10 transition-colors"
                      >
                        <TechIcon name={item} className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
