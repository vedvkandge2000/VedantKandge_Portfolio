import React from 'react';
import { socialLinks } from '../constants';
import AnimatedWrapper from './AnimatedWrapper';
import ContactIllustration from './ContactIllustration';

interface ContactProps {
    id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const handleButtonClick = () => {
    if ((window as any).triggerConfetti) {
      (window as any).triggerConfetti();
    }
  };

  return (
    <section id={id} className="py-20 px-8 bg-[#F5F7FA] dark:bg-[#1A1F36] transition-colors duration-300">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <AnimatedWrapper animation="animate-fade-in-right">
            <div className="w-full h-80 md:h-full flex items-center justify-center rounded-lg overflow-hidden order-last md:order-first">
                <ContactIllustration className="w-full h-full object-contain" />
            </div>
        </AnimatedWrapper>
        <AnimatedWrapper animation="animate-fade-in-left" delay="delay-200">
            <div className="text-left">
            <h3 className="text-lg font-semibold text-[#FF7A00] uppercase">Let's Connect</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F36] dark:text-white mt-2">
                Ready to Collaborate
            </h2>
            <div className="text-[#333333] dark:text-gray-300 text-lg mt-6 space-y-4">
                <p>
                    I'm always excited to discuss new opportunities, collaborate on innovative projects, or share insights about software engineering and AI/ML, LLM technologies.
                </p>
                <p>
                    Whether you're looking for a skilled software engineer, seeking mentorship, or want to explore cutting-edge tech solutions, I'd love to connect.
                </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href={`mailto:${socialLinks.email}`} 
                  className="gradient-button text-white font-semibold py-3 px-6 rounded-lg shadow-lg interactive"
                  onClick={handleButtonClick}
                >
                    Get in Touch
                </a>
                <a 
                  href="https://drive.google.com/file/d/1oRfqP1kySlYo373ny3Pg0_EEa10cOJ-y/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#00BFA5] hover:bg-[#00A991] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5 interactive"
                  onClick={handleButtonClick}
                >
                    View Resume
                </a>
            </div>
            </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Contact;