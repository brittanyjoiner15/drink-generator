import React from "react";
import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

export class ChooseDrink extends React.Component {
  render() {
    return (
      <div className="Container py-5">
        <div classNam="Row">
          <div className="Col">
            <h3>Pick your poison</h3>
            <form onSubmit={this.props.onSubmit}>
              <div className="form-group">
                <select className="form-control-lg" id="cars" name="cars">
                  <option value="whiskey">Whiskey</option>
                  <option value="rum">Rum</option>
                  <option value="bourbon">Bourbon</option>
                  <option value="vodka">Vodka</option>
                  <option value="gin">Gin</option>
                  <option value="kahlua">Kahlua</option>
                  <option value="tequila">Tequila</option>
                  <option value="baileys">Baileys</option>
                  <option value="brandy">Brandy</option>
                  <option value="scotch">Scotch</option>
                  <option value="vermouth">Vermouth</option>
                </select>
              </div>
              <button type="submit" className="btn-primary btn-lg my-3">
                Show Me Drinks
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
