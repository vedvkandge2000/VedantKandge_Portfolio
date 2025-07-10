import React from 'react';
import { educationData } from '../constants';
import AnimatedWrapper from './AnimatedWrapper';

interface EducationProps {
    id: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-8 bg-[#F5F7FA] dark:bg-[#1A1F36] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl text-center">
        <AnimatedWrapper>
            <h3 className="text-lg font-semibold text-[#FF7A00] uppercase">Education</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] dark:text-white mt-2 mb-12">
            Academic Excellence
            </h2>
        </AnimatedWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <AnimatedWrapper key={index} delay={index === 1 ? 'delay-200' : ''}>
                <div className="bg-white dark:bg-[#1F243A] p-8 rounded-lg border border-gray-200 dark:border-gray-700/50 text-left transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl dark:hover:shadow-orange-500/30 h-full">
                <h4 className="text-2xl font-bold text-[#1A1F36] dark:text-white">{edu.institution}</h4>
                <p className="text-xl font-semibold text-[#1A1F36] dark:text-white mt-2">{edu.degree}</p>
                <div className="flex justify-between text-[#555555] dark:text-gray-400 mt-4">
                    <span>{edu.gpa}</span>
                    <span>{edu.date}</span>
                </div>
                <p className="text-[#333333] dark:text-gray-300 mt-4">{edu.specialization}</p>
                </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;