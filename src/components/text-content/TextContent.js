import React from "react";
import style from "./style.module.css";
const TextContent = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.text}>
            Former Manhattan agency directors turned Brooklyn
            <nobr>hands-on</nobr> designers.
          </div>
        </div>
      </div>
      <div className={style.doingStuff}>
        <div className={style.whatWeDoing}>What we ❤ doing</div>
        <div className={style.doingText}>Design</div>
        <div className={style.doingText}>Products</div>
        <div className={style.doingText}>Digital</div>
        <div className={style.doingText}>UX</div>
        <div className={style.doingText}>Photography</div>
        <div className={style.doingText}>Video</div>
        <div className={style.doingText}>Lectures</div>
        <div className={style.doingText}>Workshops</div>
      </div>
    </div>
  );
};

export default TextContent;
