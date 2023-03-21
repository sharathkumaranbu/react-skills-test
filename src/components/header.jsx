import { useContext } from "react";

import { Avatar, Switch } from "@material-ui/core";

import { ThemeContext } from "../providers/theme-provider";
import getFirstLetter from "../utils/string-operations";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const username = "Anirudhan Srisudhan";
  return (
    <header className={`header ${theme}`}>
      <h2 className="logo">CRS</h2>
      <div className="header_profile">
        <Switch
          checked={theme !== "light"}
          color="primary"
          onChange={() => toggleTheme()}
        />
        <Avatar sx={{ width: 24, height: 24 }} className="small_container">
          {getFirstLetter(username)}
        </Avatar>
        <h3 className="small_container truncate">{username}</h3>
      </div>
    </header>
  );
}

export default Header;
