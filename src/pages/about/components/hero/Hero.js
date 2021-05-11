import React, { useState, useEffect } from 'react';
import Image from '../animated-image/Image';

const Hero = () => {
  const [boyCount, setBoyCount] = useState(1);
  const [girlCount, setGirlCount] = useState(1);
  const [pos, setpos] = useState(42);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) return;
      const x = window.scrollY / 25;
      setpos(x + 42);
    });
  }, []);

  const handleMouse = (type) => {
    if (pos > 42) return;
    if (type === 'boy') return setBoyCount((c) => (c > 3 ? 1 : c + 1));
    return setGirlCount((c) => (c > 3 ? 1 : c + 1));
  };

  return (
    <>
      <Image
        handleMouse={() => handleMouse('boy')}
        url={`./assets/images/boy${boyCount}.png`}
        pos={{ right: `${pos}%` }}
      />
      <Image
        handleMouse={handleMouse}
        url={`./assets/images/girl${girlCount}.png`}
        pos={{ left: `${pos + 10}%` }}
      />
    </>
  );
};

export default Hero;
