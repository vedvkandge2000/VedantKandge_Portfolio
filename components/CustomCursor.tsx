import React, { useEffect, useState, useCallback, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Optimized position update using requestAnimationFrame
  const updateCursorPosition = useCallback((e: MouseEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Optimized hover detection using event delegation
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('.interactive') || 
          target.closest('a') || 
          target.closest('button') ||
          target.closest('.gradient-button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Use passive listeners for better performance
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [updateCursorPosition]);

  return (
    <>
      {/* Main cursor - optimized with transform3d for hardware acceleration */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      >
        <div
          className={`rounded-full will-change-transform ${
            isHovering
              ? 'w-12 h-12 bg-[#FF7A00]/20 border-2 border-[#FF7A00]'
              : isClicking
              ? 'w-8 h-8 bg-[#FF7A00]/30 border border-[#FF7A00]'
              : 'w-6 h-6 bg-[#FF7A00]/10 border border-[#FF7A00]/50'
          }`}
          style={{
            transition: isHovering ? 'all 0.2s ease-out' : 'all 0.1s ease-out'
          }}
        />
      </div>

      {/* Trailing cursor - simplified for better performance */}
      <div
        ref={trailingRef}
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate3d(-50%, -50%, 0)',
          transition: 'all 0.15s ease-out'
        }}
      >
        <div
          className={`rounded-full ${
            isHovering
              ? 'w-16 h-16 bg-[#FF7A00]/5 border border-[#FF7A00]/20'
              : 'w-10 h-10 bg-[#FF7A00]/5 border border-[#FF7A00]/10'
          }`}
          style={{
            transition: 'all 0.2s ease-out'
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor; 