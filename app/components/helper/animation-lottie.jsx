"use client";

import { useEffect } from 'react';
import lottie from 'lottie-web';

const AnimationLottie = () => {
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined') {
      lottie.loadAnimation({
        container: document.getElementById('animation'), // Use the document object safely
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data.json' // Path to your animation file
      });
    }
  }, []);

  return <div id="animation" />;
};

export default AnimationLottie;
