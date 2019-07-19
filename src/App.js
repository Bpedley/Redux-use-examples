import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Counter example</h1>
          <Counter />
          <h1>Fetch posts example</h1>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
