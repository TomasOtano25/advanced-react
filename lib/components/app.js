import React, { Component } from "react";

export default class App extends Component {
  state = {
    answer: 42
  };

  render() {
    return (
      <div>
        <h2> Hello -- {this.state.answer}</h2>
      </div>
    );
  }
}
