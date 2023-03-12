import React, { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from "../App";

interface Props {
  text: string;
}

const ToggleButton = ({ text }: Props) => {
  const [switchButton, setSwitchButton] = useState<boolean>(false);
  const { tag, setTag } = useContext(UserContext);
  const switchElement = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setSwitchButton(!switchButton);
    console.log("1");

    console.log(switchButton);

    if (switchButton === false && switchElement.current) {
      setTag(
        Array.from(
          new Set([
            ...tag,
            switchElement.current.querySelector(".text")!.innerHTML,
          ])
        )
      );
      console.log("2");
      console.log(tag);
    } else if (switchButton === true && switchElement.current) {
      setTag(
        tag.filter(
          (tagVal) =>
            tagVal !== switchElement.current!.querySelector(".text")!.innerHTML
        )
      );
    }
  };
  return (
    <>
      <div className="tagu_button_inner">
        <div
          className={switchButton ? "switch on" : "switch"}
          onClick={() => {
            handleClick();
          }}
        ></div>
        <div>
          <div className="tagu_button_text" ref={switchElement}>
            <span className="text">{text}</span>
            {switchButton && <span className="OK">OK!!</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
