"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ScrambleText from './ui/ScrambleText';

// Define the type for the animation data
type LottieAnimationData = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Array<{
    id: string;
    w?: number;
    h?: number;
    t?: string;
    u?: string;
    p?: string;
    e?: number;
    layers?: Array<{
      ty: number;
      sc: string;
      refId: string;
      ks: {
        p: { a: number; k: number[] };
        a: { a: number; k: number[] };
        s: { a: number; k: number[] };
        r: { a: number; k: number[] };
        o: { a: number; k: number[] };
      };
      ip: number;
      st: number;
      op: number;
      sr: number;
      bm: number;
    }>;
  }>;
  layers: Array<{
    ddd: number;
    ind: number;
    ty: number;
    nm: string;
    sr: number;
    ks: Record<string, unknown>;
    ao: number;
    shapes?: Array<unknown>;
    ip: number;
    op: number;
    st: number;
    bm: number;
  }>;
  markers: Array<{
    cm: string;
    dr: number;
    tm: number;
  }>;
  props: Record<string, unknown>;
};

// Dynamically import Lottie component with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationContainer = ({ animationData }: { animationData: LottieAnimationData }) => {
  return (
    <div className="w-full h-full">
      <Lottie 
        animationData={animationData}
        loop={true}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};

// Dynamically import the animation container with no SSR
const DynamicAnimationContainer = dynamic(() => Promise.resolve(AnimationContainer), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-[#ebd57c] animate-pulse">Loading...</div>
    </div>
  ),
});

export default function Leading() {
  const [pepeAnimation, setPepeAnimation] = useState<LottieAnimationData | null>(null);
  const [dogeAnimation, setDogeAnimation] = useState<LottieAnimationData | null>(null);
  const [trumpAnimation, setTrumpAnimation] = useState<LottieAnimationData | null>(null);
  const [wojakAnimation, setWojakAnimation] = useState<LottieAnimationData | null>(null);

  useEffect(() => {
    // Import the animation data on the client side
    Promise.all([
      import('../../public/animations/pepe.json'),
      import('../../public/animations/doge5.json'),
      import('../../public/animations/trump_lottie.json'),
      import('../../public/animations/wojak_lottie.json')
    ]).then(([pepeData, dogeData, trumpData, wojakData]) => {
      setPepeAnimation(pepeData.default);
      setDogeAnimation(dogeData.default);
      setTrumpAnimation(trumpData.default);
      setWojakAnimation(wojakData.default);
    }).catch((err) => console.error('Error loading animations:', err));
  }, []);

  return (
    <section id="lol-forge-leading" className="w-full py-16 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mx-auto text-[#ebd57c]">
            <ScrambleText text="lol.Forge is Leading" />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* First card */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
            <div className="relative z-10">
              <div className="w-full h-48 sm:h-56 md:h-72 lg:h-96 mb-4 md:mb-6 rounded-none overflow-hidden relative">
                <div className="absolute inset-0 bg-[#222222] flex items-center justify-center">
                  {pepeAnimation && (
                    <DynamicAnimationContainer animationData={pepeAnimation} />
                  )}
                </div>
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-l border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:left-2 sm:group-hover:top-3 sm:group-hover:left-3"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-r border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:right-2 sm:group-hover:top-3 sm:group-hover:right-3"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-l border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:left-2 sm:group-hover:bottom-3 sm:group-hover:left-3"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-r border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:right-2 sm:group-hover:bottom-3 sm:group-hover:right-3"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#ebd57c] mb-2 md:mb-4">
                AI-Powered, Meme-Fueled
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Generate 3D memes in seconds using advanced AI. Just type or upload — the system does the rest.
              </p>
            </div>
          </div>
          
          {/* Second card */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
            <div className="relative z-10">
              <div className="w-full h-48 sm:h-56 md:h-72 lg:h-96 mb-4 md:mb-6 rounded-none overflow-hidden relative">
                <div className="absolute inset-0 bg-[#222222] flex items-center justify-center">
                  {dogeAnimation && (
                    <DynamicAnimationContainer animationData={dogeAnimation} />
                  )}
                </div>
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-l border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:left-2 sm:group-hover:top-3 sm:group-hover:left-3"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-r border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:right-2 sm:group-hover:top-3 sm:group-hover:right-3"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-l border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:left-2 sm:group-hover:bottom-3 sm:group-hover:left-3"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-r border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:right-2 sm:group-hover:bottom-3 sm:group-hover:right-3"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#ebd57c] mb-2 md:mb-4">
                Zero Skill, Maximum Clout
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                No 3D tools required. With just a few clicks and a creative idea using $LOL, anyone can create viral content that goes viral.
              </p>
            </div>
          </div>
          
          {/* Third card */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
            <div className="relative z-10">
              <div className="w-full h-48 sm:h-56 md:h-72 lg:h-96 mb-4 md:mb-6 rounded-none overflow-hidden relative">
                <div className="absolute inset-0 bg-[#222222] flex items-center justify-center">
                  {trumpAnimation && (
                    <DynamicAnimationContainer animationData={trumpAnimation} />
                  )}
                </div>
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-l border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:left-2 sm:group-hover:top-3 sm:group-hover:left-3"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-r border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:right-2 sm:group-hover:top-3 sm:group-hover:right-3"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-l border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:left-2 sm:group-hover:bottom-3 sm:group-hover:left-3"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-r border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:right-2 sm:group-hover:bottom-3 sm:group-hover:right-3"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#ebd57c] mb-2 md:mb-4">
                MemeDAO-Driven
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Vote, earn, and rise in the ranks. Use $LOL to reward top memes and unlock community-curated styles.
              </p>
            </div>
          </div>
          
          {/* Fourth card */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
            <div className="relative z-10">
              <div className="w-full h-48 sm:h-56 md:h-72 lg:h-96 mb-4 md:mb-6 rounded-none overflow-hidden relative">
                <div className="absolute inset-0 bg-[#222222] flex items-center justify-center">
                  {wojakAnimation && (
                    <DynamicAnimationContainer animationData={wojakAnimation} />
                  )}
                </div>
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-l border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:left-2 sm:group-hover:top-3 sm:group-hover:left-3"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-t border-r border-[#ebd57c] transition-all duration-300 group-hover:top-2 group-hover:right-2 sm:group-hover:top-3 sm:group-hover:right-3"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-l border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:left-2 sm:group-hover:bottom-3 sm:group-hover:left-3"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b border-r border-[#ebd57c] transition-all duration-300 group-hover:bottom-2 group-hover:right-2 sm:group-hover:bottom-3 sm:group-hover:right-3"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#ebd57c] mb-2 md:mb-4">
                Built for Virality
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Instantly share your memes to X, drop them in Discord, or project them in AR. Designed for max spread.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 