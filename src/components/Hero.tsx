import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, FileText, Network, Bot, BrainCircuit, Code2 } from 'lucide-react';
import { personalInfo } from '../data';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Absolute Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[0%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[0%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-8 items-center relative z-10 w-full h-full">
        
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6 relative z-20"
        >
          <div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-primary leading-[1.15] drop-shadow-sm"
              style={{ x: useTransform(smoothMouseX, [-1, 1], [-5, 5]), y: useTransform(smoothMouseY, [-1, 1], [-5, 5]) }}
            >
              Building<br />
              intelligent<br />
              systems from<br />
              <span className="text-[#10b981] drop-shadow-md">data to<br />deployment.</span>
            </motion.h1>
          </div>

          <p className="text-base md:text-lg text-secondary max-w-xl leading-relaxed mt-2 font-medium">
            I'm Sohel Ali — an AI/ML-focused developer working across Data Science, 
            Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, 
            LLMs, RAG, Agentic AI and Python backend engineering.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#work"
              className="px-8 py-3.5 bg-primary text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] duration-300"
            >
              Explore Projects
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-surface/50 backdrop-blur-md border border-primary/10 text-primary font-medium rounded-full hover:bg-primary/5 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 duration-300 shadow-md"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT: 3D Professional Photo Environment */}
        <div className="relative max-w-lg mx-auto lg:ml-auto w-full flex justify-center items-end h-[450px] md:h-[550px] [transform-style:preserve-3d] mt-10 lg:mt-0">
          
          {/* Orbital Rings (Layer -1) */}
          <motion.div 
            style={{ rotateX, rotateY, x: useTransform(smoothMouseX, [-1, 1], [-15, 15]), y: useTransform(smoothMouseY, [-1, 1], [-15, 15]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none [transform-style:preserve-3d]"
          >
            <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-primary/5 rounded-full" style={{ transform: 'translateZ(-40px)' }} />
            <motion.div animate={{ rotateZ: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} className="absolute inset-12 border border-accent/10 rounded-full border-dashed" style={{ transform: 'translateZ(-20px)' }} />
            
            {/* Neural Network Nodes */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
              <circle cx="15" cy="25" r="1.5" className="fill-accent" />
              <circle cx="85" cy="35" r="2" className="fill-purple-400" />
              <circle cx="75" cy="85" r="1.5" className="fill-accent" />
              <circle cx="25" cy="75" r="2" className="fill-purple-400" />
              <path d="M 15 25 L 85 35 L 75 85 L 25 75 Z" className="stroke-accent/30" strokeWidth="0.2" fill="none" />
              <path d="M 15 25 L 25 75 M 85 35 L 75 85" className="stroke-purple-400/20" strokeWidth="0.2" fill="none" />
            </svg>
          </motion.div>

          {/* The Subject (Layer 0) */}
          <motion.div 
            style={{ x: useTransform(smoothMouseX, [-1, 1], [-10, 10]), y: useTransform(smoothMouseY, [-1, 1], [-10, 10]) }}
            className="relative z-10 w-full h-full flex justify-center items-end drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/15 rounded-full blur-[70px] pointer-events-none mix-blend-screen" />
            <img 
              src="/profile.png" 
              alt="Sohel Ali" 
              className="w-auto h-[105%] object-contain object-bottom pointer-events-none"
            />
          </motion.div>

          {/* Floating Elegant Badges (Layer +1) */}
          
          {/* Top Left: Multi-Agent Systems */}
          <motion.div 
            style={{ x: useTransform(smoothMouseX, [-1, 1], [15, -15]), y: useTransform(smoothMouseY, [-1, 1], [15, -15]), translateZ: 30 }}
            className="absolute top-[15%] left-0 z-20"
          >
            <div className="glass-card px-3 py-2 flex items-center gap-2 rounded-full shadow-xl border border-white/10 animate-float bg-background/80 backdrop-blur-md">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Network className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-[11px] font-semibold text-primary/90 pr-1 tracking-wide">Multi-Agent Systems</span>
            </div>
          </motion.div>

          {/* Top Right: LLMs & RAG */}
          <motion.div 
            style={{ x: useTransform(smoothMouseX, [-1, 1], [25, -25]), y: useTransform(smoothMouseY, [-1, 1], [25, -25]), translateZ: 50 }}
            className="absolute top-[25%] -right-4 z-20"
          >
            <div className="glass-card px-3 py-2 flex items-center gap-2 rounded-full shadow-xl border border-white/10 animate-float-delayed bg-background/80 backdrop-blur-md" style={{ animationDelay: '1s' }}>
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <span className="text-[11px] font-semibold text-primary/90 pr-1 tracking-wide">LLMs & RAG</span>
            </div>
          </motion.div>

          {/* Middle Left: Neural Networks */}
          <motion.div 
            style={{ x: useTransform(smoothMouseX, [-1, 1], [20, -20]), y: useTransform(smoothMouseY, [-1, 1], [20, -20]), translateZ: 40 }}
            className="absolute top-[50%] -left-8 z-20 hidden md:block"
          >
            <div className="glass-card px-3 py-2 flex items-center gap-2 rounded-full shadow-xl border border-white/10 animate-float bg-background/80 backdrop-blur-md" style={{ animationDelay: '2.5s' }}>
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <BrainCircuit className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-[11px] font-semibold text-primary/90 pr-1 tracking-wide">Neural Networks</span>
            </div>
          </motion.div>

          {/* Bottom Right: Python & Data */}
          <motion.div 
            style={{ x: useTransform(smoothMouseX, [-1, 1], [30, -30]), y: useTransform(smoothMouseY, [-1, 1], [30, -30]), translateZ: 60 }}
            className="absolute bottom-[20%] -right-8 z-20"
          >
            <div className="glass-card px-3 py-2 flex items-center gap-2 rounded-full shadow-xl border border-white/10 animate-float-delayed bg-background/80 backdrop-blur-md" style={{ animationDelay: '0.5s' }}>
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-[11px] font-semibold text-primary/90 pr-1 tracking-wide">Python Engineering</span>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60 hover:text-primary transition-colors cursor-pointer z-30"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};
