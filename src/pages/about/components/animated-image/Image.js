import React from 'react';
import style from './style.module.css';
const Image = ({ url, handleMouse, pos }) => {
  return (
    <div className={style.container} style={pos}>
      <img src={url} alt="Boy" width="100%" height="auto" />
      <div
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        className={style.personChanger}
      ></div>
    </div>
  );
};

export default Image;
