import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid topper py-5">
        <h1>Drink Recipe Generator</h1>
        <h3>Pick your alcohol and see recommended recipes!</h3>
      </div>
    );
  }
}
