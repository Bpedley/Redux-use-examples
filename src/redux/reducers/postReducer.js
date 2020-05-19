import {
  GET_POSTS,
  NEW_POST,
  FETCHING_TOGGLE,
  SET_INPUT_FIELDS,
  ERROR,
  FETCH_TYPE
} from "../actions/Posts/types";

const initialState = {
  items: [],
  item: {},
  title: "",
  body: "",
  isFetching: false,
  fetchType: "",
  errorMessage: "",
  errorType: ""
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TOGGLE:
      return {
        ...state,
        isFetching: !state.isFetching
      };
    case FETCH_TYPE:
      return {
        ...state,
        fetchType: action.payload
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
    case ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        errorType: action.payload.errorType
      };
    default:
      return state;
  }
};

export default postReducer;
