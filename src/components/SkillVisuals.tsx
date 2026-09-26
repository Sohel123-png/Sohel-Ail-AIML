import { motion } from 'framer-motion';

export const ProgrammingVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 [mask-image:radial-gradient(ellipse_60%_60%_at_100%_0%,#000_100%,transparent_100%)]" />
    <motion.div 
      animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-12 right-12 text-6xl font-mono font-black text-blue-500/40 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    >
      {'</>'}
    </motion.div>
  </div>
);

export const DataScienceVisual = () => (
  <div className="absolute inset-0 overflow-hidden flex items-end justify-end">
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
    <div className="flex items-end gap-3 p-10 pb-16 opacity-80">
      {[40, 90, 60, 140, 85, 170].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 10 }}
          animate={{ height: h }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.15, ease: "easeInOut" }}
          className="w-6 bg-gradient-to-t from-emerald-600/10 to-emerald-400/80 rounded-t-md shadow-[0_0_15px_rgba(52,211,153,0.3)] border-t border-emerald-300/50"
        />
      ))}
    </div>
  </div>
);

export const MLVisual = () => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-end pr-16">
    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-[70px]" />
    <motion.svg width="180" height="180" viewBox="0 0 100 100" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-500/50" strokeDasharray="6 6" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-indigo-400/40" />
      <circle cx="50" cy="15" r="5" className="fill-indigo-500" />
      <circle cx="85" cy="50" r="5" className="fill-indigo-400" />
      <circle cx="50" cy="85" r="5" className="fill-indigo-500" />
      <circle cx="15" cy="50" r="5" className="fill-indigo-400" />
      <path d="M 50 15 L 85 50 L 50 85 L 15 50 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-indigo-400/60" />
    </motion.svg>
  </div>
);

export const DeepLearningVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-[70px]" />
    <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex gap-8">
      {[1, 2, 3].map(layer => (
        <div key={layer} className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map(node => (
            <motion.div 
              key={node}
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: (layer * 0.2) + (node * 0.1) }}
              className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] border border-white/20"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const GenAIVisual = () => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-end pr-8">
    <div className="absolute top-1/2 right-12 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[90px]" />
    <motion.div 
      animate={{ rotate: 360, scale: [1, 1.05, 1] }}
      transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      className="w-72 h-72 border-2 border-dashed border-purple-400/50 rounded-full flex items-center justify-center relative drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    >
      <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl" />
      <motion.div 
        animate={{ rotate: -720 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="w-48 h-48 border-[1.5px] border-purple-300/40 rounded-full flex items-center justify-center shadow-[inset_0_0_30px_rgba(168,85,247,0.2)]"
      >
          <div className="w-24 h-24 bg-purple-400/30 rounded-full blur-xl shadow-[0_0_40px_rgba(168,85,247,0.5)]" />
      </motion.div>
    </motion.div>
  </div>
);

export const BackendVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-[70px]" />
    <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-5 opacity-90">
      {[1, 2, 3].map(i => (
        <motion.div 
          key={i}
          animate={{ x: [0, -10, 0], borderColor: ['rgba(245,158,11,0.4)', 'rgba(245,158,11,0.8)', 'rgba(245,158,11,0.4)'] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          className="w-40 h-10 border-2 border-amber-500/40 rounded-lg bg-amber-500/10 flex items-center px-4 gap-3 shadow-[0_0_15px_rgba(245,158,11,0.2)] backdrop-blur-sm"
        >
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" 
          />
          <div className="w-16 h-1.5 rounded-full bg-amber-400/40" />
        </motion.div>
      ))}
    </div>
  </div>
);

export const DatabaseVisual = () => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-end pr-16">
    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-rose-500/20 rounded-full blur-[70px]" />
    <div className="flex flex-col gap-2 opacity-90">
      {[1, 2, 3, 4].map((disk) => (
        <motion.div
          key={disk}
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: disk * 0.4 }}
          className="w-32 h-10 border-2 border-rose-400/60 rounded-[50%] bg-gradient-to-b from-rose-500/20 to-rose-600/5 relative -mt-5 shadow-[0_10px_20px_rgba(225,29,72,0.3)] backdrop-blur-sm"
        />
      ))}
    </div>
  </div>
);

export const ToolsVisual = () => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-end pr-12">
    <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 bg-slate-500/20 rounded-full blur-[70px]" />
    <motion.svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400/70 drop-shadow-[0_0_15px_rgba(148,163,184,0.4)]" animate={{ rotate: 180, scale: [1, 1.05, 1] }} transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity, ease: "easeInOut"} }}>
      <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" strokeWidth="0.5" />
      <circle cx="12" cy="12" r="4" strokeWidth="1" className="fill-slate-500/10" />
    </motion.svg>
  </div>
);
