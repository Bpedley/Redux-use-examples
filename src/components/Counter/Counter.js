import React, { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../redux/actions/Counter";
import "./Counter.scss";

const Counter = ({ increment, decrement, reset, count }) => {
  const [input, setInput] = useState(1);

  const handleReset = () => {
    setInput(1);
    reset();
  };

  const handleInputChange = e => {
    const value = e.target.value.replace(/\D/, "");
    setInput(value);
  };

  return (
    <div className="counter">
      <h1 className="counter-title">Counter example</h1>
      <span>{count}</span>
      <h3>Change counter by {input}</h3>
      <input
        className="counter-input"
        value={input}
        onChange={handleInputChange}
      />
      <br />
      <button className="counter-btn" onClick={() => increment(input)}>
        +
      </button>
      <button className="counter-btn" onClick={() => decrement(input)}>
        -
      </button>
      <button className="counter-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps, { increment, decrement, reset })(
  Counter
);
