import { useContext } from "react";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Home, TraitManagement, PlaceHolder } from "./pages";
import { ThemeContext } from "./providers/theme-provider";

const myMuiTheme = createMuiTheme({
  checkbox: { checkedColor: "yellow" },
});

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} App`}>
      <MuiThemeProvider theme={myMuiTheme}>
        <BrowserRouter>
          <Sidebar />
          <main className="main">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/trait-management">
                <TraitManagement />
              </Route>
              <Route path="/collaborate">
                <PlaceHolder />
              </Route>
              <Route path="/sync">
                <PlaceHolder />
              </Route>
              <Route path="/focus">
                <PlaceHolder />
              </Route>
              <Route path="/team">
                <PlaceHolder />
              </Route>
              <Route path="/progress">
                <PlaceHolder />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
