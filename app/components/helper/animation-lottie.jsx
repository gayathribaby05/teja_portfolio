"use client";

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const AnimationLottie = ({ animationPath }) => {
  const container = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !container.current) return;

    animation.current = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationPath,
    });

    return () => {
      if (animation.current) {
        animation.current.destroy();
      }
    };
  }, [animationPath]);

  return <div ref={container} className="w-full h-full"></div>;
};

export default AnimationLottie;
