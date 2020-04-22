import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import CounterContainer from "./components/Counter/CounterContainer";
import PostsContainer from "./components/Posts/PostsContainer";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="content">
        <CounterContainer />
        <PostsContainer />
      </div>
    </Provider>
  );
};

export default App;
