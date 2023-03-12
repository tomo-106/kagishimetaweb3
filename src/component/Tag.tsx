import React, { useRef, useState, useContext } from "react";
import { UserContext } from "../App";
import ToggleButton from "./ToggleButton";

function Tag() {

  const buttonTextArray = {
    mado: "窓の鍵",
    genkan: "玄関の鍵",
    gasu: "ガス",
    shoumei: "証明",
    gomidashi: "ゴミ捨て",
    mizumawari: "水回り",
  };
  return (
    <>
      <div className="box shadow-lg">
        <h2 className="heading">
          <div>
            <span className="material-symbols-outlined">sell</span>
            <span>タグの設定</span>
          </div>
        </h2>
        <div className="tagu_button_outer">
          <ToggleButton text={buttonTextArray.mado}></ToggleButton>
          <ToggleButton text={buttonTextArray.genkan}></ToggleButton>
          <ToggleButton text={buttonTextArray.gasu}></ToggleButton>
          <ToggleButton text={buttonTextArray.shoumei}></ToggleButton>
          <ToggleButton text={buttonTextArray.gomidashi}></ToggleButton>
          <ToggleButton text={buttonTextArray.mizumawari}></ToggleButton>
        </div>
      </div>
    </>
  );
}

export default Tag;
