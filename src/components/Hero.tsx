"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrambleText from './ui/ScrambleText';

export default function Hero() {
  const [heroHeight, setHeroHeight] = useState('calc(100vh - 64px)'); // Default header height estimate
  const heroRef = useRef<HTMLElement>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    const calculateHeroHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        setHeroHeight(`calc(100vh - ${headerHeight}px)`);
      }
    };

    // Calculate on mount and on window resize
    calculateHeroHeight();
    window.addEventListener('resize', calculateHeroHeight);

    return () => {
      window.removeEventListener('resize', calculateHeroHeight);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="w-full flex flex-col items-center px-4 sm:px-6 bg-[#222222] relative overflow-hidden"
      style={{ minHeight: heroHeight }}
    >
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(-6deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) rotate(15deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(-2deg); }
        }
        
        @keyframes float-6 {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-16px) rotate(8deg); }
        }
        
        .float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        .float-2 {
          animation: float-2 7s ease-in-out infinite;
        }
        
        .float-3 {
          animation: float-3 8s ease-in-out infinite;
        }
        
        .float-4 {
          animation: float-4 6.5s ease-in-out infinite;
        }
        
        .float-5 {
          animation: float-5 7.5s ease-in-out infinite;
        }
        
        .float-6 {
          animation: float-6 5.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[45%_55%] gap-8 md:gap-16 items-center w-full py-12 md:py-0 md:my-auto">
        <div className="space-y-6 md:space-y-10">
          <div className="transition-all duration-500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-relaxed text-[#ebd57c]">
              LOL: From Stupid Idea to 3D Gold.
            </h1>
          </div>
          
          <div className="transition-all duration-500">
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              lol.Forge is the ultimate AI-powered Meme 3D creation forge, where your dumbest, dankest ideas come to life in seconds. Just type or upload your meme idea, and boom—instant 3D chaos.
            </p>
          </div>
          
          <div className="transition-all duration-500">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredButton('create')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Link 
                  href="https://dexscreener.com/ethereum/0x6a0e7d016abe9cc171906864a4a4a7bf2d990b0b" target="_blank" rel="noopener noreferrer"
                  className="bg-[#ebd57c] hover:bg-[#d5c06c] text-[#222222] px-5 sm:px-8 py-3 sm:py-4 font-medium transition-colors inline-flex justify-center text-base sm:text-lg relative z-10 w-full sm:w-auto border border-[#ebd57c] uppercase tracking-wider group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 transition-transform duration-300 ease-in-out"
                >
                  <span className="mr-2">→</span>
                  <ScrambleText text="Buy Now" hoverToActivate={hoveredButton === 'create'} />
                  <span className="ml-2">←</span>
                </Link>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-full h-full border border-[#ebd57c] z-0"></div>
              </div>
              
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredButton('explore')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Link 
                  href="https://lol-forge.gitbook.io/docs" target="_blank" rel="noopener noreferrer"
                  className="bg-[#222222] hover:bg-[#333333] text-[#ebd57c] px-5 sm:px-8 py-3 sm:py-4 font-medium transition-colors inline-flex justify-center text-base sm:text-lg relative z-10 w-full sm:w-auto border border-[#ebd57c] uppercase tracking-wider group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 transition-transform duration-300 ease-in-out"
                >
                  <span className="mr-2">→</span>
                  <ScrambleText text="Explore Docs" hoverToActivate={hoveredButton === 'explore'} />
                  <span className="ml-2">←</span>
                </Link>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-full h-full border border-[#ebd57c] z-0"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="transition-all duration-500 mt-8 md:mt-0 relative overflow-visible h-full w-full">
          <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-lg overflow-visible w-full">
            {/* Large Dominant Image (Bottom Left) - Like the Doge in reference */}
            <div className="absolute bottom-[5%] sm:bottom-[0%] md:bottom-[-5%] left-[-5%] sm:left-[-2%] md:left-[-5%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] hover:scale-105 transition-transform duration-300 z-10 overflow-visible float-1">
              <Image
                src="/p1.png"
                alt="Hero Image 1"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 180px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 380px"
                priority
              />
            </div>

            {/* Top Left - Like Pepe */}
            <div className="absolute top-[-5%] sm:top-[-8%] md:top-[-10%] left-[5%] sm:left-[8%] md:left-[5%] w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] hover:scale-110 transition-transform duration-300 overflow-visible float-2">
              <Image
                src="/p2.png"
                alt="Hero Image 2"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                priority
              />
            </div>

            {/* Top Right - Like Doge Coin */}
            <div className="absolute top-[-3%] sm:top-[-5%] md:top-[-5%] right-[0%] sm:right-[-2%] md:right-[-5%] w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[240px] xl:h-[240px] hover:scale-110 transition-transform duration-300 overflow-visible float-3">
              <Image
                src="/p5.png"
                alt="Hero Image 3"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 130px, (max-width: 768px) 160px, (max-width: 1024px) 200px, (max-width: 1280px) 220px, 240px"
                priority
              />
            </div>

            {/* Right Side - Like Rocket */}
            <div className="absolute top-[40%] sm:top-[38%] md:top-[38%] right-[-5%] sm:right-[-10%] md:right-[-15%] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[210px] xl:h-[210px] hover:scale-110 transition-transform duration-300 overflow-visible float-4">
              <Image
                src="/p4.png"
                alt="Hero Image 4"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 180px, (max-width: 1280px) 200px, 210px"
                priority
              />
            </div>

            {/* Center - Like Pixel Face */}
            <div className="absolute top-[25%] sm:top-[22%] md:top-[25%] left-[35%] sm:left-[38%] md:left-[40%] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] hover:scale-110 transition-transform duration-300 overflow-visible float-5">
              <Image
                src="/p3.png"
                alt="Hero Image 5"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 110px, (max-width: 768px) 140px, (max-width: 1024px) 170px, (max-width: 1280px) 180px, 200px"
                priority
              />
            </div>

            {/* Bottom Right - Like Bottom Pepe */}
            <div className="absolute bottom-[-2%] sm:bottom-[-3%] md:bottom-[-5%] right-[5%] sm:right-[8%] md:right-[10%] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] hover:scale-110 transition-transform duration-300 overflow-visible float-6">
              <Image
                src="/p6.png"
                alt="Hero Image 6"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
