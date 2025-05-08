"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  hoverToActivate?: boolean;
  speed?: number;
  randomChars?: string;
}

export default function ScrambleText({
  text,
  className = '',
  hoverToActivate = false,
  speed = 50,
  randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalTextRef = useRef<string>(text);
  const prevHoverState = useRef<boolean>(hoverToActivate);
  
  const scrambleText = useCallback(() => {
    let iteration = 0;
    const maxIterations = 10;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Start scrambling
    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => {
        return originalTextRef.current
          .split('')
          .map((char, index) => {
            // If it's a space, preserve it
            if (char === ' ') return ' ';
            
            // If the iteration is high enough, reveal the original character
            if (index < iteration / (maxIterations / originalTextRef.current.length)) {
              return originalTextRef.current[index];
            }
            
            // Otherwise show a random character
            return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
          })
          .join('');
      });
      
      // Stop when we reach max iterations
      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalTextRef.current);
        setIsScrambling(false);
      }
      
      iteration += 1;
    }, speed);
  }, [randomChars, speed]);
  
  // Update the original text ref if text prop changes
  useEffect(() => {
    originalTextRef.current = text;
    if (!isScrambling) {
      setDisplayText(text);
    }
  }, [text, isScrambling]);
  
  // Effect to trigger scramble when hoverToActivate changes
  useEffect(() => {
    // Trigger scramble when hover state becomes true
    if (hoverToActivate && !prevHoverState.current && !isScrambling) {
      setIsScrambling(true);
      scrambleText();
    }
    
    prevHoverState.current = hoverToActivate;
  }, [hoverToActivate, isScrambling, scrambleText]);
  
  // Handle mouseEnter for direct hover on the text (fallback behavior)
  const handleMouseEnter = () => {
    if (!isScrambling) {
      setIsScrambling(true);
      scrambleText();
    }
  };
  
  return (
    <span 
      onMouseEnter={handleMouseEnter}
      className={className}
    >
      {displayText}
    </span>
  );
} 