import { useContext } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Home, TraitManagement, PlaceHolder } from "./pages";
import { ThemeContext } from "./providers/theme-provider";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} App`}>
      <BrowserRouter>
        <Sidebar />
        <main className="main">
          <Header />
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
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
