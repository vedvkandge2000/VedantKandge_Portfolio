import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-[#1F243A] text-center py-12 px-8 transition-colors duration-300">
        <h3 className="text-2xl md:text-3xl dark:text-glow text-[#1A1F36] dark:text-white">
            Building tomorrow's technology
        </h3>
        <h3 className="text-2xl md:text-3xl dark:text-glow text-[#1A1F36] dark:text-white mt-2">
            one line of code at a time
        </h3>
        <p className="text-[#555555] dark:text-gray-500 mt-8 text-sm">
            &copy; {currentYear} Vedant Kandge. All Rights Reserved.
        </p>
    </footer>
  );
};

export default Footer;