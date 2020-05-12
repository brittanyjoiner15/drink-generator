import React from "react";
import jsonData from "../drinks.json";

export class Stack extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">Head</div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>Content</p>
          </div>
          <div className="col-md-6">
            <p>Content</p>
          </div>
        </div>
      </div>
    );
  }
}
