import { useContext } from "react";

import { Box, Button, Modal } from "@material-ui/core";

import { Close } from "@material-ui/icons";

import TraitDetailTab from "./trait-detail-tab";
import { ThemeContext } from "../providers/theme-provider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TraitModal({ traitId, isOpen, handleClose }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style} className={theme}>
        <div className="header">
          <Box>
            <h2>Trait ID - {traitId}</h2>
            <p className="small_paragraph">
              The trait has the following details and mappings
            </p>
          </Box>
          <Button variant="text" onClick={handleClose}>
            <Close className={theme} />
          </Button>
        </div>

        <TraitDetailTab traitId={traitId} />
      </Box>
    </Modal>
  );
}
