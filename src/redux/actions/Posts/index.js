import { FETCH_POSTS, NEW_POST, REQUEST_POSTS } from "./types";

export const fetchPosts = () => {
  return dispatch => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/posts?_limit=20"
    )
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
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(post => {
        dispatch({
          type: NEW_POST,
          payload: post
        });
      });
  };
};

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  };
};
