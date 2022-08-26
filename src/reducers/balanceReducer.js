/* eslint-disable no-unused-expressions */
/* eslint-disable default-param-last */
const ADD_BALANCE = "ADD_BALANCE";
const TAKE_BALANCE = "TAKE_BALANCE";
const SET_LOSE_STATUS = "SET_LOSE_STATUS";

const stateDefault = { balance: 100, status: "ready" };

export default function balanceReducer(state = stateDefault, action) {
  switch (action.type) {
    case ADD_BALANCE:
      return {
        ...state,
        balance: state.balance + action.payload,
        status: "win",
      };
    case TAKE_BALANCE:
      return {
        ...state,
        balance: state.balance - action.payload,
        status: "ready",
      };
    case SET_LOSE_STATUS:
      return {
        ...state,
        status: "lose",
      };
    default:
      return state;
  }
}

export const addBalance = (balance) => ({
  type: ADD_BALANCE,
  payload: balance,
});

export const takeBalance = (balance) => ({
  type: TAKE_BALANCE,
  payload: balance,
});

export const setStatusLose = () => ({
  type: SET_LOSE_STATUS,
});
