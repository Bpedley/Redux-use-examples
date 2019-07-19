import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/Counter/index";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value.replace(/\D/, "")
    });
  }

  handleIncrement() {
    this.props.increment(this.state.input);
  }

  handleDecrement() {
    this.props.decrement(this.state.input);
  }

  handleReset() {
    this.setState({
      input: 1
    });
    this.props.reset();
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.props.counter.count}</h3>
        <h3>Change counter by {this.state.input}</h3>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement, reset }
)(Counter);
