import React from "react";
import "./index.css";

const Header = () => {
  const singOut = () => {
    localStorage.setItem("LogIn", false);
    window.location = "/login";
  };
  return (
    <div className="header">
      <div className="logo">Bridge</div>
      <button
        type="button"
        className="sing-out_button"
        onClick={() => singOut()}
      >
        SignOut
      </button>
    </div>
  );
};

export default Header;
