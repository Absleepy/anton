import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import BoyImage from "../boy-image/BoyImage";
import GirlImage from "../girl-image/GirlImage";

const Hero = () => {
  const [boyCount, setBoyCount] = useState(1);
  const [BoyMouseIn, setBoyMouseIn] = useState(false);
  const [girlCount, setGirlCount] = useState(1);
  const [GirlMouseIn, setGirlMouseIn] = useState(false);
  const [rightPos, setRightPos] = useState(0);
  const [leftPos, setLeftPos] = useState(0);
  //  for Boy
  const handleBoyMouseOver = () => {
    setBoyMouseIn(true);
    setBoyCount(boyCount + 1);
    if (boyCount >= 4) {
      setBoyCount(2);
    }
  };
  const handleBoyMouseLeave = () => {
    setBoyMouseIn(false);
  };

  //  for Girl
  const handleGirlMouseOver = () => {
    setGirlMouseIn(true);
    setGirlCount(girlCount + 1);
    if (girlCount >= 4) {
      setGirlCount(2);
    }
  };
  const handleGirlMouseLeave = () => {
    setGirlMouseIn(false);
  };

  //  when user scroll down
  useEffect(() => {
    // set position when page is loaded
    const gotOffset = window.pageYOffset;
    const totalPos = gotOffset / 100 + 42;
    setRightPos(totalPos);
    setLeftPos(totalPos);
    // change position on scroll
    document.addEventListener("scroll", () => {
      const gotOffset = window.pageYOffset;
      const totalPos = gotOffset / 100 + 42;
      const leastPos = 60;
      if (totalPos >= leastPos) {
        setRightPos(leastPos);
        setLeftPos(leastPos);
      } else {
        setRightPos(totalPos);
        setLeftPos(totalPos);
      }
    });
  }, []);

  return (
    <>
      <BoyImage
        rightPos={rightPos}
        handleBoyMouseLeave={handleBoyMouseLeave}
        handleBoyMouseOver={handleBoyMouseOver}
        url={`./assets/images/boy${!BoyMouseIn ? 1 : boyCount}.png`}
      />
      <GirlImage
        leftPos={leftPos}
        handleGirlMouseLeave={handleGirlMouseLeave}
        handleGirlMouseOver={handleGirlMouseOver}
        url={`./assets/images/girl${!GirlMouseIn ? 1 : girlCount}.png`}
      />
    </>
  );
};

export default Hero;
