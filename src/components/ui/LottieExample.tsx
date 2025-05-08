"use client";

import { useState, useEffect } from "react";
import LottieAnimation from "./LottieAnimation";

interface LottieExampleProps {
  animationUrl: string;
  className?: string;
}

export default function LottieExample({
  animationUrl,
  className = "",
}: LottieExampleProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnimation() {
      try {
        setIsLoading(true);
        const response = await fetch(animationUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`);
        }
        
        const data = await response.json();
        setAnimationData(data);
        setError(null);
      } catch (err) {
        console.error("Error loading animation:", err);
        setError(err instanceof Error ? err.message : "Failed to load animation");
      } finally {
        setIsLoading(false);
      }
    }

    fetchAnimation();
  }, [animationUrl]);

  if (isLoading) {
    return <div className="w-full h-full flex items-center justify-center">Loading animation...</div>;
  }

  if (error || !animationData) {
    return <div className="w-full h-full flex items-center justify-center text-red-500">{error || "Failed to load animation"}</div>;
  }

  return (
    <LottieAnimation
      animationData={animationData}
      className={`w-full h-full ${className}`}
      loop={true}
      autoplay={true}
    />
  );
} 