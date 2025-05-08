"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrambleText from './ui/ScrambleText';

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-4 sm:p-6 h-full flex flex-col relative overflow-hidden">
      {/* Inset shadow overlay for 3D effect */}
      <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        {/* Raised icon box with outer shadow and top-light gradient */}
        <div className="relative rounded-lg bg-gradient-to-br from-[#333333] to-[#111111] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-8 shadow-[0_3px_6px_rgba(0,0,0,0.3),0_2px_2px_rgba(0,0,0,0.2)]">
          {/* Highlight at top edge to enhance raised appearance */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent rounded-t-lg"></div>
          {icon}
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-[#ebd57c] mb-2 sm:mb-3">
          {title}
        </h3>
        
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'One-Click 3D Meme Generation',
      description: 'Type "Wojak in a spaceship" – get a fully rendered 3D model in seconds. It\'s that stupidly easy.'
    },
    {
      icon: '📸',
      title: 'Multimodal Input',
      description: 'Input text like "Doge riding a jetpack" or upload your favorite Pepe meme—our AI gets the vibe.'
    },
    {
      icon: '🎛️',
      title: 'Live Style Tuning',
      description: 'Want your Wojak to cry harder or make your Doge chubbier? Adjust it in real-time during generation.'
    },
    {
      icon: '🕺',
      title: 'Meme-in-Motion',
      description: 'Your 3D memes can move, jump, dance, or do whatever your chaotic brain desires.'
    },
    {
      icon: '📱',
      title: 'AR Preview Support',
      description: 'See your 3D Pepe dancing on your desk through your phone—because why not?'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Update cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPositions = Math.max(0, features.length - cardsPerView + 1);
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0) ? totalPositions - 1 : prev - 1);
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev === totalPositions - 1) ? 0 : prev + 1);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX;

    // If swipe is significant enough (more than 50px)
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe right - go to previous
        handlePrev();
      } else {
        // Swipe left - go to next
        handleNext();
      }
    }

    setIsSwiping(false);
  };

  // Calculate the percentage width for each card based on cards per view
  const cardWidthPercentage = 100 / cardsPerView;

  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mx-auto text-[#ebd57c]">
            <ScrambleText text="Release Your Imagination With LOL" />
          </h2>
        </div>
        
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-10">
          <div className="relative group">
            <button 
              onClick={handlePrev}
              className="bg-[#222222] hover:bg-[#ebd57c] text-[#ebd57c] hover:text-[#222222] px-3 sm:px-5 py-2 sm:py-3 font-medium transition-colors inline-flex justify-center items-center relative z-10 border border-[#ebd57c] group-hover:translate-y-1 group-hover:translate-x-1 sm:group-hover:translate-y-2 sm:group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-full h-full border border-[#ebd57c] z-0"></div>
          </div>
          
          <div className="relative group">
            <button 
              onClick={handleNext}
              className="bg-[#222222] hover:bg-[#ebd57c] text-[#ebd57c] hover:text-[#222222] px-3 sm:px-5 py-2 sm:py-3 font-medium transition-colors inline-flex justify-center items-center relative z-10 border border-[#ebd57c] group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 transition-transform duration-300 ease-in-out"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-full h-full border border-[#ebd57c] z-0"></div>
          </div>
        </div>
        
        {/* Carousel with max width */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * cardWidthPercentage}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-none px-1 sm:px-2"
                style={{ width: `${cardWidthPercentage}%` }}
              >
                <FeatureItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          {totalPositions > 1 && (
            <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
              {Array.from({ length: totalPositions }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-none focus:outline-none transition-colors ${
                    index === currentIndex ? 'bg-[#ebd57c]' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 