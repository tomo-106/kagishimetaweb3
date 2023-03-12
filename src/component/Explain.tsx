import React, { useState } from "react";

function Explain() {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <>
      <div className="box shadow-lg">
        <h2 className="explain">
          <span>鍵閉めたかなWeb3とは</span>
        </h2>
        <p>
          気にしてしまう項目をLINEに送信記録することで心配を軽減するアプリです。
        </p>
        <p>記録したら記録内容をLINEやメッセージアプリで自分（Keepメモ）や家族に送信できます。 </p>
        <p>
          このアプリを利用するにはLINEアプリがインストールされたスマートフォンが必要です。
        </p>
      </div>
      <div className="box shadow-lg">
        <div
          className={
            showFaq
              ? "close_state accordion_content"
              : "open_state accordion_content"
          }
        >
          <ol className="explain_list">
            <li>
              <span className="material-symbols-outlined">sell</span>
              タグの設定：確認したことをタグとして記録できます。確認したらボタン押してください。
            </li>
            <li>
              <span className="material-symbols-outlined">note_alt</span>
              確認メモ：記録したいことがタグにない場合は、確認メモに文章を入力できます。
            </li>
            <li>
              <span className="material-symbols-outlined">photo_camera</span>
              写真で記録：カメラを起動し、写真を撮って自分宛てに送信することで、画像で記録することができます。
            </li>
            <li>
              <span className="material-symbols-outlined">ios_share</span>
              記録の送信：記録したことを送信できます。プライベートな写真などを送信するときは送信先にご注意ください。
            </li>
          </ol>
        </div>
        <h2 id="faq" onClick={() => setShowFaq((e: boolean) => !e)}>
          <div className="icon_outer_left">
            <span className="material-symbols-outlined">live_help</span>
            <span>使い方</span>
          </div>

          {showFaq ? (
            <div className="icon_outer_right">
              <span className="material-symbols-outlined icon">remove</span>
              <span className="icon_text">CLOSE</span>
            </div>
          ) : (
            <div className="icon_outer_right">
              <span className="material-symbols-outlined icon">add</span>
              <span className="icon_text">OPEN</span>
            </div>
          )}
        </h2>
      </div>
    </>
  );
}

export default Explain;
