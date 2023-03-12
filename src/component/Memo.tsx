import React, { useContext } from "react";
import { UserContext } from "../App";

function Memo() {
  const { memo, setMemo } = useContext(UserContext);

  const handleChange = (e: any) => {
    setMemo(e.target.value);
  };
  return (
    <>
      <div className="box shadow-lg">
        <h2 className="heading">
          <div>
            <span className="material-symbols-outlined">note_alt</span>
            <span>確認メモ</span>
          </div>
        </h2>
        <div className="memo_outer">
          <span>
            確認メモを追加できます。最大200文字まで入力できますので、タグ以外に記録したいことを入力しましょう。
          </span>
          <input
            onChange={handleChange}
            maxLength={200}
            type="text"
            name="memo"
            id="memo"
            className="memo"
            placeholder="メモを入力しよう"
          />
        </div>
      </div>
    </>
  );
}

export default Memo;
