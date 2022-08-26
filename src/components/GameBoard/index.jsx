import React from "react";

import "./index.css";
import TextForBoard from "./TextForBoard";
import PlayBoard from "./PlayBoard";

const GameBoard = () => {
  return (
    <div className="game-board">
      <TextForBoard />
      <PlayBoard />
    </div>
  );
};

export default GameBoard;
