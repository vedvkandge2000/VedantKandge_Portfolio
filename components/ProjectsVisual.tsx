import React from 'react';
import { BrainCircuit, Code2, Database, GitBranch, Cloud, Layers, Cpu, Server, Bot, Terminal } from 'lucide-react';

const icons = [
  { Icon: Code2, delay: '0s' },
  { Icon: Database, delay: '0.2s' },
  { Icon: Cloud, delay: '0.4s' },
  { Icon: GitBranch, delay: '0.6s' },
  { Icon: Layers, delay: '0.8s' },
  { Icon: Cpu, delay: '1s' },
  { Icon: Server, delay: '1.2s' },
  { Icon: BrainCircuit, delay: '1.4s' },
  { Icon: Bot, delay: '1.6s' },
  { Icon: Terminal, delay: '1.8s' },
  { Icon: GitBranch, delay: '2s' },
  { Icon: Database, delay: '2.2s' },
];

const ProjectsVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A1F36] p-4 sm:p-6 md:p-8 rounded-lg overflow-hidden relative shadow-inner">
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
        {Array.from({ length: 96 }).map((_, i) => {
          const IconComponent = icons[i % icons.length].Icon;
          const delay = `${(i % 12) * 0.2}s`;
          return (
            <div
              key={i}
              className="w-full h-full aspect-square flex items-center justify-center"
            >
              <IconComponent 
                className="text-teal-400/30 animate-pulse-fade" 
                style={{ animationDelay: delay }}
                size="100%"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F36] via-transparent to-transparent"></div>
    </div>
  );
};

export default ProjectsVisual;
