import React from "react";
import style from "./style.module.css";
const GirlImage = ({ url, handleGirlMouseOver, handleGirlMouseLeave }) => {
  return (
    <div className={style.container}>
      <img src={url} alt="Girl" width="100%" height="auto" />
      <div
        onMouseLeave={handleGirlMouseLeave}
        onMouseOver={handleGirlMouseOver}
        className={style.personChanger}
      ></div>
    </div>
  );
};

export default GirlImage;
