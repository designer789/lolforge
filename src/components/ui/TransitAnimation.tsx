"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';

export type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'
  | 'flip-down'
  | 'flip-left'
  | 'flip-right';

export interface TransitAnimationProps {
  children: ReactNode;
  type: AnimationType;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number; // 0 to 1, how much of the element needs to be visible
  className?: string;
  once?: boolean; // animate only once or every time element becomes visible
}

export default function TransitAnimation({
  children,
  type,
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
  once = true,
}: TransitAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Generate the initial and animation classes based on the type
  const getAnimationClasses = () => {
    // Initial state classes
    const initialClasses = {
      'fade-up': 'opacity-0 translate-y-10',
      'fade-down': 'opacity-0 -translate-y-10',
      'fade-left': 'opacity-0 translate-x-10',
      'fade-right': 'opacity-0 -translate-x-10',
      'zoom-in': 'opacity-0 scale-90',
      'zoom-out': 'opacity-0 scale-110',
      'flip-up': 'opacity-0 rotateX-90',
      'flip-down': 'opacity-0 -rotateX-90',
      'flip-left': 'opacity-0 rotateY-90',
      'flip-right': 'opacity-0 -rotateY-90',
    };

    return initialClasses[type] || '';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If we've already animated once and once is true, don't animate again
        if (hasAnimated && once) return;
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  // Custom class for transform-origin if needed
  const getTransformOriginClass = () => {
    if (type.includes('flip')) {
      return type === 'flip-up' || type === 'flip-down'
        ? 'origin-center'
        : 'origin-center';
    }
    return '';
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transition-all
        ${getTransformOriginClass()}
        ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0' : getAnimationClasses()}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
} 