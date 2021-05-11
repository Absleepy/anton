import React from "react";
import style from "./style.module.css";
const GirlImage = ({
  leftPos,
  url,
  handleGirlMouseOver,
  handleGirlMouseLeave,
}) => {
  return (
    <div style={{ left: `${leftPos}%` }} className={style.container}>
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
