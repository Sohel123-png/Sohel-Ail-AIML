import { 
  SiPython, SiJavascript, SiReact, 
  SiTailwindcss, SiFastapi, SiDjango, SiFlask, 
  SiPostgresql, SiSqlite, SiMongodb, SiDocker, 
  SiGithub, SiGit, SiJupyter, SiScikitlearn, 
  SiTensorflow, SiPytorch, SiPandas, SiNumpy
} from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';

export const TechIcon = ({ name, className = "w-4 h-4" }: { name: string, className?: string }) => {
  const iconMap: Record<string, { icon: any, color: string }> = {
    'Python': { icon: SiPython, color: '#3776AB' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
    'React': { icon: SiReact, color: '#61DAFB' },
    'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
    'FastAPI': { icon: SiFastapi, color: '#009688' },
    'Django': { icon: SiDjango, color: '#092E20' },
    'Django REST Framework': { icon: SiDjango, color: '#092E20' },
    'Flask': { icon: SiFlask, color: '#000000' },
    'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
    'SQLite': { icon: SiSqlite, color: '#003B57' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Docker': { icon: SiDocker, color: '#2496ED' },
    'GitHub': { icon: SiGithub, color: '#181717' },
    'Git': { icon: SiGit, color: '#F05032' },
    'Jupyter': { icon: SiJupyter, color: '#F37626' },
    'Jupyter Notebook': { icon: SiJupyter, color: '#F37626' },
    'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
    'scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
    'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
    'PyTorch': { icon: SiPytorch, color: '#EE4C2C' },
    'Pandas': { icon: SiPandas, color: '#150458' },
    'pandas': { icon: SiPandas, color: '#150458' },
    'NumPy': { icon: SiNumpy, color: '#013243' },
    'SQL': { icon: BsDatabase, color: '#336791' },
    'Deep Learning': { icon: BiNetworkChart, color: '#3b82f6' },
    'Neural Networks': { icon: BiNetworkChart, color: '#3b82f6' },
    'Machine Learning': { icon: AiOutlineRobot, color: '#10b981' },
    'ML': { icon: AiOutlineRobot, color: '#10b981' },
    'Generative AI': { icon: AiOutlineRobot, color: '#a855f7' },
    'LLMs': { icon: AiOutlineRobot, color: '#a855f7' },
    'Agents': { icon: AiOutlineRobot, color: '#a855f7' },
    'Multi-Agent': { icon: AiOutlineRobot, color: '#a855f7' },
    'Classification': { icon: AiOutlineRobot, color: '#10b981' },
    'Regression': { icon: AiOutlineRobot, color: '#10b981' },
    'Prediction': { icon: AiOutlineRobot, color: '#10b981' },
    'Analysis': { icon: BiNetworkChart, color: '#3b82f6' },
    'Analytics': { icon: BsDatabase, color: '#336791' },
  };

  const item = iconMap[name];
  if (!item) {
    return <BsDatabase className={className} />;
  }

  return (
    <div style={{ color: item.color }} className="flex items-center justify-center">
      <item.icon className={className} />
    </div>
  );
};
