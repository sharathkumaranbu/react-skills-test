import React from "react";

import {
  Box,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationContainer({
  rowsPerPage,
  page,
  handleChangeRowsPerPage,
  handleChangePage,
  goToPage,
  pageCount,
}) {
  return (
    <Box
      className="flex_justify_content"
      style={{
        padding: "10px",
      }}
    >
      <div>
        <label htmlFor="demo-simple-select-standard">Rows per page : </label>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
          size="small"
        >
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex_justify_content">
        <label>Go to page : </label>
        <FormControl sx={{ width: "5px" }} size="small">
          <OutlinedInput
            style={{ marginLeft: "5px", width: "54px", height: "29px" }}
            placeholder="Page"
            min="1"
            value="1"
            onBlur={(e) => goToPage(e.target.value)}
          />
        </FormControl>
      </div>
      <Pagination
        count={pageCount}
        onChange={handleChangePage}
        page={page}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
