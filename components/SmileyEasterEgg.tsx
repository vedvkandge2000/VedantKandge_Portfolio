import React, { useEffect, useState } from 'react';

interface SmileyEasterEggProps {
  isActive: boolean;
  onComplete?: () => void;
}

const SmileyEasterEgg: React.FC<SmileyEasterEggProps> = ({ isActive, onComplete }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    // Random position
    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = Math.random() * (window.innerHeight - 100) + 50;
    setPosition({ x, y });

    // Animate in
    setScale(0);
    setOpacity(0);

    const animateIn = () => {
      setScale(1);
      setOpacity(1);
    };

    const timer = setTimeout(animateIn, 100);

    // Animate out after 3 seconds
    const animateOut = () => {
      setScale(0);
      setOpacity(0);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    };

    const outTimer = setTimeout(animateOut, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(outTimer);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9996] transition-all duration-500 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
      }}
    >
      <div className="relative">
        {/* Main smiley face */}
        <div className="w-16 h-16 bg-[#FF7A00] rounded-full flex items-center justify-center shadow-lg">
          {/* Eyes */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"></div>
          
          {/* Smile */}
          <div className="absolute bottom-3 w-8 h-4 border-b-2 border-white rounded-full"></div>
        </div>

        {/* Sparkles around the smiley */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"
            style={{
              left: `${Math.cos((i * 60) * Math.PI / 180) * 30 + 24}px`,
              top: `${Math.sin((i * 60) * Math.PI / 180) * 30 + 24}px`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SmileyEasterEgg; 