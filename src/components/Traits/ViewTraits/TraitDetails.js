import React from "react";

import { Table, TableRow, TableCell } from "@material-ui/core";

import { viewColumnsfeilds } from "../ColumnConfig";

export default function TraitDetails({ data }) {
  return (
    <div className="traitDetails">
      <Table>
        {viewColumnsfeilds.map((feild) => {
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
