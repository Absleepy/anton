import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import RightOverlay from "../components/right-overlay/RightOverlay";
import TextContent from "../components/text-content/TextContent";
import style from "./style.module.css";
const Home = () => {
  //  when user scroll down
  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(window.screen.availWidth);
    });
  }, []);

  return (
    <article className={style.main}>
      <Header />
      <RightOverlay />
      <Hero />
      <TextContent />
    </article>
  );
};

export default Home;
