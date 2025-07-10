import React from 'react';

const AboutIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00BFA5" />
          <stop offset="100%" stopColor="#1A1F36" />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#1A1F36" />
        </linearGradient>
      </defs>
      
      {/* Background shapes */}
      <path d="M50 0 H350 A50 50 0 0 1 400 50 V250 A50 50 0 0 1 350 300 H50 A50 50 0 0 1 0 250 V50 A50 50 0 0 1 50 0 Z" fill="#1F243A" opacity="0.5" />
      
      {/* Central glowing element */}
      <circle cx="200" cy="150" r="80" fill="url(#grad2)" opacity="0.7" />
      <circle cx="200" cy="150" r="60" fill="url(#grad1)" opacity="0.8" />
      
      {/* Abstract code/data lines */}
      <path d="M50 80 Q 150 40, 200 150 T 350 220" stroke="#00BFA5" strokeWidth="2" fill="none" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="20s" repeatCount="indefinite"/>
      </path>
      <path d="M50 220 Q 150 260, 200 150 T 350 80" stroke="#FF7A00" strokeWidth="2" fill="none" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="1000" dur="20s" repeatCount="indefinite"/>
      </path>
      
      {/* Floating particles */}
      <circle cx="80" cy="50" r="5" fill="#FF7A00" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0 0; 5 10; 0 0" dur="8s" repeatCount="indefinite" />
      </circle>
      <rect x="300" y="230" width="10" height="10" rx="2" fill="#00BFA5">
        <animateTransform attributeName="transform" type="translate" values="0 0; -10 -15; 0 0" dur="10s" repeatCount="indefinite" />
      </rect>
       <circle cx="320" cy="70" r="3" fill="white" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" values="0 0; 15 -5; 0 0" dur="6s" repeatCount="indefinite" />
      </circle>
       <rect x="70" y="250" width="8" height="8" rx="2" fill="#FF7A00" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0 0; -5 8; 0 0" dur="12s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
};

export default AboutIllustration;
