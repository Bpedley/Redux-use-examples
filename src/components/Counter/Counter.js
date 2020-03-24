import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../redux/actions/Counter";
import "./Counter.scss";

class Counter extends Component {
  state = {
    input: 1
  };

  handleChange = e => {
    this.setState({
      input: e.target.value.replace(/\D/, "")
    });
  };

  handleIncrement = () => {
    this.props.increment(this.state.input);
  };

  handleDecrement = () => {
    this.props.decrement(this.state.input);
  };

  handleReset = () => {
    this.setState({ input: 1 });
    this.props.reset();
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter-title">Counter example</h1>
        <span>{this.props.count}</span>
        <h3>Change counter by {this.state.input}</h3>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          className="counter-input"
        />
        <br />
        <button className="counter-btn" onClick={this.handleIncrement}>
          +
        </button>
        <button className="counter-btn" onClick={this.handleDecrement}>
          -
        </button>
        <button className="counter-btn" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps, { increment, decrement, reset })(
  Counter
);
