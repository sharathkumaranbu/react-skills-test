import React, { useState } from "react";

// import { alpha } from "@material-ui/styles";//
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Checkbox,
  Button,
  TextField,
} from "@material-ui/core";

import { TableHeader, StyledTableRow } from "./TableHeader";
import PaginationContainer from "./TablePagination";
import { headCells } from "../ColumnConfig";
import { TraitResponseData } from "../Sample Response/TraitResponse";
import ViewTrait from "../ViewTraits/ViewTrait";

const rows = TraitResponseData.data.items;

export default function TraitsTable() {
  const [selected, setSelected] = useState([]);
  const [columns, setColumns] = useState(headCells);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [tabledata] = useState(rows);
  const [FilteredData, setFilteredData] = useState(rows);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.traitId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, traitId) => {
    const selectedIndex = selected.indexOf(traitId);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, traitId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleView = () => {
    setOpen(true);
  };

  const goToPage = (pageNumber) => {
    setPage(parseInt(pageNumber, 10));
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    const localCopy = [...tabledata];
    const filtereData = localCopy.filter((item) => {
      return (
        item.traitName.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.dataType.toLowerCase().includes(value)
      );
    });
    setPage(1);
    setFilteredData(filtereData);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const startIndex = rowsPerPage * (page - 1);
  const endIndex = rowsPerPage * page;
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  return (
    <Box style={{ width: "100%", position: "relative" }}>
      <Box className="flex_justify_content createbutton">
        <Button
          style={{ background: "blue", color: "#fff" }}
          size="small"
          variant="contained"
          primary
        >
          {selected.length ? "REUSE" : "Create Trait"}
        </Button>
        <TextField
          label="Search"
          variant="standard"
          className="traitsSearch"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
      </Box>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <TableHeader
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={tabledata.length}
            columns={columns}
            setColumns={setColumns}
          />
          <TableBody>
            {FilteredData.slice(startIndex, endIndex).map((row, index) => {
              const isItemSelected = isSelected(row.traitId);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <StyledTableRow
                  hover
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.traitId}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      onClick={(event) => handleClick(event, row.traitId)}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  {columns[0].show && (
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      variant="root"
                    >
                      <button
                        type="submit"
                        className="viewTrait"
                        onClick={handleView}
                      >
                        {row.traitId}
                      </button>
                    </TableCell>
                  )}
                  {columns[1].show && (
                    <TableCell align="left">{row.traitName}</TableCell>
                  )}
                  {columns[2].show && (
                    <TableCell align="left">{row.description}</TableCell>
                  )}
                  {columns[3].show && (
                    <TableCell align="left">{row.dataType}</TableCell>
                  )}
                  {columns[4].show && (
                    <TableCell align="left">
                      {row.personalData ? "true" : "false"}
                    </TableCell>
                  )}

                  <TableCell align="left"> </TableCell>
                </StyledTableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationContainer
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        goToPage={goToPage}
        pageCount={pageCount}
      />
      {open ? <ViewTrait setOpen={setOpen} open={open} /> : null}
    </Box>
  );
}
