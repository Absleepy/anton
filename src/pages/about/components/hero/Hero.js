import React, { useState, useEffect } from 'react';
import Image from '../animated-image/Image';

const Hero = () => {
  const [boyCount, setBoyCount] = useState(1);
  const [girlCount, setGirlCount] = useState(1);
  const [mouseOver, setmouseOver] = useState([true, true]);
  const [pos, setpos] = useState(42);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) return;
      const x = window.scrollY / 25;
      setpos(x + 42);
    });
  }, []);

  const handleMouse = (type, leave) => {
    if (pos > 42) return;
    if (type === 'boy') {
      let mO = [...mouseOver];
      mO[0] = leave;
      setmouseOver(mO);
      return setBoyCount((c) => (c > 3 ? 2 : c + 1));
    }

    let mO = [...mouseOver];
    mO[1] = leave;
    setmouseOver(mO);
    return setGirlCount((c) => (c > 3 ? 2 : c + 1));
  };

  return (
    <>
      <Image
        handleMouse={(leave) => handleMouse('boy', leave)}
        url={`./assets/images/boy${mouseOver[0] ? 1 : boyCount}.png`}
        pos={{ right: `${pos}%` }}
      />
      <Image
        handleMouse={(leave) => handleMouse('girl', leave)}
        url={`./assets/images/girl${mouseOver[1] ? 1 : girlCount}.png`}
        pos={{ left: `${pos + 10}%` }}
      />
    </>
  );
};

export default Hero;
