import React, { useState } from "react";

import { Box, Tab, Container } from "@material-ui/core";
// import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

import TraitsTable from "./TableView/TraitsTable";

function TraitsTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Box className="flex_justify_content">
            <TabList onChange={handleChange}>
              <Tab label="Traits" value="1" />
              <Tab label="Traits Use Case" value="2" />
              <Tab label="Traits Responses" value="3" />
            </TabList>
          </Box>
        </Box>
        <TabPanel value="1" className="nopadding">
          <TraitsTable />
        </TabPanel>
        <TabPanel value="2" className="nopadding">
          <Container>
            <h4>Content goes here</h4>
          </Container>
        </TabPanel>
        <TabPanel value="3" className="nopadding">
          <Container>
            <h4>Content goes here</h4>
          </Container>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TraitsTabs;
