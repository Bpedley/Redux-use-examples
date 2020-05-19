import {
  GET_POSTS,
  NEW_POST,
  FETCHING_TOGGLE,
  SET_INPUT_FIELDS,
  ERROR,
  FETCH_TYPE
} from "./types";
import { API } from "../../../api";

const postsFlow = async (dispatch, fetchType, apiMethod, fetchTypeAC, data) => {
  dispatch({ type: FETCHING_TOGGLE });
  dispatch({ type: FETCH_TYPE, payload: fetchType });

  const response = await apiMethod(data);

  if (response.status >= 200 && response.status < 300) {
    dispatch({ type: fetchTypeAC, payload: response.data });
    dispatch({ type: FETCHING_TOGGLE });
  } else {
    dispatch({
      type: ERROR,
      payload: {
        errorMessage: response,
        errorType: fetchType
      }
    });
    dispatch({ type: FETCHING_TOGGLE });
  }
};

export const getPosts = () => async dispatch => {
  const fetchType = "getPosts";
  postsFlow(dispatch, fetchType, API.getPosts.bind(API), GET_POSTS, null);
};

export const createPost = (e, postData) => async dispatch => {
  e.preventDefault();
  const fetchType = "createPost";
  postsFlow(dispatch, fetchType, API.createPost.bind(API), NEW_POST, postData);
};

export const setInputFields = e => {
  const { name, value } = e.target;
  return {
    type: SET_INPUT_FIELDS,
    payload: { name, value }
  };
};
