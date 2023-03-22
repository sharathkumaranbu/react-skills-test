import React, { useContext } from "react";

import {
  Box,
  Container,
  FormControlLabel,
  Switch,
  Avatar,
  Button,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { ThemeContext } from "../Theme-Provider/Provider";

function Header() {
  const { switchTheme, theme } = useContext(ThemeContext);
  return (
    <Box
      className="header"
      style={{
        background: theme === "light" ? "#fff" : "#292b31",
      }}
    >
      <Container className="flex_justify_content">
        <h4>
          <span style={{ color: theme === "light" ? "#000" : "#fff" }}>
            Consumer 360 &#176;
          </span>{" "}
          <span style={{ color: "green" }}>CRS</span>
        </h4>
        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Switch
                sx={{ m: 1 }}
                checked={theme === "dark"}
                onChange={(event) => {
                  switchTheme();
                  localStorage.setItem(
                    "MYAPP_THEME",
                    event.target.checked ? "dark" : "light"
                  );
                }}
              />
            }
            label=""
          />
          <Avatar>MG</Avatar>
          <Button
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            style={{
              backgroundColor: theme === "light" ? "#fff" : "#292b31",
              color: theme === "light" ? "#000" : "#fff",
              textTransform: "capitalize",
            }}
          >
            Manjunathan G
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
