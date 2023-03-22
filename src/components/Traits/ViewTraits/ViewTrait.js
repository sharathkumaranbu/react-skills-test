import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Tab,
  Box,
} from "@material-ui/core";

import { TabContext, TabList, TabPanel } from "@material-ui/lab";

import EcoSystems from "./EcoSystems";
import MarketingPrograms from "./MarketingPrograms";
import TraitDetails from "./TraitDetails";
import { fetchIndividualTraits } from "../Sample Response/TraitResponse";

export default function ViewTrait({ open, setOpen, selectedTrait }) {
  const [value, setValue] = useState("1");
  const [traitData, setTraitData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // fetch api with selectedTrait and set the response
    const response = fetchIndividualTraits(selectedTrait);
    setTraitData(response);
  }, []);

  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle>Trait ID - {selectedTrait}</DialogTitle>
      <DialogContentText style={{ padding: "16px 24px" }}>
        This trait has the following details and mappings
      </DialogContentText>
      {traitData ? (
        <DialogContent
          style={{ border: "1px solid #baba", margin: "0px 24px" }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Box className="flex_justify_content">
                <TabList onChange={handleChange}>
                  <Tab label="Trait Details" value="1" />
                  <Tab label="Marketing Programs" value="2" />
                  <Tab label="EcoSystems" value="3" />
                </TabList>
              </Box>
            </Box>
            <TabPanel value="1" className="nopadding">
              <TraitDetails
                data={traitData.data}
                selectedTrait={selectedTrait}
              />
            </TabPanel>
            <TabPanel value="2" className="nopadding">
              <MarketingPrograms
                marketingPrograms={traitData.data.marketingPrograms}
              />
            </TabPanel>
            <TabPanel value="3" sclassName="nopadding">
              <EcoSystems data={traitData.data.ecosystems} />
            </TabPanel>
          </TabContext>
        </DialogContent>
      ) : null}
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
