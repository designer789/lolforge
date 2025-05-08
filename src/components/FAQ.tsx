"use client";

import React, { useState } from 'react';
import ScrambleText from './ui/ScrambleText';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div 
      className={`mb-4 ${isOpen ? 'bg-[#1a1a1a]' : 'bg-[#222222]'} border-l-2 ${isOpen ? 'border-[#ebd57c]' : 'border-transparent'} transition-all duration-300`}
    >
      <button
        className="flex justify-between items-center w-full p-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="text-[#ebd57c] font-mono mr-3 opacity-70">{(index + 1).toString().padStart(2, '0')}</span>
          <span className="text-lg font-medium text-white">{question}</span>
        </div>
        <span className={`${isOpen ? 'text-[#ebd57c]' : 'text-gray-500'} ml-4 transition-colors`}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="px-5 pb-5 pl-14 text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqItems = [
    {
      question: "What is lol.Forge?",
      answer: "lol.Forge is an AI-powered platform that allows users to instantly generate 3D memes from text prompts or image uploads. It's built for speed, creativity, and virality — no design skills required."
    },
    {
      question: "How do I create a 3D meme?",
      answer: "Simply type a meme idea (e.g., \"Pepe flying a rocket\") or upload a meme image, and the platform's AI will generate a full 3D model with animation and style within seconds."
    },
    {
      question: "Do I need 3D design skills to use lol.Forge?",
      answer: "No. The entire system is designed for users with zero modeling or animation experience. Anyone can create with just a few clicks."
    },
    {
      question: "What is $LOL used for?",
      answer: "$LOL is the platform's utility token. It is used to pay for 3D meme generation, unlock premium styles, access advanced creator tools, vote in MemeDAO governance, and support community meme contests."
    },
    {
      question: "How is $LOL launched?",
      answer: "$LOL is launched through a 100% fair launch — with no team, presale, or VC allocations. All tokens are distributed directly to the community."
    },
    {
      question: "Can I export my memes for use elsewhere?",
      answer: "Yes. You can export your 3D models (e.g., OBJ/GLTF) and animations (MP4/GIF) to use in metaverses, games, videos, or even physical 3D printing."
    },
    {
      question: "What is MemeDAO?",
      answer: "MemeDAO is the governance layer of lol.Forge. $LOL holders can propose and vote on platform features, meme contests, partnerships, and treasury usage — ensuring the community controls the direction of the ecosystem."
    },
    {
      question: "Is lol.Forge a Web3 platform?",
      answer: "Absolutely. While the AI runs off-chain for speed, all meme metadata is stored on-chain, and key actions like voting and rewards use blockchain tech."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-28 px-4 bg-[#111111]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl text-center mx-auto text-[#ebd57c] mb-4">
            <ScrambleText text="Frequently Asked Questions" />
          </h2>

        </div>
        
        <div>
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 