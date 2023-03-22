import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function EcoSystems({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="ecosystems">
      {data.map((item) => {
        return (
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="accordian"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <Button
                  style={{ background: "blue", color: "#fff" }}
                  size="small"
                  variant="contained"
                  primary
                >
                  {item.ecosystemName}
                </Button>
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                }}
                style={{ marginLeft: "50px", marginTop: "4px" }}
              >
                {item.ecosystemTraitName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
