import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "./types";

export const increment = number => {
  return {
    type: INCREMENT_COUNTER,
    payload: number
  };
};

export const decrement = number => {
  return {
    type: DECREMENT_COUNTER,
    payload: number
  };
};

export const reset = () => {
  return {
    type: RESET_COUNTER
  };
};
