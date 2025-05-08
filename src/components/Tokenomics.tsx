"use client";

import React from 'react';
import ScrambleText from './ui/ScrambleText';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="w-full py-28 px-4 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-center mx-auto text-[#ebd57c]">
            <ScrambleText text="Tokenomics" />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-8 h-full relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#ebd57c] mb-6">Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-300 font-medium">Token Name:</span>
                    <span className="text-[#ebd57c] font-bold">$LOL</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-300 font-medium">Total Supply:</span>
                    <span className="text-white">1,000,000,000 $LOL</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#ebd57c] mb-4">Token Allocation</h3>
                <div className="mb-6 bg-gradient-to-r from-[#222222] to-[#171717] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Fair Launch:</span>
                    <span className="text-white font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-8 h-full relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#ebd57c] mb-6">Utility</h3>
              <ul className="space-y-5">
                <li className="border-b border-gray-700 pb-4">
                  <h4 className="text-base font-medium text-[#ebd57c] mb-2">Unlock Premium Meme Styles</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Use $LOL to access rare 3D styles, animated models, and limited-edition meme packs like "Cyber Pepe" or "Golden Doge."
                  </p>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <h4 className="text-base font-medium text-[#ebd57c] mb-2">Participate in MemeDAO Governance</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    $LOL holders can propose ideas, vote on feature updates, and help shape the future of lol.Forge through on-chain governance.
                  </p>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <h4 className="text-base font-medium text-[#ebd57c] mb-2">Access Advanced Creator Tools</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Unlock features like real-time style tuning, AR projection, animation rendering, and high-res export formats using $LOL.
                  </p>
                </li>
                <li className="pb-1">
                  <h4 className="text-base font-medium text-[#ebd57c] mb-2">Vote in Meme of the Week</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Support your favorite 3D memes in weekly contests by casting votes with $LOL — top-voted memes earn recognition and rewards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 