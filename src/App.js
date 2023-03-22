import React, { useContext } from "react";

import { Box } from "@material-ui/core";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { BrowserRouter, Redirect, Route } from "react-router-dom";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Accounts from "./Pages/Accounts";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Traits from "./Pages/Traits";
import darkTheme from "./Theme-Provider/darkTheme";
import lightTheme from "./Theme-Provider/lightTheme";

import { ThemeContext } from "./Theme-Provider/Provider";

const light = createMuiTheme(lightTheme);
const dark = createMuiTheme(darkTheme);

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <MuiThemeProvider theme={theme === "light" ? light : dark}>
      <Box
        style={{
          paddingLeft: "60px",
        }}
        className={`theme_${theme}`}
      >
        <BrowserRouter>
          <Header />
          <SideBar />
          <Route path="/">
            <Redirect to="/traits" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/traits">
            <Traits />
          </Route>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </BrowserRouter>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
