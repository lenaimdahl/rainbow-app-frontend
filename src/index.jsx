import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalContextWrapper } from "./context/global.context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextWrapper>
      <Router>
        <App />
      </Router>
    </GlobalContextWrapper>
  </React.StrictMode>
);

reportWebVitals();
