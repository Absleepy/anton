import React from "react";
import style from "./style.module.css";
const BoyImage = ({ url, handleBoyMouseOver, handleBoyMouseLeave }) => {
  return (
    <div className={style.container}>
      <img src={url} alt="Boy" width="100%" height="auto" />
      <div
        onMouseOver={handleBoyMouseOver}
        onMouseLeave={handleBoyMouseLeave}
        className={style.personChanger}
      ></div>
    </div>
  );
};

export default BoyImage;
