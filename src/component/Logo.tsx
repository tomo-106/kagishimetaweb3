import React from "react";
import logoImag from "../logo.svg";
import "../App.scss";


function Logo() {
  return (
    <div className="logo">
      <div>
        <img src={logoImag} alt="logo" />
        <span className="title">鍵閉めたかなWeb3</span>
      </div>
    </div>
  );
}

export default Logo;
