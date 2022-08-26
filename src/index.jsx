import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./reducers";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
