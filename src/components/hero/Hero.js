import React, { useState } from "react";
import styles from "./style.module.css";
import BoyImage from "../boy-image/BoyImage";
import GirlImage from "../girl-image/GirlImage";

const Hero = () => {
  const [boyCount, setBoyCount] = useState(1);
  const [BoyMouseIn, setBoyMouseIn] = useState(false);
  const [girlCount, setGirlCount] = useState(1);
  const [GirlMouseIn, setGirlMouseIn] = useState(false);

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

  return (
    <>
      <BoyImage
        handleBoyMouseLeave={handleBoyMouseLeave}
        handleBoyMouseOver={handleBoyMouseOver}
        url={`./assets/images/boy${!BoyMouseIn ? 1 : boyCount}.png`}
      />
      <GirlImage
        handleGirlMouseLeave={handleGirlMouseLeave}
        handleGirlMouseOver={handleGirlMouseOver}
        url={`./assets/images/girl${!GirlMouseIn ? 1 : girlCount}.png`}
      />
    </>
  );
};

export default Hero;
