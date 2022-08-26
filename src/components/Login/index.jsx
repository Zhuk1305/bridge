import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const checkInputValue = (loginValue, passwordValue) => {
    if (loginValue === "admin" && passwordValue === "123456") {
      localStorage.setItem("LogIn", true);
      window.location = "/";
    }
  };

  return (
    <div className="login">
      <h1 className="login-header">Sing in to your account</h1>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        name="login"
        placeholder="Login"
        className="login-input input-top"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password"
        className="login-input input-bottom"
      />
      <button
        type="button"
        className="submit-button"
        onClick={() => checkInputValue(login, password)}
      >
        Sign In
      </button>
    </div>
  );
};
export default Login;
