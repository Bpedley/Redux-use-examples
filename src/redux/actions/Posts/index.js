import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => {
  return dispatch => {
    fetch("http://jsonplaceholder.typicode.com/posts?_limit=20")
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
};

export const createPost = postData => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(post => {
        dispatch({
          type: NEW_POST,
          payload: post
        });
      });
  };
};
