/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBalance,
  setStatusLose,
  takeBalance,
} from "../../reducers/balanceReducer";
import { getCards } from "../../fetchActions/cards";
import { DEFAULT_STATE, SUIT_WEIGTH, IMG_CARD_WEIGTH } from "../../constants";
import "./index.css";

const PlayBoard = () => {
  const shirtForCard =
    "https://i.pinimg.com/originals/13/25/05/132505ba3238e79c00034c905b2ca045.jpg";
  const [isPlay, setIsPlay] = useState(false);
  const [isSuit, setIsSuit] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const isFetching = useSelector((state) => state.cards.isFetching);

  const changeStatusForReady = () => {
    dispatch(setStatusLose());
  };

  const setBetting = (bet) => {
    dispatch(takeBalance(bet));
    dispatch(getCards());
    setIsPlay(true);
    setIsSuit(false);
  };

  const winBalance = (win) => {
    dispatch(addBalance(win * 2));
  };

  const getWeigthSuit = (suit) => {
    switch (suit) {
      case "SPADES":
        return SUIT_WEIGTH.SPADE_WEIGTH;
      case "CLUBS":
        return SUIT_WEIGTH.CLUB_WEIGTH;
      case "DIAMONDS":
        return SUIT_WEIGTH.DIAMOND_WEIGTH;
      case "HEARTS":
        return SUIT_WEIGTH.HEART_WEIGTH;
      default:
        return SUIT_WEIGTH.NONE_SUIT;
    }
  };

  const convertCart = (value) => {
    switch (value) {
      case "ACE":
        return IMG_CARD_WEIGTH.ACE_VALUE;
      case "KING":
        return IMG_CARD_WEIGTH.KING_VALUE;
      case "QUEEN":
        return IMG_CARD_WEIGTH.QUEEN_VALUE;
      case "JACK":
        return IMG_CARD_WEIGTH.JACK_VALUE;
      default:
        return +value;
    }
  };

  const chooseWin = (side) => {
    setIsSuit(true);

    const cardLeft = convertCart(cards[0].value);
    const cardRight = convertCart(cards[1].value);

    if (side === "left") {
      if (cardLeft > cardRight) {
        winBalance(DEFAULT_STATE.DEFAULT_BET);
      } else if (cardLeft < cardRight) {
        changeStatusForReady();
      } else if (getWeigthSuit(cards[0].suit) > getWeigthSuit(cards[1].suit)) {
        winBalance(DEFAULT_STATE.DEFAULT_BET);
      } else {
        changeStatusForReady();
      }
    }
    if (side === "right") {
      if (cardLeft < cardRight) {
        winBalance(DEFAULT_STATE.DEFAULT_BET);
      } else if (cardLeft > cardRight) {
        changeStatusForReady();
      } else if (getWeigthSuit(cards[0].suit) < getWeigthSuit(cards[1].suit)) {
        winBalance(DEFAULT_STATE.DEFAULT_BET);
      } else {
        changeStatusForReady();
      }
    }
    setIsPlay(false);
  };

  return (
    <div className="play-board">
      <img
        className="card-img"
        src={!isSuit ? shirtForCard : cards[0] && cards[0].image}
        onClick={() => isPlay && !isFetching && chooseWin("left")}
        alt="left card"
      />
      {!isPlay ? (
        <div className="button-container">
          <button
            type="button"
            className="play-button"
            onClick={() => setBetting(DEFAULT_STATE.DEFAULT_BET)}
          >
            Играть
          </button>
        </div>
      ) : (
        <div className="button-container">
          <button
            type="button"
            className="chose-button"
            disabled={isFetching}
            onClick={() => !isFetching && chooseWin("left")}
          >
            Слева
          </button>
          <button
            type="button"
            className="chose-button"
            disabled={isFetching}
            onClick={() => chooseWin("right")}
          >
            Справа
          </button>
        </div>
      )}
      <img
        className={isSuit ? "card-img" : "card-img active"}
        src={!isSuit ? shirtForCard : cards[0] && cards[1].image}
        onClick={() => isPlay && !isFetching && chooseWin("right")}
        alt="right card"
      />
    </div>
  );
};

export default PlayBoard;
