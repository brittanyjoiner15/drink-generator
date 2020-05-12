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
        {filteredDrinks.map((drink, i) => {
          return (
            <div className="row p-4 drinkBox" key={drink.name}>
              <div className="col-md-6  drinkImg">
                <img src={drink.image} width="70%" />
              </div>
              <div className="col-md-6">
                <h2>
                  <em>{drink.name}</em>
                </h2>
                <ul className="ingredientList">
                  {drink.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <br />
                <p>{drink.directions}</p>
                <a href={drink.source}>Source</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
