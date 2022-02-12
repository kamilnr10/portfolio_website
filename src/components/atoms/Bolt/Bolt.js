import React, { useEffect, createRef } from 'react';
import lottie from 'lottie-web';
import animation from 'assets/lottie/bolt.json';

export const Bolt = () => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      loop: true,
    });
  }, []);

  return <div ref={animationContainer} style={{ width: '20px', height: '20px' }}></div>;
};
