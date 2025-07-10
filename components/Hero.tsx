import React from 'react';
import { socialLinks } from '../constants';
import { ChevronsDown, Mail, Linkedin, Github, Code } from 'lucide-react';
import TypingEffect from './TypingEffect';
import PlexusBackground from './PlexusBackground';

interface HeroProps {
    id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const handleButtonClick = () => {
    if ((window as any).triggerConfetti) {
      (window as any).triggerConfetti();
    }
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center bg-[#1A1F36] p-8 overflow-hidden">
      <PlexusBackground />

      <div className="relative z-10 max-w-4xl w-full text-left">
        <h1 className="text-6xl md:text-8xl font-black text-white text-glow opacity-0 animate-fade-in-down">
          Vedant Kandge
        </h1>
        <TypingEffect
            text="Software Engineer | Data & AI Enthusiast"
            className="text-2xl md:text-4xl font-semibold text-gray-200 mt-4 h-12 opacity-0 animate-fade-in-up delay-300 flex items-center"
            speed={80}
        />
        <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl opacity-0 animate-fade-in-up delay-500">
          Crafting scalable solutions with modern technologies—from microservices to machine learning.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6 opacity-0 animate-fade-in-up delay-700">
            <a 
              href="#contact" 
              className="gradient-button text-white font-semibold py-3 px-6 rounded-lg shadow-lg interactive"
              onClick={handleButtonClick}
            >
                Contact Me
            </a>
            <div className="flex items-center space-x-6">
                <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="text-gray-400 hover:text-[#FF7A00] hover:scale-110 transition-all duration-300 interactive">
                <Mail size={28} />
                </a>
                <a href={`${socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#FF7A00] hover:scale-110 transition-all duration-300 interactive">
                <Linkedin size={28} />
                </a>
                <a href={`${socialLinks.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-[#FF7A00] hover:scale-110 transition-all duration-300 interactive">
                <Github size={28} />
                </a>
                <a href={`${socialLinks.leetcode}`} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-gray-400 hover:text-[#FF7A00] hover:scale-110 transition-all duration-300 interactive">
                <Code size={28} />
                </a>
            </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        aria-label="Scroll to about section" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-[#FF7A00] transition-colors animate-bounce-slow interactive"
        onClick={handleButtonClick}
      >
        <ChevronsDown size={32} />
      </a>
    </section>
  );
};

export default Hero;