import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "./types";

export const increment = number => dispatch => {
  dispatch({
    type: INCREMENT_COUNTER,
    number
  });
};

export const decrement = number => dispatch => {
  dispatch({
    type: DECREMENT_COUNTER,
    number
  });
};

export const reset = () => dispatch => {
  dispatch({
    type: RESET_COUNTER
  });
};
