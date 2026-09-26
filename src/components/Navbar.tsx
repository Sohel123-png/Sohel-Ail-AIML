import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { GithubIcon as Github } from './icons';
import { cn } from '../utils/cn';
import { personalInfo } from '../data';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.classList.add('light');
      setIsLightMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
    setIsLightMode(!isLightMode);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#work' },
    { name: 'Approach', href: '#approach' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-transparent',
        isScrolled ? 'bg-background/60 backdrop-blur-xl border-primary/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-accent to-blue-400 text-primary font-bold flex items-center justify-center rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-accent/25 group-hover:scale-105">
            SA
          </div>
          <div className="flex items-center gap-2 hidden sm:flex opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="font-bold text-lg tracking-tight uppercase">Sohel Ali</span>
            <span className="text-secondary/50 font-light">/</span>
            <span className="text-secondary font-medium tracking-wide">AI-ML</span>
          </div>
        </a>

        {/* Desktop Nav - Pill shaped container */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/50 backdrop-blur-md border border-primary/5 rounded-full p-1.5 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-secondary hover:text-primary hover:bg-primary/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-primary/5 text-secondary hover:text-primary hover:border-primary/20 transition-all"
            aria-label="Toggle Theme"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-primary/5 text-secondary hover:text-primary hover:border-primary/20 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-primary/5 text-secondary hover:text-primary hover:border-primary/20 transition-all"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-background font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary w-10 h-10 flex items-center justify-center bg-surface border border-primary/5 rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-[400px] py-6' : 'max-h-0 py-0'
        )}
      >
        <div className="flex flex-col px-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-primary/5 my-2" />
          <div className="flex gap-4">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-surface border border-primary/10 rounded-xl text-primary font-medium"
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-background font-bold rounded-xl"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
