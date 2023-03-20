import { useState } from "react";

import { Box, Tab } from "@material-ui/core";

import MarKetingProgram from "./marketing-programs";
import TabGroup from "./tab-group";
import TabPanel from "./tab-panel";
import TraitDetailTable from "./trait-detail-table";
import traitDetail from "../constants/get-single-trait.json";

export default function TraitDetailTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="container">
      <TabGroup value={value} handleChange={handleChange}>
        <Tab label="TRAIT DETAILS" />;
        <Tab label="MARKETING PROGRAMS" />;
        <Tab label="ECOSYSTEMS" />;
      </TabGroup>
      <TabPanel value={value} index={0}>
        <TraitDetailTable traitDetail={traitDetail} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MarKetingProgram traitDetail={traitDetail} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div />
      </TabPanel>
    </Box>
  );
}
