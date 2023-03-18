import { useContext } from "react";

import { Avatar, Switch } from "@material-ui/core";

import { ThemeContext } from "../providers/theme-provider";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="logo_section">
        <h1 className="logo">CRS</h1>
      </div>
      <div className="header_profile">
        <Switch onChange={() => toggleTheme()} />
        <Avatar sx={{ width: 24, height: 24 }}>SM</Avatar>
        <h3 className="fullname">Firstname Lastname</h3>
      </div>
    </header>
  );
}

export default Header;
