import React, { useState, useEffect } from 'react';
import Image from '../animated-image/Image';
import Arrow from './Arrow';
import style from './style.module.css';
const Hero = () => {
  const [boyCount, setBoyCount] = useState(1);
  const [girlCount, setGirlCount] = useState(1);
  const [mouseOver, setmouseOver] = useState([true, true]);
  const [showArrow, setShowArrow] = useState(true);
  const [pos, setpos] = useState(38);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 550) return setShowArrow(false);
      setShowArrow(window.scrollY > 430 ? false : true);
      const x = window.scrollY / 25;
      setpos(x + 38);
      if (x > 0) setmouseOver([true, true]);
    });
  }, []);

  const handleMouse = (type, leave) => {
    if (pos > 38) return;
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
  const arrowClicked = () => {
    // For Safari
    document.body.scrollTop = 550;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 550;
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
      <div
        onClick={arrowClicked}
        className={`${style.arrContainer} ${!showArrow ? style.hide : ''}`}
      >
        <Arrow />
      </div>
    </>
  );
};

export default Hero;
