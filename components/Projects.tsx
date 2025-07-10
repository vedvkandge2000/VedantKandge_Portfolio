import React from 'react';
import { projectsData } from '../constants';
import AnimatedWrapper from './AnimatedWrapper';
import { Github } from 'lucide-react';
import ProjectsVisual from './ProjectsVisual';

interface ProjectsProps {
    id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-8 bg-[#F5F7FA] dark:bg-[#1A1F36] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <AnimatedWrapper>
            <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden mb-12">
                <ProjectsVisual />
            </div>
        </AnimatedWrapper>
        <AnimatedWrapper>
            <div className="text-center">
                <h3 className="text-lg font-semibold text-[#FF7A00] uppercase">Featured Projects</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] dark:text-white mt-2 mb-12">
                Innovation in Action
                </h2>
            </div>
        </AnimatedWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedWrapper key={index} delay={`delay-${200 + index * 100}`}>
                <div className="bg-white dark:bg-[#1F243A] p-6 rounded-lg border border-gray-200 dark:border-gray-700/50 flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl dark:hover:shadow-orange-500/30 h-full">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-[#1A1F36] dark:text-white flex-1 pr-2">{project.title}</h4>
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`} className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex-shrink-0">
                                <Github size={24} />
                            </a>
                        )}
                    </div>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mt-2">Tech Stack: {project.techStack}</p>
                <p className="text-[#333333] dark:text-gray-300 mt-4 flex-grow">{project.description}</p>
                {/* <p className="text-[#333333] dark:text-gray-200 mt-4"><span className="font-semibold text-[#555555] dark:text-gray-400">Impact:</span> {project.impact}</p> */}
                </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;