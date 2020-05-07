import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { ChooseDrink } from "./components/ChooseDrink";
import { RecipeBox } from "./components/RecipeBox";

function App() {
  return (
    <div className="App">
      <Header />
      <ChooseDrink />
      <RecipeBox />
    </div>
  );
}

export default App;
