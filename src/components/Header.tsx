"use client";

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import ScrambleText from './ui/ScrambleText';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept hash links
    if (href.startsWith('#') || href.includes('#')) {
      e.preventDefault();
      
      // Extract the ID from the href
      const id = href.includes('#') ? href.split('#')[1] : href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without reload
        window.history.pushState({}, '', href);
      }
    }
  };

  // Determine if this is an external link (social media)
  const isExternal = href.startsWith('http');

  return (
    <Link 
      href={href} 
      className={`text-white hover:text-[#ebd57c] transition-colors text-base ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {typeof children === 'string' ? (
        <ScrambleText text={children} hoverToActivate={isHovered} />
      ) : (
        children
      )}
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 px-6 bg-[#1a1a1a] border-b border-[#333] fixed top-0 left-0 right-0 z-40">
        <div className="w-full flex justify-between items-center relative">
          {/* Left side - Main navigation - only show on large screens (1024px+) */}
          <nav className="hidden lg:flex space-x-10 flex-1 justify-start">
            <NavLink href="/#features">Features</NavLink>
            <NavLink href="/#lol-forge-leading">Leading</NavLink>
            <NavLink href="/#tokenomics">Tokenomics</NavLink>
            <NavLink href="/#faq">FAQ</NavLink>
          </nav>
          
          {/* Menu button - show on screens under 1024px */}
          <div className="lg:hidden flex flex-1 justify-start">
            <button 
              className="text-white hover:text-[#ebd57c] transition-colors" 
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Center - Logo */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
          >
            <Link href="/" className="flex items-center">
              <h1 className="text-[#ebd57c] text-xl font-bold whitespace-nowrap">
                <ScrambleText text="lol.Forge" />
              </h1>
            </Link>
          </div>
          
          {/* Right side - Social & Trading links - only show on large screens (1024px+) */}
          <nav className="hidden lg:flex space-x-8 flex-1 justify-end">
            <NavLink href="https://x.com/lol_Forge" className="text-white hover:text-[#ebd57c] transition-colors text-base">
              Twitter
            </NavLink>
            <NavLink href="https://t.me/lol_Forge" className="text-white hover:text-[#ebd57c] transition-colors text-base">
              Telegram
            </NavLink>
            <NavLink href="https://www.dextools.io/app/en/ether/pair-explorer/0x6a0e7d016abe9cc171906864a4a4a7bf2d990b0b?t=1748946343635" className="text-white hover:text-[#ebd57c] transition-colors text-base">
              DEXTools
            </NavLink>
            <NavLink href="https://dexscreener.com/ethereum/0x6a0e7d016abe9cc171906864a4a4a7bf2d990b0b" className="text-white hover:text-[#ebd57c] transition-colors text-base">
              DEXScreener
            </NavLink>
          </nav>
          
          {/* Mobile/tablet right - Empty space for symmetry */}
          <div className="lg:hidden flex flex-1 justify-end">
            <div className="w-6"></div>
          </div>
        </div>
      </header>

      {/* Empty div for proper spacing due to fixed header */}
      <div className="h-[72px]"></div>

      {/* Mobile/Tablet Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
} 
