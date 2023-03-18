import { useContext } from "react";

import "./App.css";
import Header from "./components/header";
import { ThemeContext } from "./providers/theme-provider";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App_${theme} App`}>
      <Header />
    </div>
  );
}

export default App;
