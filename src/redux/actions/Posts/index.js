import {
  GET_POSTS,
  NEW_POST,
  FETCHING_TOGGLE,
  SET_INPUT_FIELDS,
  ERROR
} from "./types";
import { API } from "../../../api";

export const getPosts = () => async dispatch => {
  dispatch({ type: FETCHING_TOGGLE, payload: "getPosts" });
  const response = await API.getPosts();

  if (response.statusText === "OK") {
    dispatch({ type: GET_POSTS, payload: response.data });
    dispatch({ type: FETCHING_TOGGLE, payload: "getPosts" });
  } else {
    dispatch({
      type: ERROR,
      payload: {
        errorMessage: response,
        errorType: "getPosts"
      }
    });
    dispatch({ type: FETCHING_TOGGLE, payload: "getPosts" });
  }
};

export const createPost = (e, postData) => async dispatch => {
  e.preventDefault();
  dispatch({ type: FETCHING_TOGGLE, payload: "createPost" });
  const response = await API.createPost(postData);

  if (response.statusText === "Created") {
    dispatch({ type: NEW_POST, payload: response.data });
    dispatch({ type: FETCHING_TOGGLE, payload: "createPost" });
  } else {
    dispatch({
      type: ERROR,
      payload: {
        errorMessage: response,
        errorType: "createPost"
      }
    });
    dispatch({ type: FETCHING_TOGGLE, payload: "createPost" });
  }
};

export const setInputFields = e => {
  const { name, value } = e.target;

  return {
    type: SET_INPUT_FIELDS,
    payload: { name, value }
  };
};
