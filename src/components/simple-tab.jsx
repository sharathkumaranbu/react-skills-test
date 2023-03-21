import { useContext, useEffect, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Tab,
  Tabs,
} from "@material-ui/core";

import SearchField from "./search-field";
import TabPanel from "./tab-panel";
import TraitsTable from "./traits-table";
import traits from "../constants/get-all-traits.json";
import useClickOutside from "../hooks/use-click-outside";
import { ThemeContext } from "../providers/theme-provider";

const headerRow = [
  {
    id: "traitId",
    label: "Trait ID",
  },
  {
    id: "traitName",
    label: "Trait Name",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "dataType",
    label: "Data Type",
  },
  {
    id: "personalData",
    label: "Personal Data",
  },
  {
    id: "marketingPrograms",
    label: "Marketing Programs",
  },
  {
    id: "ecosystems",
    label: "Ecosystems",
  },
];

export default function BasicTabs() {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchColumn, setSearchColumn] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [tableData, setTableData] = useState(traits.data.items);

  useEffect(() => {
    const filteredData = traits.data.items.filter((item) => {
      const searchVar = item[searchColumn] ?? item.traitName;
      if (Array.isArray(searchVar)) {
        return searchVar.some((x) =>
          x.toString().toLowerCase().includes(searchTerm)
        );
      }
      return searchVar.toString().toLowerCase().includes(searchTerm);
    });
    setTableData(filteredData);
  }, [searchTerm, searchColumn, setTableData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchClick = () => {
    setIsDropdownOpen(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearchClear = () => {
    setSearchTerm("");
    setSearchColumn("");
    setIsDropdownOpen(false);
  };

  const domNode = useClickOutside(() => setIsDropdownOpen(false));

  return (
    <Box className="container">
      <Box className="tab_group">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="TRAITS" />
        </Tabs>
        <Box ref={domNode} className="tab_utils">
          <Button variant="contained" color="primary">
            {selectedItems.length > 0 ? "REUSE" : "CREATE TRAIT"}
          </Button>
          <SearchField
            placeholder="Search"
            value={searchTerm}
            handleClick={handleSearchClick}
            handleChange={handleSearchChange}
            handleClear={handleSearchClear}
          />
          {isDropdownOpen && (
            <FormGroup className={`column_search dropdown ${theme}`}>
              {headerRow.map((headCell) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={headCell.id === searchColumn}
                      onChange={() => setSearchColumn(headCell.id)}
                    />
                  }
                  key={headCell.id}
                  label={headCell.label}
                />
              ))}
            </FormGroup>
          )}
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <TraitsTable
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          headerRow={headerRow.slice(0, 5)}
          traitsData={traits.data}
          tableData={tableData ?? []}
        />
      </TabPanel>
    </Box>
  );
}
