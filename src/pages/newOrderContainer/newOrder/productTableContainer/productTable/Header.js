import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const header = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell align="right">Cantidad</TableCell>
        <TableCell align="right">Precio</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default header;
