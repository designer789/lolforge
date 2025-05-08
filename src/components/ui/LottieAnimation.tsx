"use client";

import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
  onComplete,
  onLoopComplete,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
    />
  );
} 