import React from "react";
import style from "./style.module.css";
const BoyImage = ({ url, handleBoyMouseOver, handleBoyMouseLeave }) => {
  return (
    <div className={style.container}>
      <img
        onMouseOver={handleBoyMouseOver}
        onMouseLeave={handleBoyMouseLeave}
        src={url}
        alt="Boy"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default BoyImage;
