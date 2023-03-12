import React, { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from "../App";

function Photo() {
  const labelRef = useRef<HTMLInputElement>(null);
  const photoShowRef = useRef<HTMLCanvasElement>(null);
  const { img, setImg } = useContext(UserContext);
  const { files, setFiles } = useContext(UserContext);

  const photoShow = (e: any) => {
    if (!e.target.files[0].type.match("image.*")) {
      alert("画像を選択してください");
      return;
    }
    setFiles(e.target.files);
    setImg(window.URL.createObjectURL(e.target.files[0]));

  };
  useEffect(() => {
    setFiles(files);
  }, [files]);

  return (
    <>
      <div className="box shadow-lg">
        <h2 className="heading">
          <div>
            <span className="material-symbols-outlined">photo_camera</span>
            <span>写真で記録</span>
          </div>
        </h2>
        <div className="photo_outer">
          <label className="label shadow-lg" htmlFor="upload">
            <span className="material-symbols-outlined">photo_camera</span>
            <span> カメラを起動しよう</span>
          </label>
          <input
            ref={labelRef}
            id="upload"
            type="file"
            name="image"
            accept="image/*;capture=camera"
            className="upload"
            onChange={photoShow}
          />
          <div>
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photo;
