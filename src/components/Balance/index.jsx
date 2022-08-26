import React from "react";
import { useSelector } from "react-redux";

import "./index.css";

const Balance = () => {
  const balance = useSelector((state) => state.balance.balance);

  return (
    <div className="balance">
      <p className="balance-text">Balance: {balance}$</p>
    </div>
  );
};

export default Balance;
