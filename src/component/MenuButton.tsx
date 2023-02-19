import React from "react";

function MenuButton() {
  return (
    <>
      <ul className="menu">
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined">help</span>
            <span className="menu_text">使い方</span>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined">
              keyboard_double_arrow_up
            </span>
            <span className="menu_text">TOPへ</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default MenuButton;
