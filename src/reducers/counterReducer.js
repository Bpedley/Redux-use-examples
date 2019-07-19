import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from "../actions/Counter/types";

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + Number(action.number)
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - Number(action.number)
      };
    case RESET_COUNTER:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counterReducer;
