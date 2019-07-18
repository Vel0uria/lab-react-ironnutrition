import React, { Component } from "react";

import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import AddFood from "./components/AddFood";

class App extends Component {
  state = {
    foods: foods,
    showAddFood: false
  };
  changeBoolean = () => {
    this.setState({ [name]: !boolean });
  };

  showAdd = () => {
    if (this.showAddFood) {
      return <AddFood />;
    } else {
      return (
        <button onClick={this.changeBoolean(this.showAddFood, "showAddFood")}>
          Add
        </button>
      );
    }
  };
  render() {
    const { foods } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <div>
          {this.showAdd()}
          {foods.map((food, i) => (
            <FoodBox {...food} key={i} />
          ))}
        </div>
        <div />
      </div>
    );
  }
}

export default App;
