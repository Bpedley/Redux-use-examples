import {
  GET_POSTS,
  NEW_POST,
  FETCHING_TOGGLE,
  SET_INPUT_FIELDS,
  IS_POSTING_DATA
} from "./types";

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: FETCHING_TOGGLE });
    fetch(
      "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/posts?_limit=20"
    )
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: GET_POSTS,
          payload: posts
        });
        dispatch({ type: FETCHING_TOGGLE });
      });
  };
};

export const createPost = (e, postData) => {
  e.preventDefault();
  return dispatch => {
    dispatch({ type: IS_POSTING_DATA });
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
        dispatch({
          type: IS_POSTING_DATA
        });
      });
  };
};

export const setInputFields = e => {
  const { name, value } = e.target;

  return {
    type: SET_INPUT_FIELDS,
    payload: {
      name,
      value
    }
  };
};
