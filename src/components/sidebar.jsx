import { useContext, useState } from "react";

import {
  AllInclusive,
  DeveloperModeOutlined,
  Flare,
  GpsFixed,
  HomeOutlined,
  Layers,
  Menu,
  Person,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { ThemeContext } from "../providers/theme-provider";

const menuList = [
  {
    id: "home",
    name: "Home",
    icon: <HomeOutlined />,
    path: "./home",
  },
  {
    id: "traits",
    name: "Traits Management",
    icon: <Person />,
    path: "./trait-management",
  },
  {
    id: "collaborate",
    name: "Collaborate",
    icon: <Flare />,
    path: "./collaborate",
  },
  {
    id: "sync",
    name: "Synchronize",
    icon: <AllInclusive />,
    path: "./sync",
  },
  {
    id: "focus",
    name: "Focus",
    icon: <GpsFixed />,
    path: "./focus",
  },
  {
    id: "team",
    name: "Team Building",
    icon: <Layers />,
    path: "./team",
  },
  {
    id: "progress",
    name: "Progress",
    icon: <DeveloperModeOutlined />,
    path: "./progress",
  },
];

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState(menuList[1].id);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`sidebar ${theme}`}>
      <div className="burger_menu">
        <Menu />
      </div>
      {menuList.map((menuItem) => {
        return (
          <Link
            to={menuItem.path}
            key={menuItem.id}
            onClick={() => setSelectedMenu(menuItem.id)}
          >
            <div
              className={`icon_container ${theme} ${
                selectedMenu === menuItem.id ? "selected" : ""
              }`}
            >
              {menuItem.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
