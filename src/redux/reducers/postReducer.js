import {
  GET_POSTS,
  NEW_POST,
  FETCHING_TOGGLE,
  SET_INPUT_FIELDS,
  IS_POSTING_DATA
} from "../actions/Posts/types";

const initialState = {
  items: [],
  item: {},
  title: "",
  body: "",
  isFetching: false,
  isPosting: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TOGGLE:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case GET_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items],
        item: action.payload,
        title: "",
        body: ""
      };
    case SET_INPUT_FIELDS:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    case IS_POSTING_DATA:
      return {
        ...state,
        isPosting: !state.isPosting
      };
    default:
      return state;
  }
};

export default postReducer;
