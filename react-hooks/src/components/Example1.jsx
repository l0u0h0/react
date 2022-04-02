import React, { Component } from "react";

export default class Example1 extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>button</button>
      </div>
    );
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
