import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import Counter from "./components/Counter/Counter";
import Posts from "./components/Posts/Posts";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="content">
        <Counter />
        <Posts />
      </div>
    </Provider>
  );
};

export default App;
