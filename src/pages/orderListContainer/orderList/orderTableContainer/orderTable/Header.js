import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const header = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Cliente</TableCell>
        <TableCell>Dirección</TableCell>
        <TableCell>Teléfono</TableCell>
        <TableCell>Fecha</TableCell>
        <TableCell align="right">Precio</TableCell>
        <TableCell padding="none" align="right" />
      </TableRow>
    </TableHead>
  );
};

export default header;
