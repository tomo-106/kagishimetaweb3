import React, { createContext, useState } from "react";
import "./reset.scss";
import "./App.scss";
import Logo from "./component/Logo";
import Menu from "./component/Menu";  

export const UserContext =  createContext({} as {
  buttonClass: string[]
  setButtonClass: React.Dispatch<React.SetStateAction<string[]>>
})
function App() {
  const [buttonClass, setButtonClass] = useState(["value"])

  return (
    <UserContext.Provider value={{buttonClass,setButtonClass}}>
      <div className="App">
        <header>
          <Logo></Logo>
        </header>
        <section className="container">
          <div></div>
          <nav>
            <Menu></Menu>
          </nav>
        </section>
        <footer>
          <small>©2023 鍵閉めたかなWeb3</small>
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
