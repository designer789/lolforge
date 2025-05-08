"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';

export type SectionAnimationType = 
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom';

export interface SectionTransitionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  type?: SectionAnimationType;
  delay?: number;
  threshold?: number;
  initiallyVisible?: boolean;
}

export default function SectionTransition({
  children,
  id,
  className = '',
  type = 'fade',
  delay = 0,
  threshold = 0.1,
  initiallyVisible = true,
}: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (initiallyVisible) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, initiallyVisible]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (type) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-down':
        return 'animate-slide-down';
      case 'slide-left':
        return 'animate-slide-left';
      case 'slide-right':
        return 'animate-slide-right';
      case 'zoom':
        return isVisible ? 'animate-zoom-in' : 'scale-90 opacity-0';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'} transition-all`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '800ms',
      }}
    >
      {children}
    </section>
  );
} 