import React from "react";

import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import ClearIcon from "@material-ui/icons/ClearTwoTone";

export default function ColumnManager({ toggleDrawer, columns, handleChange }) {
  return (
    <Box
      sx={{ width: 250, background: "rgb(247 240 240)", height: "100%" }}
      role="presentation"
      /*  onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)} */
    >
      <div
        style={{
          width: "100%",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ClearIcon onClick={toggleDrawer(false)} />
        <h4 style={{ marginLeft: "20px" }}>Manage Columns</h4>
      </div>
      <FormControl
        component="fieldset"
        variant="standard"
        style={{ width: "100%", padding: "10px 30px", boxSizing: "border-box" }}
      >
        <FormGroup>
          {columns.map((column) => {
            return (
              <FormControlLabel
                style={{
                  width: "100%",
                  padding: "2px",
                  background: "#ffff",
                  marginBottom: "10px",
                }}
                key={column.id}
                control={
                  <Switch
                    checked={column.show}
                    onChange={handleChange}
                    name={column.id}
                  />
                }
                label={column.label}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
