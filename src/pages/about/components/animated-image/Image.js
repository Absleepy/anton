import React from 'react';
import style from './style.module.css';
const Image = ({ url, handleMouse, pos }) => {
  return (
    <div className={style.container} style={pos}>
      <img src={url} alt="Person" height="100%" />
      <div
        onMouseEnter={() => handleMouse(false)}
        onMouseLeave={() => handleMouse(true)}
        className={style.personChanger}
      ></div>
    </div>
  );
};

export default Image;
