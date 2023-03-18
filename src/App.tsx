import React from "react";
import "./App.css";
import logo from "./logo.svg";
import AutoComplete from "./components/AutoComplete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Cristian Avila" />
        <p>Type a tesla model to search</p>
        <AutoComplete />
      </header>
    </div>
  );
}

export default App;
