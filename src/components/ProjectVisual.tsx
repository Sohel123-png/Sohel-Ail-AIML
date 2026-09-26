import { motion } from 'framer-motion';

export const ProjectVisual = ({ id }: { id: number }) => {
  // Returns a unique visual for each project based on its ID
  switch (id) {
    case 1:
      // Customer Intelligence ML Platform
      return (
        <div className="w-full h-full bg-gradient-to-br from-indigo-950 to-blue-900/50 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-400 rounded-full blur-[1px]"
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <motion.svg className="w-48 h-48 opacity-80" viewBox="0 0 100 100">
            <motion.circle cx="50" cy="50" r="30" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1" fill="none" />
            <motion.circle cx="50" cy="50" r="20" stroke="rgba(96, 165, 250, 0.5)" strokeWidth="1" fill="none" />
            <motion.path d="M 20 50 Q 50 20 80 50 T 20 50" stroke="rgba(96, 165, 250, 0.8)" strokeWidth="1.5" fill="none"
              animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.svg>
        </div>
      );

    case 2:
      // Multi-Agent Research System
      return (
        <div className="w-full h-full bg-gradient-to-br from-violet-950 to-purple-900/50 flex items-center justify-center overflow-hidden relative">
          <svg className="absolute w-full h-full opacity-30" viewBox="0 0 200 100" preserveAspectRatio="none">
            <motion.path
              d="M 20 50 L 100 50 L 180 50"
              stroke="#a78bfa"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path d="M 100 20 L 100 80" stroke="#a78bfa" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          </svg>
          <div className="absolute flex flex-col items-center gap-8">
            <div className="flex gap-16">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-10 h-10 bg-purple-500/20 border border-purple-400 rounded-lg flex items-center justify-center text-xs font-mono text-purple-200">S</motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }} className="w-10 h-10 bg-purple-500/20 border border-purple-400 rounded-lg flex items-center justify-center text-xs font-mono text-purple-200">R</motion.div>
            </div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-16 h-16 bg-purple-600/30 border-2 border-purple-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <div className="w-6 h-6 bg-purple-300 rounded-full" />
            </motion.div>
            <div className="flex gap-16">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className="w-10 h-10 bg-purple-500/20 border border-purple-400 rounded-lg flex items-center justify-center text-xs font-mono text-purple-200">W</motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} className="w-10 h-10 bg-purple-500/20 border border-purple-400 rounded-lg flex items-center justify-center text-xs font-mono text-purple-200">C</motion.div>
            </div>
          </div>
        </div>
      );

    case 3:
      // SQL E-Commerce Analytics
      return (
        <div className="w-full h-full bg-gradient-to-br from-orange-950 to-amber-900/40 flex items-end justify-center pb-8 overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-32 h-8 border-2 border-orange-400 rounded-[50%] mb-[-1rem] bg-orange-950 z-10" />
            ))}
            <div className="w-32 h-24 border-x-2 border-b-2 border-orange-400 rounded-b-[50%] mt-[-1rem]" />
          </div>
          <div className="flex items-end gap-3 z-20">
            {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
              <motion.div
                key={i}
                className="w-6 bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-sm"
                initial={{ height: 10 }}
                animate={{ height: h }}
                transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
          </div>
        </div>
      );

    case 4:
      // Loan Default Prediction
      return (
        <div className="w-full h-full bg-gradient-to-br from-red-950 to-rose-900/40 flex flex-col items-center justify-center overflow-hidden relative">
          <motion.div 
            className="w-48 h-2 bg-primary/10 rounded-full overflow-hidden"
            initial={{ opacity: 0.5 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500"
              animate={{ x: ["-100%", "0%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <div className="mt-8 flex gap-4">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="w-16 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-md flex flex-col justify-end p-2"
            >
              <div className="text-[10px] text-emerald-400">LOW RISK</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-16 h-24 bg-red-500/10 border border-red-500/30 rounded-md flex flex-col justify-end p-2"
            >
              <div className="text-[10px] text-red-400">DEFAULT</div>
            </motion.div>
          </div>
        </div>
      );

    case 5:
      // Mansik Santulan Score
      return (
        <div className="w-full h-full bg-gradient-to-br from-teal-950 to-emerald-900/40 flex items-center justify-center overflow-hidden relative">
          {[1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-teal-400/30 rounded-full"
              animate={{ scale: [1, 2 + i * 0.5], opacity: [0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
            />
          ))}
          <motion.div 
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-gradient-to-tr from-teal-400 to-emerald-300 rounded-full shadow-[0_0_30px_rgba(52,211,153,0.3)] flex items-center justify-center"
          >
            <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center">
              <span className="text-teal-400 text-xs font-mono">SCORE</span>
            </div>
          </motion.div>
        </div>
      );

    case 6:
      // Cell Analyzer
      return (
        <div className="w-full h-full bg-gradient-to-br from-fuchsia-950 to-pink-900/40 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.1)_0%,transparent_70%)]" />
          <motion.svg className="w-48 h-48" viewBox="0 0 100 100">
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const x = 50 + Math.cos(angle) * 25;
              const y = 50 + Math.sin(angle) * 25;
              return (
                <motion.circle
                  key={i}
                  cx={x} cy={y} r="8"
                  fill="none"
                  stroke="rgba(232, 121, 249, 0.6)"
                  strokeWidth="1.5"
                  animate={{ 
                    r: [8, 12, 8],
                    opacity: [0.6, 1, 0.6] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              );
            })}
            <motion.circle cx="50" cy="50" r="15" fill="rgba(232, 121, 249, 0.2)" stroke="rgba(232, 121, 249, 0.8)" strokeWidth="2" 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.svg>
        </div>
      );

    case 7:
      // Credit Card Fraud Detection
      return (
        <div className="w-full h-full bg-gradient-to-br from-red-950 to-orange-900/30 flex items-center justify-center overflow-hidden relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M 0 50 Q 50 20 100 50 T 200 50"
              stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"
              animate={{ d: ["M 0 50 Q 50 20 100 50 T 200 50", "M 0 50 Q 50 80 100 50 T 200 50", "M 0 50 Q 50 20 100 50 T 200 50"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <div className="flex gap-8 relative z-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full ${i === 4 ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'bg-slate-400/50'}`}
                animate={{ y: i === 4 ? [0, -20, 0] : [0, 5, 0] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      );

    case 8:
      // Wholesale Customer Classifier
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-950 to-cyan-900/40 flex items-center justify-center overflow-hidden relative">
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="100" x2="100" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <motion.path d="M 20 80 Q 50 50 80 20" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          </svg>
          <div className="absolute top-8 left-12 flex flex-wrap w-16 gap-2">
            {[...Array(6)].map((_, i) => <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full opacity-60" />)}
          </div>
          <div className="absolute bottom-8 right-12 flex flex-wrap w-16 gap-2">
            {[...Array(6)].map((_, i) => <div key={i} className="w-2 h-2 bg-blue-400 rounded-sm opacity-60" />)}
          </div>
        </div>
      );

    case 9:
      // Used Bike Price Predictor
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-zinc-800 flex items-center justify-center overflow-hidden relative">
          <motion.div
            className="flex items-center gap-1 opacity-70"
            animate={{ x: [-20, 20] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <div className="w-12 h-12 border-4 border-slate-500 rounded-full" />
            <div className="w-16 h-2 bg-slate-500 rounded-full mx-[-10px] z-10" />
            <div className="w-12 h-12 border-4 border-slate-500 rounded-full" />
          </motion.div>
          <div className="absolute bottom-6 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          <motion.div 
            className="absolute bottom-6 w-3 h-3 bg-emerald-400 rounded-full"
            animate={{ x: [0, 300] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );

    case 10:
      // Titanic Survival Prediction
      return (
        <div className="w-full h-full bg-gradient-to-br from-cyan-950 to-sky-900/40 flex items-center justify-center overflow-hidden relative">
          <motion.svg className="w-48 h-48 opacity-50" viewBox="0 0 100 100"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M 20 60 L 80 60 L 70 80 L 30 80 Z" fill="rgba(56, 189, 248, 0.2)" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" />
            <rect x="40" y="45" width="10" height="15" fill="rgba(56, 189, 248, 0.4)" />
            <rect x="55" y="50" width="8" height="10" fill="rgba(56, 189, 248, 0.4)" />
          </motion.svg>
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-cyan-950 to-transparent" />
          <motion.div 
            className="absolute top-6 right-8 text-xs font-mono text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            P(survive) = 0.82
          </motion.div>
        </div>
      );

    case 11:
      // News App
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-950 flex flex-col gap-3 p-8 justify-center overflow-hidden relative">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-full bg-primary/5 border border-primary/10 rounded px-4 py-3 flex flex-col gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-2 bg-blue-400/50 rounded" />
              <div className="w-full h-2 bg-primary/20 rounded" />
              <div className="w-2/3 h-2 bg-primary/10 rounded" />
            </motion.div>
          ))}
        </div>
      );

    case 12:
      // Movie Recommendation System
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-950 to-pink-900/30 flex items-center justify-center overflow-hidden relative">
          <div className="flex gap-4 perspective-[1000px] transform-style-3d">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-16 h-24 rounded-lg bg-primary/5 border border-primary/10 shadow-xl overflow-hidden ${i === 2 ? 'z-10' : 'z-0 opacity-50'}`}
                animate={i === 2 ? { scale: [1, 1.05, 1] } : { rotateY: i === 1 ? 20 : -20, scale: 0.9 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-1/2 bg-gradient-to-br from-purple-500/30 to-pink-500/20" />
                <div className="p-2 flex flex-col gap-1">
                  <div className="w-full h-1 bg-primary/30 rounded" />
                  <div className="w-1/2 h-1 bg-primary/20 rounded" />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.svg className="absolute w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
            <path d="M 30 50 Q 50 30 70 50" fill="none" stroke="rgba(232, 121, 249, 0.8)" strokeWidth="0.5" strokeDasharray="2 2" />
          </motion.svg>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-surface flex items-center justify-center">
          <div className="w-12 h-12 rounded bg-primary/5" />
        </div>
      );
  }
};
