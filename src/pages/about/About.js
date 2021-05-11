import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import RightOverlay from './components/right-overlay/RightOverlay';
import TextContent from './components/text-content/TextContent';
import style from './style.module.css';

const About = () => {
  return (
    <article className={style.main}>
      <Header />
      <RightOverlay />
      <Hero />
      <TextContent />
    </article>
  );
};

export default About;
