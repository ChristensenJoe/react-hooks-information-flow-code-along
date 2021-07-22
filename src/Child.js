import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({color, handleColorClick, handleChildColorClick}) {
  return <div className="child" 
  style={{ backgroundColor: color }} 
  onClick={e => {handleColorClick(getRandomColor())
                 handleChildColorClick(getRandomColor())}}
  />;
}

export default Child;
