import React from 'react';

const ContactIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="contactGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1A1F36" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Glow */}
      <rect width="400" height="300" fill="url(#contactGlow)" />

      {/* Central node */}
      <circle cx="200" cy="150" r="20" fill="#FF7A00" />
      <circle cx="200" cy="150" r="25" stroke="#FF7A00" strokeWidth="2" fill="none" opacity="0.5">
         <animate attributeName="r" from="25" to="40" dur="3s" repeatCount="indefinite" />
         <animate attributeName="opacity" from="0.5" to="0" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Satellite nodes and connecting lines */}
      {[
        { cx: 80, cy: 80, r: 12, dur: "8s" },
        { cx: 320, cy: 80, r: 15, dur: "10s" },
        { cx: 300, cy: 250, r: 10, dur: "7s" },
        { cx: 100, cy: 230, r: 18, dur: "9s" },
        { cx: 50, cy: 180, r: 8, dur: "12s" },
        { cx: 350, cy: 160, r: 13, dur: "6s" },
      ].map((node, i) => (
        <g key={i}>
          <line x1="200" y1="150" x2={node.cx} y2={node.cy} stroke="#00BFA5" strokeWidth="1" opacity="0.6" strokeDasharray="4 2">
             <animate attributeName="stroke-dashoffset" from="0" to="100" dur={node.dur} repeatCount="indefinite" />
          </line>
          <circle cx={node.cx} cy={node.cy} r={node.r} fill="#00BFA5" opacity="0.9" />
           <circle cx={node.cx} cy={node.cy} r={node.r/2} fill="#FFFFFF" opacity="0.8" />
        </g>
      ))}

    </svg>
  );
};

export default ContactIllustration;
