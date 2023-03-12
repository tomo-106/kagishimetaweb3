import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../App";
import { useEffect } from "react";
import "../App.scss";

function MenuButtonA() {
  const { buttonChild, setbuttonChild } = useContext(UserContext);

  useEffect(() => {
    setbuttonChild([...buttonChild]);
  }, []);

  return (
    <>
      <ul className="menu">
        {buttonChild.map(
          (
            buttonChild: { url: string; icon: string; text: string },
            index: number
          ) => (
            <li key={buttonChild.text}>
              <a href={buttonChild.url} rel="noopener noreferrer">
                <span className="material-symbols-outlined">
                  {buttonChild.icon}
                </span>
                <span className="menu_text">{buttonChild.text}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default MenuButtonA;
