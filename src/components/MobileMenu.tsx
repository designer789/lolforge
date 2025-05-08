"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrambleText from './ui/ScrambleText';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom NavLink component for smooth scrolling
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close menu first
    if (onClick) onClick();
    
    // Only intercept hash links
    if (href.startsWith('#') || href.includes('#')) {
      e.preventDefault();
      
      // Extract the ID from the href
      const id = href.includes('#') ? href.split('#')[1] : href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Short delay to allow menu to close
        setTimeout(() => {
          // Scroll to the element with smooth behavior
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without reload
          window.history.pushState({}, '', href);
        }, 300);
      }
    }
  };

  // Determine if this is an external link (social media)
  const isExternal = href.startsWith('http');

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)} // Added for mobile touch
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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[280px] sm:w-[350px] md:w-[400px] bg-[#1a1a1a] border-r border-[#333] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-[#333]">
          <h2 className="text-[#ebd57c] text-lg sm:text-xl font-bold">
            <ScrambleText text="Menu" />
          </h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#ebd57c] transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-7 sm:h-7">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Main navigation links */}
        <nav className="p-5 sm:p-6 border-b border-[#333]">
          <h3 className="text-white/50 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-4 sm:space-y-5">
            <li>
              <NavLink 
                href="/" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="/#features" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="/#lol-forge-leading" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                Leading
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="/#tokenomics" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                Tokenomics
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="/#faq" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Social & Trading links */}
        <nav className="p-5 sm:p-6">
          <h3 className="text-white/50 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">Connect</h3>
          <ul className="space-y-4 sm:space-y-5">
            <li>
              <NavLink 
                href="https://x.com/lol_Forge" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                Twitter
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="https://t.me/lol_Forge" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                Telegram
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="#" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                DEXTools
              </NavLink>
            </li>
            <li>
              <NavLink 
                href="#" 
                className="text-white hover:text-[#ebd57c] transition-colors block py-1 sm:py-2 text-base sm:text-lg"
                onClick={onClose}
              >
                DEXScreener
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Menu footer with subtle branding */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-[#333] bg-[#161616]">
          <p className="text-white/50 text-xs sm:text-sm">
            lol.Forge — AI Meme Generator
          </p>
        </div>
      </div>
    </>
  );
} 