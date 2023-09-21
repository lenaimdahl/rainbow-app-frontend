import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextWrapper } from "./context/auth.context";
import { GlobalContextWrapper } from "./context/global.context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextWrapper>
      <AuthContextWrapper>
        <Router>
          <App />
        </Router>
      </AuthContextWrapper>
    </GlobalContextWrapper>
  </React.StrictMode>
);

reportWebVitals();
