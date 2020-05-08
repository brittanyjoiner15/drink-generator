import React from "react";

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
                </select>
              </div>
              {/* to do - add button event to run above function */}
              <button type="submit" className="btn-primary btn-lg">
                Show Me Drinks
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
