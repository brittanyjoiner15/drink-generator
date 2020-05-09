import React from "react";
import jsonData from "../drinks.json";

//** filter for showing only stuff with value */

export class RecipeBox extends React.Component {
  render() {
    console.log(this.props.ingredient);

    const filteredDrinks = jsonData.Drinks.filter((drink) => {
      return drink.alcohol.includes(this.props.ingredient);
    });

    return (
      <div className="Container mx-2">
        <hr />
        {filteredDrinks.map((drink, i) => {
          return (
            <div className="row">
              <div className="col m-3 drinkBox p-4" key={drink.name}>
                <h2>
                  <em>{drink.name}</em>
                </h2>
                <hr />
                <div className="Row d-flex p-3">
                  <div className="col-md-6  drinkImg">
                    <img src={drink.image} width="70%" />
                  </div>
                  <div className="col-md-6">
                    <h4>{drink.ingredients.join(", ")}</h4>
                    <br />
                    <p>{drink.directions}</p>
                    <a href={drink.source}>Source</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
