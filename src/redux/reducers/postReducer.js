import { FETCH_POSTS, NEW_POST, REQUEST_POSTS } from "../actions/Posts/types";

const initialState = {
  items: [],
  item: {},
  isFetching: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_POSTS:
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
    default:
      return state;
  }
};

export default postReducer;
