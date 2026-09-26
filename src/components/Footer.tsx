import { personalInfo } from '../data';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-medium text-secondary/60">
          © {new Date().getFullYear()} {personalInfo.name}
        </span>
        <span className="text-sm font-medium text-secondary/40 text-center md:text-right">
          AI/ML · Data Science · GenAI · Backend
        </span>
      </div>
    </footer>
  );
};
