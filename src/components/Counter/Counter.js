import React from "react";
import "./Counter.scss";

const Counter = ({ count, increment, decrement, countValue, setCount, reset }) => {
  return (
    <div className="counter">
      <h1 className="counter-title">Counter example</h1>
      <span>{count}</span>
      <h3>Change counter by {countValue}</h3>
      <input className="counter-input" value={countValue} onChange={setCount} />
      <br />
      <button className="counter-btn" onClick={() => increment(countValue)}>
        +
      </button>
      <button className="counter-btn" onClick={() => decrement(countValue)}>
        -
      </button>
      <button className="counter-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
