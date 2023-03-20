import { useContext, useState } from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Tune } from "@material-ui/icons";

import TraitModal from "./trait-modal";
import traits from "../constants/get-all-traits.json";
import useClickOutside from "../hooks/use-click-outside";
import { ThemeContext } from "../providers/theme-provider";

const headerRow = [
  {
    id: "trait-id",
    label: "Trait ID",
  },
  {
    id: "trait-name",
    label: "Trait Name",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "data-type",
    label: "Data Type",
  },
  {
    id: "personal-data",
    label: "Personal Data",
  },
];

const tableData = traits.data.items;

export default function TraitsTable({ selectedItems, setSelectedItems }) {
  const { theme } = useContext(ThemeContext);
  const [pageNo, setPageNo] = useState(traits.data.page - 1);
  const [itemsPerPage, setItemsPerPage] = useState(traits.data.itemsPerPage);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrait, setSelectedTrait] = useState();
  const [visibleColumns, setVisibleColumns] = useState(
    headerRow.map((row) => row.id)
  );

  const pageData = tableData.slice(
    pageNo * itemsPerPage,
    pageNo * itemsPerPage + itemsPerPage
  );

  function handleChangePage() {}

  function handleSelectAllToggle(event) {
    if (event.target.checked) {
      const newSelected = pageData.map((item) => item.traitId);
      setSelectedItems(newSelected);
    } else {
      setSelectedItems([]);
    }
  }

  function handleRowClick(traitId) {
    setSelectedTrait(traitId);
    setIsModalOpen(true);
  }

  function handleSelectToggle(event, traitId) {
    const selectedIndex = selectedItems.indexOf(traitId);
    let newSelected = [];

    if (selectedIndex < 0) {
      newSelected = newSelected.concat(selectedItems, traitId);
    } else {
      newSelected = selectedItems.slice();
      newSelected.splice(selectedIndex, 1);
    }
    setSelectedItems(newSelected);
  }

  function handleVisibleColumnChange(colId) {
    const selectedIndex = visibleColumns.indexOf(colId);
    let newVisible = [];

    if (selectedIndex < 0) {
      newVisible = newVisible.concat(visibleColumns, colId);
    } else {
      newVisible = visibleColumns.slice();
      newVisible.splice(selectedIndex, 1);
    }
    setVisibleColumns(newVisible);
  }

  const domNode = useClickOutside(() => setIsOpen(false));

  return (
    <div className="traits_table">
      <TableContainer className="traits_table_container">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ height: 1 }}>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  className={theme}
                  checked={
                    selectedItems.length > 0 &&
                    selectedItems.length === itemsPerPage
                  }
                  indeterminate={
                    selectedItems.length > 0 &&
                    selectedItems.length < itemsPerPage
                  }
                  onChange={(event) => handleSelectAllToggle(event)}
                />
              </TableCell>
              {headerRow.map(
                (headCell) =>
                  visibleColumns.includes(headCell.id) && (
                    <TableCell key={headCell.id}>
                      <p className={`table_header ${theme}`}>
                        {headCell.label}
                      </p>
                    </TableCell>
                  )
              )}
              <TableCell ref={domNode} align="right">
                <Button onClick={() => setIsOpen(!isOpen)}>
                  <Tune className={theme} />
                </Button>
                {isOpen && (
                  <FormGroup className={`column_filter ${theme}`}>
                    {headerRow.map((headCell) => (
                      <FormControlLabel
                        control={
                          <Switch
                            color="primary"
                            checked={visibleColumns.includes(headCell.id)}
                            onChange={() =>
                              handleVisibleColumnChange(headCell.id)
                            }
                          />
                        }
                        label={headCell.label}
                      />
                    ))}
                  </FormGroup>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageData.map((row) => {
              return (
                <TableRow role="checkbox" tabIndex={-1} key={row.traitId}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selectedItems.includes(row.traitId)}
                      onChange={(event) =>
                        handleSelectToggle(event, row.traitId)
                      }
                    />
                  </TableCell>
                  {visibleColumns.includes(headerRow[0].id) && (
                    <TableCell>
                      <button
                        type="button"
                        onClick={() => handleRowClick(row.traitId)}
                        className={`anchor_button ${theme}`}
                      >
                        {row.traitId}
                      </button>
                    </TableCell>
                  )}
                  {visibleColumns.includes(headerRow[1].id) && (
                    <TableCell>
                      <p className={theme}>{row.traitName}</p>
                    </TableCell>
                  )}
                  {visibleColumns.includes(headerRow[2].id) && (
                    <TableCell>
                      <p className={theme}>{row.description}</p>
                    </TableCell>
                  )}
                  {visibleColumns.includes(headerRow[3].id) && (
                    <TableCell>
                      <p className={theme}>{row.dataType}</p>
                    </TableCell>
                  )}
                  {visibleColumns.includes(headerRow[4].id) && (
                    <TableCell>
                      <p className={theme}>{row.personalData.toString()}</p>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={traits.data.totalItems}
        rowsPerPage={itemsPerPage}
        page={pageNo}
        onChangePage={() => handleChangePage()}
        onPageChange={() => handleChangePage()}
        onRowsPerPageChange={(event) => {
          setItemsPerPage(parseInt(event.target.value, 10));
          setPageNo(0);
        }}
      />
      <TraitModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        traitId={selectedTrait}
      />
    </div>
  );
}
