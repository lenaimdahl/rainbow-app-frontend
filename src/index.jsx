import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContextWrapper } from "./context/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextWrapper>
      <App />
    </GlobalContextWrapper>
  </React.StrictMode>
);

reportWebVitals();
