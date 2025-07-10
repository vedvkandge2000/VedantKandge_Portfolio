import React from 'react';
import { experienceData } from '../constants';
import AnimatedWrapper from './AnimatedWrapper';

interface ExperienceProps {
    id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-8 bg-white dark:bg-[#1F243A] transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <AnimatedWrapper>
            <h3 className="text-lg font-semibold text-[#FF7A00] uppercase text-center">Professional Experience</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] dark:text-white mt-2 mb-16 text-center">
            Career Journey
            </h2>
        </AnimatedWrapper>
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700/50" aria-hidden="true"></div>

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <AnimatedWrapper key={index} animation={index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'}>
                <div className="relative flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                    <div className="w-1/2 px-8">
                    <div className={`text-left ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                        <h4 className="text-2xl font-bold text-[#1A1F36] dark:text-white">{job.role}</h4>
                        <p className="text-lg font-semibold text-[#1A1F36] dark:text-white mt-1">{job.company}</p>
                        <p className="text-sm text-[#555555] dark:text-gray-400 mb-4">{job.date}</p>
                        <ul className="list-disc list-outside text-[#333333] dark:text-gray-300 space-y-2 marker:text-orange-500 dark:marker:text-orange-400 inline-block text-left">
                        {job.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                    
                    {/* The circle and number */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#1F243A] border-2 border-orange-500 dark:border-orange-400 flex items-center justify-center font-bold text-[#1A1F36] dark:text-white z-10">
                    {index + 1}
                    </div>
                    
                    {/* Spacer div */}
                    <div className="w-1/2 px-8"></div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;