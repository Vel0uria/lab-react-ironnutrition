import React, { Component } from "react";

export default class AddFood extends Component {
  state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };
  submit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };
  render() {
    const { name, calories, image, quantity = 1 } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} />
          <label htmlFor="calories">Calories</label>
          <input type="text" name="name" value={calories} />
          <label htmlFor="image">Image URL </label>
          <input
            type="text"
            name="image"
            value={image}
            placeholder="your image"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
