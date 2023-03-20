import { useContext } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import { ThemeContext } from "../providers/theme-provider";

const allValues = [
  { id: "traitId", label: "Trait Id" },
  { id: "traitName", label: "Trait Name" },
  { id: "description", label: "Description" },
  { id: "personalData", label: "Personal Data" },
  { id: "dataType", label: "Data Type" },
  { id: "dataClass", label: "Data Class" },
  { id: "traitType", label: "Trait Type" },
  { id: "survivorShipLevel", label: "Survivor Ship Level" },
  {
    id: "multiAnswerResponseIndicator",
    label: "Multi Answer Response Indicator",
  },
  { id: "survivorShipRule", label: "Survivor Ship Rule" },
];
export default function TraitDetailTable({ traitDetail }) {
  const { theme } = useContext(ThemeContext);
  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          {allValues.map((value) => {
            return (
              <TableRow>
                <TableCell variant="head">
                  <p className={`table_header ${theme}`}>{value.label}</p>
                </TableCell>
                <TableCell>
                  <p className={`table_header ${theme}`}>
                    {traitDetail.data[value.id]}
                  </p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
