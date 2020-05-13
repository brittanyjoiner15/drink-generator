import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { ChooseDrink } from "./components/ChooseDrink";
import { RecipeBox } from "./components/RecipeBox";
import { Stack } from "./components/stackingTest";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredient: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ ingredient: e.target.elements[0].value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <ChooseDrink onSubmit={this.onSubmit} />
        <RecipeBox ingredient={this.state.ingredient} />
        <Stack />
      </div>
    );
  }
}

export default App;
