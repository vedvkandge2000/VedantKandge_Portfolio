import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
  opacity: number;
}

interface ConfettiAnimationProps {
  isActive: boolean;
  onComplete?: () => void;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ isActive, onComplete }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const colors = [
    '#FF7A00', // Orange
    '#00BFA5', // Teal
    '#FFD700', // Gold
    '#FF6B6B', // Red
    '#4ECDC4', // Mint
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FFEAA7', // Yellow
  ];

  useEffect(() => {
    if (!isActive) {
      setConfetti([]);
      return;
    }

    // Create confetti pieces
    const pieces: ConfettiPiece[] = [];
    const numPieces = 50;

    for (let i = 0; i < numPieces; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        opacity: 1,
      });
    }

    setConfetti(pieces);

    // Animation loop
    const animate = () => {
      setConfetti(prevConfetti => {
        const updated = prevConfetti.map(piece => ({
          ...piece,
          x: piece.x + piece.vx,
          y: piece.y + piece.vy,
          rotation: piece.rotation + piece.rotationSpeed,
          vy: piece.vy + 0.1, // gravity
          opacity: piece.y > window.innerHeight * 0.8 ? piece.opacity - 0.02 : piece.opacity,
        })).filter(piece => piece.opacity > 0 && piece.y < window.innerHeight + 100);

        if (updated.length === 0) {
          onComplete?.();
          return [];
        }

        return updated;
      });
    };

    const interval = setInterval(animate, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: '50%',
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.opacity,
            boxShadow: `0 0 ${piece.size / 2}px ${piece.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiAnimation; 