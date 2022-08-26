/* eslint-disable import/prefer-default-export */
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import balanceReducer from "./balanceReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
  cards: cardReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
