import React, { useState } from 'react';
import { skillsData } from '../constants';
import AnimatedWrapper from './AnimatedWrapper';

interface SkillsProps {
    id: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
    const [flippedCard, setFlippedCard] = useState<string | null>(null);

    const handleCardClick = (title: string) => {
        setFlippedCard(flippedCard === title ? null : title);
    };
  
    return (
        <section id={id} className="py-20 px-8 bg-white dark:bg-[#1F243A] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <AnimatedWrapper>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-[#FF7A00] uppercase">Technical Expertise</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] dark:text-white mt-2 mb-16">
                        Skills & Technologies
                        </h2>
                    </div>
                </AnimatedWrapper>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <AnimatedWrapper key={category.title} delay={`delay-${200 + index * 100}`}>
                            <div className="perspective h-72 w-full cursor-pointer" onClick={() => handleCardClick(category.title)}>
                                <div className={`relative w-full h-full duration-700 transform-style-3d ${flippedCard === category.title ? 'rotate-y-180' : ''}`}>
                                    {/* Front Face */}
                                    <div className="absolute w-full h-full backface-hidden rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-[#1F243A] shadow-lg hover:shadow-xl dark:hover:shadow-orange-500/30 flex flex-col items-center justify-center p-6 text-center transition-shadow duration-300">
                                        <category.icon className="w-16 h-16 text-orange-500 dark:text-orange-400 mb-4 transition-colors duration-300" />
                                        <h4 className="text-xl font-bold text-[#1A1F36] dark:text-white transition-colors duration-300">{category.title}</h4>
                                        <p className="text-sm text-[#555555] dark:text-gray-400 mt-2 transition-colors duration-300">Click to see skills</p>
                                    </div>

                                    {/* Back Face - Updated with Tags/Pills */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-[#1F243A] shadow-lg flex flex-col p-6 items-center">
                                        <h4 className="text-xl font-bold text-orange-500 dark:text-orange-400 mb-4 text-center transition-colors duration-300 flex-shrink-0">{category.title}</h4>
                                        <div className="w-full flex-grow overflow-y-auto space-y-3 pr-2">
                                            {category.skills.map((skillLine) => {
                                                const parts = skillLine.split(':');
                                                const hasSubCategory = parts.length > 1;
                                                const subCategory = hasSubCategory ? parts[0].trim() : null;
                                                const skillsList = (hasSubCategory ? parts[1] : parts[0]).split(',').map(s => s.trim());

                                                return (
                                                    <div key={skillLine}>
                                                        {subCategory && (
                                                            <h5 className="font-semibold text-sm text-[#555555] dark:text-gray-400 mb-2">{subCategory}</h5>
                                                        )}
                                                        <div className="flex flex-wrap gap-2">
                                                            {skillsList.map(skill => (
                                                                <span key={skill} className="bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs font-semibold px-3 py-1 rounded-full">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;