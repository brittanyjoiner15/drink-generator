import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { ChooseDrink } from "./components/ChooseDrink";

function App() {
  return (
    <div className="App">
      <Header />
      <ChooseDrink />
    </div>
  );
}

export default App;
