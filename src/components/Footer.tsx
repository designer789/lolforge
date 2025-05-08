"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-[#111] border-t border-[#333]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link href="/" className="text-[#ebd57c] text-2xl font-bold">
            lol.Forge
          </Link>
          <p className="text-white/50 text-base mt-3">© 2025 lol.Forge. All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap gap-8 justify-center">
          <Link href="https://lol-forge.gitbook.io/docs" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#ebd57c] transition-colors text-base">
            Docs
          </Link>
          <Link 
            href="https://x.com/lol_Forge" 
            className="text-white/70 hover:text-[#ebd57c] transition-colors text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link 
            href="https://t.me/lol_Forge" 
            className="text-white/70 hover:text-[#ebd57c] transition-colors text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
} 