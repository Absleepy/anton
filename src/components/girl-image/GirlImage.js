import React from "react";
import style from "./style.module.css";
const GirlImage = ({ url, handleGirlMouseOver, handleGirlMouseLeave }) => {
  return (
    <div className={style.container}>
      <img
        onMouseLeave={handleGirlMouseLeave}
        onMouseOver={handleGirlMouseOver}
        src={url}
        alt="Girl"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default GirlImage;
