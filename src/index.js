import React from "react";

import { render } from "react-dom";

import "./index.css";
import App from "./App";
import { ThemeProvider } from "./providers/theme-provider";

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  root
);
