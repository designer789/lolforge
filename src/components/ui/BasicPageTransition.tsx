"use client";

import { ReactNode } from 'react';

interface BasicPageTransitionProps {
  children: ReactNode;
}

export default function BasicPageTransition({
  children,
}: BasicPageTransitionProps) {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
} 