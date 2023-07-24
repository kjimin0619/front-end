import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import App_reducer from "./App_reducer";
import Bank from "./Bank";
import Students from "./Students";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <App_reducer></App_reducer>
    <Bank></Bank>
    <Students></Students>
  </React.StrictMode>
);
