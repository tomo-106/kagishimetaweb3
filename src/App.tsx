import React from "react";
import "./App.scss";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <div>
              <img src={logo} alt="logo" />
              <span className="title">鍵閉めたかなWeb3</span>
            </div>
          </div>
        </nav>
      </header>
      <section className="container"></section>
    </div>
  );
}

export default App;
