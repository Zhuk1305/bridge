import React from "react";
import { useSelector } from "react-redux";
import { DEFAULT_STATE } from "../../constants";

const TextForBoard = () => {
  const status = useSelector((state) => state.balance.status);

  const getTextDisplay = (currentStatus) => {
    switch (currentStatus) {
      case "ready":
        return "Кто выиграет?";
      case "win":
        return `Вы выиграли ${DEFAULT_STATE.DEFAULT_BET * 2}$!`;
      case "lose":
        return "Вы проиграли :(";

      default:
        return "Кто выиграет?";
    }
  };

  return (
    <div className="text-board">
      <h1>{getTextDisplay(status)}</h1>
      {status === "ready" && (
        <p className="text-board_help">Сыграй в игру и испытай удачу</p>
      )}
    </div>
  );
};

export default TextForBoard;
