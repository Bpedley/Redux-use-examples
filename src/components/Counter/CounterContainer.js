import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  reset,
  setCount
} from "../../redux/actions/Counter";

const CounterContainer = props => {
  return <Counter {...props} />;
};

const mapStateToProps = state => ({
  count: state.counter.count,
  countValue: state.counter.input
});

export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
  setCount
})(CounterContainer);
