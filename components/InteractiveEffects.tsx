import React, { useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';
import ConfettiAnimation from './ConfettiAnimation';
import SmileyEasterEgg from './SmileyEasterEgg';

const InteractiveEffects: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSmiley, setShowSmiley] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only track printable characters
      if (e.key.length === 1) {
        const newText = typedText + e.key;
        setTypedText(newText);

        // Check for Easter egg trigger
        if (newText.includes(':)')) {
          setShowSmiley(true);
          setTypedText(''); // Reset after triggering
        }

        // Keep only last 10 characters to prevent memory issues
        if (newText.length > 10) {
          setTypedText(newText.slice(-10));
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [typedText]);

  // Function to trigger confetti (will be called from other components)
  const triggerConfetti = () => {
    setShowConfetti(true);
  };

  // Expose the trigger function globally
  useEffect(() => {
    (window as any).triggerConfetti = triggerConfetti;
    return () => {
      delete (window as any).triggerConfetti;
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      <ConfettiAnimation 
        isActive={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />
      
      <SmileyEasterEgg 
        isActive={showSmiley} 
        onComplete={() => setShowSmiley(false)} 
      />
    </>
  );
};

export default InteractiveEffects; 