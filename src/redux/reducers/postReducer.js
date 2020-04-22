import {
  GET_POSTS,
  NEW_POST,
  REQUEST_POSTS,
  SET_INPUT_FIELDS
} from "../actions/Posts/types";

const initialState = {
  items: [],
  item: {},
  title: "",
  body: "",
  isFetching: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case GET_POSTS:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      };
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items],
        item: action.payload
      };
    case SET_INPUT_FIELDS:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    default:
      return state;
  }
};

export default postReducer;
