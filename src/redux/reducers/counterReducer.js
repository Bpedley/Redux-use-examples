import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  SET_COUNTER
} from "../actions/Counter/types";

const initialState = {
  count: 0,
  input: 1
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + +action.payload
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - +action.payload
      };
    case RESET_COUNTER:
      return {
        count: 0,
        input: 1
      };
    case SET_COUNTER:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
