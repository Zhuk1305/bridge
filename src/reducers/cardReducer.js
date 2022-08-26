/* eslint-disable default-param-last */
const SET_CARD = "SET_CARD";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const defaultState = {
  cards: [],
  isFetching: true,
};

export default function cardReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        cards: [...action.payload],
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}

export const setCard = (cards) => ({
  type: SET_CARD,
  payload: cards,
});

export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
