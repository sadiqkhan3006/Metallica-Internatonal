import React from "react";

function imgLoader({ imgSrc, imgstyle, altText }) {
  //console.log("heyyy2");
  return <img src={imgSrc} className={imgstyle} alt={altText} />;
}

export default imgLoader;
