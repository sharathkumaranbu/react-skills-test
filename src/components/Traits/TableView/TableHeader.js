import React, { useState } from "react";

import {
  TableCell,
  TableHead,
  Checkbox,
  TableRow,
  Drawer,
} from "@material-ui/core";
import TuneIcon from "@material-ui/icons/Tune";

import { styled } from "@material-ui/styles";

import ColumnManager from "./ColumnManager";

export function TableHeader({
  onSelectAllClick,
  numSelected,
  rowCount,
  columns,
  setColumns,
}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(value);
  };

  const handleChange = (event) => {
    event.stopPropagation();
    const index = columns.findIndex(
      (column) => column.id === event.target.name
    );
    const columnsCopy = [...columns];
    columnsCopy[index] = {
      ...columnsCopy[index],
      show: event.target.checked,
    };
    setColumns(columnsCopy);
  };

  return (
    <TableHead>
      <StyledTableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {columns.map((column) => {
          return column.show ? (
            <TableCell
              key={column.id}
              align="left"
              style={{ fontWeight: "600" }}
            >
              {column.label}
            </TableCell>
          ) : null;
        })}
        <TableCell>
          <TuneIcon
            style={{
              position: "relative",
              top: "8px",
              left: "10px",
            }}
            onClick={toggleDrawer(true)}
          />
        </TableCell>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <ColumnManager
            toggleDrawer={toggleDrawer}
            columns={columns}
            handleChange={handleChange}
          />
        </Drawer>
      </StyledTableRow>
    </TableHead>
  );
}

export const StyledTableRow = styled(TableRow)(() => {
  return {
    "&:nth-of-type(odd)": {
      backgroundColor: "#ffffff", // accessing the theme
    },
    "&:nth-of-type(even)": {
      backgroundColor: "rgb(251 238 238)",
    },
  };
});
