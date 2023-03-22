import React from "react";

import { Table, TableRow, TableCell } from "@material-ui/core";

import { viewColumnsfeilds } from "../ColumnConfig";

export default function TraitDetails({ data, selectedTrait }) {
  return (
    <div className="traitDetails">
      <Table>
        <TableRow>
          <TableCell variant="head">Trait ID</TableCell>
          <TableCell>{selectedTrait}</TableCell>
        </TableRow>
        {viewColumnsfeilds.slice(1).map((feild) => {
          return (
            <TableRow>
              <TableCell variant="head">{feild.name}</TableCell>
              <TableCell>{data[feild.id]}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
}
