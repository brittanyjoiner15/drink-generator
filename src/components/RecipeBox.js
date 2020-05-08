import React from "react";
import jsonData from "../drinks.json";

//** filter for showing only stuff with value */

export class RecipeBox extends React.Component {
  render() {
    console.log(this.props.ingredient);

    const filteredDrinks = jsonData.Drinks.filter((drink) => {
      return drink.ingredients.includes(this.props.ingredient);
    });

    return (
      <div className="Container mx-2 recipeBox">
        <div className="Row">
          <div ClassName="Col">
            <h1>Recipes</h1>
          </div>
        </div>

        {filteredDrinks.map((drink, i) => {
          return (
            <div className="row">
              <div className="col m-3 drinkBox p-2" key={drink.name}>
                <h4>{drink.name}</h4>
                <div className="Row d-flex p-3">
                  <div className="col-md-6">
                    <img src={drink.image} width="50%" />
                  </div>
                  <div className="col-md-6">
                    <h4>{drink.ingredients.join(", ")}</h4>
                    <h4>{drink.directions}</h4>
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
