import React, { useEffect } from "react";

import Header from "../components/Header";
import Balance from "../components/Balance";
import GameBoard from "../components/GameBoard";

import "../app.css";

const MainPage = () => {
  useEffect(() => {
    const isLoginIn = localStorage.getItem("LogIn");
    if (!JSON.parse(isLoginIn)) {
      window.location = "/login";
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <Balance />
      <GameBoard />
    </div>
  );
};

export default MainPage;
