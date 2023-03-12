import React, { createContext, useState } from "react";
import "./reset.scss";
import "./App.scss";
import Logo from "./component/Logo";
import Menu from "./component/Menu";
import Explain from "./component/Explain";
import Tag from "./component/Tag";
import Memo from "./component/Memo";
import Photo from "./component/Photo";
import Send from "./component/Send";

export const UserContext = createContext(
  {} as {
    buttonChild: { url: string; icon: string; text: string }[];
    setbuttonChild: React.Dispatch<
      React.SetStateAction<{ url: string; icon: string; text: string }[]>
    >;
    files: File[];
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
    img: string;
    setImg: React.Dispatch<React.SetStateAction<string>>;
    output: string;
    setOutput: React.Dispatch<React.SetStateAction<string>>;
    tag: string[];
    setTag: React.Dispatch<React.SetStateAction<string[]>>;
    memo: string;
    setMemo: React.Dispatch<React.SetStateAction<string>>;
    
  }
);
function App() {
  const [buttonChild, setbuttonChild] = useState([
    { url: "#faq", icon: "help", text: "使い方" },
    { url: "#", icon: "keyboard_double_arrow_up", text: "TOPへ" },
  ]);
  const [files, setFiles] = useState<any[]>([""]);
  const [img, setImg] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [tag, setTag] = useState<string[]>([]);
  const [memo, setMemo] = useState<string>("");


  return (
    <UserContext.Provider
      value={{
        buttonChild,
        setbuttonChild,
        files,
        setFiles,
        img,
        setImg,
        output,
        setOutput,
        tag,
        setTag,
        memo,
        setMemo,
      }}
    >
      <div className="App">
        <header>
          <Logo></Logo>
          <nav>
            <Menu></Menu>
          </nav>
        </header>
        <section className="container">
          <Explain></Explain>
          <Tag></Tag>
          <Memo></Memo>
          <Photo></Photo>
          <Send></Send>
        </section>
        <footer>
          <small>©2023 鍵閉めたかなWeb3</small>
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
