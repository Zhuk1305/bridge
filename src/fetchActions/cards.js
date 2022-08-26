/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { setCard, setIsFetching } from "../reducers/cardReducer";

export const getCards = () => {
  return async (dispath) => {
    dispath(setIsFetching(true));
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const newRes = await axios.get(
      `https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=2`
    );

    dispath(setCard(newRes.data.cards));
  };
};
