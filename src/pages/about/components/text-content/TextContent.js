import React, { useRef } from 'react';
import useOnScreen from '../../../../useOnScreen';

import style from './style.module.css';

const TextContent = () => {
  const desRef = useRef();
  const doingRef = useRef();
  const designRef = useRef();
  const digitalRef = useRef();
  const productsRef = useRef();
  const uxRef = useRef();
  const photoRef = useRef();
  const videoRef = useRef();
  const lectureRef = useRef();
  const workshopRef = useRef();

  const desonScreen = useOnScreen(desRef, '-250px');
  const doingonScreen = useOnScreen(doingRef, '-250px');
  const designonScreen = useOnScreen(designRef, '-250px');
  const digitalonScreen = useOnScreen(digitalRef, '-250px');
  const productsonScreen = useOnScreen(productsRef, '-250px');
  const uxonScreen = useOnScreen(uxRef, '-250px');
  const photoonScreen = useOnScreen(photoRef, '-250px');
  const videoonScreen = useOnScreen(videoRef, '-250px');
  const lectureonScreen = useOnScreen(lectureRef, '-250px');
  const workshoponScreen = useOnScreen(workshopRef, '-250px');

  return (
    <div id="textContent">
      <div className={style.container}>
        <div className={style.textContainer}>
          <div
            className={`${style.text} ${desonScreen ? style.inCenter : ''}`}
            ref={desRef}
          >
            Former Manhattan agency directors turned Brooklyn
            <nobr>hands-on</nobr> designers.
          </div>
        </div>
      </div>
      <div className={style.doingStuff}>
        <div
          className={`${style.whatWeDoing} ${
            doingonScreen ? style.inCenter : ''
          }`}
          ref={doingRef}
        >
          What we ❤ doing
        </div>
        <div
          className={`${style.doingText} ${
            designonScreen ? style.inCenter : ''
          }`}
          ref={designRef}
        >
          Design
        </div>
        <div
          className={`${style.doingText} ${
            productsonScreen ? style.inCenter : ''
          }`}
          ref={productsRef}
        >
          Products
        </div>
        <div
          className={`${style.doingText} ${
            digitalonScreen ? style.inCenter : ''
          }`}
          ref={digitalRef}
        >
          Digital
        </div>
        <div
          className={`${style.doingText} ${uxonScreen ? style.inCenter : ''}`}
          ref={uxRef}
        >
          UX
        </div>
        <div
          className={`${style.doingText} ${
            photoonScreen ? style.inCenter : ''
          }`}
          ref={photoRef}
        >
          Photography
        </div>
        <div
          className={`${style.doingText} ${
            videoonScreen ? style.inCenter : ''
          }`}
          ref={videoRef}
        >
          Video
        </div>
        <div
          className={`${style.doingText} ${
            lectureonScreen ? style.inCenter : ''
          }`}
          ref={lectureRef}
        >
          Lectures
        </div>
        <div
          className={`${style.doingText} ${
            workshoponScreen ? style.inCenter : ''
          }`}
          ref={workshopRef}
        >
          Workshops
        </div>
      </div>
    </div>
  );
};

export default TextContent;
