import React, { useState, useContext } from "react";

import { Box } from "@material-ui/core";

import AccountTreeOutlined from "@material-ui/icons/AccountTreeOutlined";
import AllInclusiveOutlinedIcon from "@material-ui/icons/AllInclusiveOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";

import { Link } from "react-router-dom";

import { ThemeContext } from "../Theme-Provider/Provider";

const menuList = [
  {
    name: "Home",
    icon: <HomeOutlinedIcon />,
    path: "/home",
  },
  {
    name: "Traits",
    icon: <PeopleOutlinedIcon />,
    path: "/traits",
  },
  {
    name: "settings",
    icon: <AllInclusiveOutlinedIcon />,
    path: "/settings",
  },
  {
    name: "Account",
    icon: <AccountTreeOutlined />,
    path: "/accounts",
  },
];

function SideBar() {
  const { theme } = useContext(ThemeContext);
  const [activeMenu, setActiveMenu] = useState("Home");
  return (
    <Box
      className="sideBar"
      style={{ background: theme === "light" ? "#fff" : "#292b31" }}
    >
      <MenuOutlinedIcon />
      {menuList.map((menu) => {
        return (
          <Link
            to={menu.path}
            key={menu.name}
            onClick={() => setActiveMenu(menu.name)}
          >
            <div
              className={`menuIcon ${
                activeMenu === menu.name ? "selected" : ""
              }`}
            >
              {menu.icon}
            </div>
          </Link>
        );
      })}
    </Box>
  );
}

export default SideBar;
