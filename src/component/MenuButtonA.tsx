import React,{ createContext, useContext, useState } from "react";
import MenuButtonSpan from "./MenuButtonSpan";
import { UserContext } from "../App";

function MenuButtonA() {
    const { buttonClass, setButtonClass } = useContext(UserContext);

  return (
    <>
      <a href="http://" target="_blank" rel="noopener noreferrer">
       <MenuButtonSpan ></MenuButtonSpan>
       
       
        <span className="material-symbols-outlined">help</span>
        <span className="menu_text">使い方</span>
      </a>
    </>
  );
}

export default MenuButtonA;
