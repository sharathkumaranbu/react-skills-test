import React from "react";

import { render } from "react-dom";

import "./index.css";
import "./myapp.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AppThemeProvider } from "./Theme-Provider/Provider";

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
