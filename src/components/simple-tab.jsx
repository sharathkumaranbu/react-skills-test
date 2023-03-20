import { useState } from "react";

import { Box, Button, Tab, Tabs } from "@material-ui/core";

import TabPanel from "./tab-panel";
import TraitsTable from "./traits-table";

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="container">
      <Box className="tab_group">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="TRAITS" />
        </Tabs>
        <Box className="tab_utils">
          <Button variant="contained" color="primary">
            {selectedItems.length > 0 ? "REUSE" : "CREATE TRAIT"}
          </Button>
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <TraitsTable
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </TabPanel>
    </Box>
  );
}
