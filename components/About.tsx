import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

interface AboutProps {
    id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-8 bg-white dark:bg-[#1F243A] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <AnimatedWrapper animation="animate-fade-in-right">
            <div className="text-left">
            <h3 className="text-lg font-semibold text-[#FF7A00] uppercase">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] dark:text-white mt-2">
                Building the Future of Technology
            </h2>
            <div className="text-[#333333] dark:text-gray-300 text-lg mt-6 space-y-4">
                <p>
                I am a passionate Software Engineer with experience across cloud-native microservices, backend engineering, and AI/ML solutions. Having worked at Persistent Systems and Lam Research Corporation, I combine strong technical skills with a commitment to creating impactful products.
                </p>
                <p>
                Currently pursuing my Master's at Santa Clara University, I'm focused on advancing my expertise in distributed systems and machine learning while contributing to cutting-edge research in human-computer interaction.
                </p>
            </div>
            </div>
        </AnimatedWrapper>
        <AnimatedWrapper animation="animate-fade-in-left" delay="delay-200">
          <div className="w-full flex items-center justify-center">
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 gradient-border-bg shadow-2xl dark:shadow-orange-500/30">
                <div className="w-full h-full bg-[#1F243A] rounded-full overflow-hidden">
                   <img 
                    src="/profile.jpg" 
                    alt="Vedant Kandge" 
                    className="w-full h-full object-cover"
                   />
                </div>
             </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default About;