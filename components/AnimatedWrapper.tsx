import React, { useRef, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}

const AnimatedWrapper: React.FC<Props> = ({ children, className, animation = 'animate-fade-in-up', delay = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Start animation when 15% is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className || ''} ${isVisible ? `${animation} ${delay}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
