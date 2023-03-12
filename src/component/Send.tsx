import React, { useState, useContext, memo } from "react";
import { UserContext } from "../App";

function Send() {
  const { files, setFiles } = useContext(UserContext);
  const { img, setImg } = useContext(UserContext);

  const { output, setOutput } = useContext(UserContext);
  const { tag, setTag } = useContext(UserContext);
  const { memo, setMemo } = useContext(UserContext);
  const shareData = {
    files: files,
    title: "記録",
    text: "タグ：" + tag.join() + `\n確認メモ：${memo}`,
  };
  const share = () => {
    async function shareas() {
      try {
        let res = window.confirm("送信画面に進みますか？");
        if (res===true) {
          await navigator.share(shareData);
        } else {
          alert("キャンセルしました。");
        }
      } catch (err) {
        alert("写真が選択されていないかもしれません。\n写真を選択してもこのエラーが出る場合は、お使いのブラウザがこのアプリに対応していない可能性があります。");
      }
    }
    shareas();
  };
  return (
    <>
      <div className="box shadow-lg">
        <h2 className="heading">
          <div>
            <span className="material-symbols-outlined">ios_share</span>
            <span>記録の送信</span>
          </div>
        </h2>

        <div className="send_outer">
          LINEやメッセージアプリで自分宛てに送信して記録を残そう。プライベートな写真を送るときは送り先に注意しよう。
        </div>

        <div className="send_outer" onClick={share}>
          <label className="label shadow-lg">
            <span className="material-symbols-outlined">ios_share</span>
            <span> 送信しよう</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default Send;
