import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShowIcon from "@material-ui/icons/List";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import format from "date-fns/format";

const styles = (theme) => ({
  button: {
    margin: theme.spacing(0.2),
  },
  iconContainer: { display: "flex", justifyContent: "flex-end" },
  icon: { marginRight: 10 },
  spinner: {
    display: "flex",
    justifyContent: "center",
    width: 48,
    height: 48,
    alignItems: "center",
  },
});

const body = (props) => {
  const { orders, page, rowsPerPage } = props;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, orders.length - page * rowsPerPage);
  return (
    <TableBody>
      {orders
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((a) => {
          return (
            <TableRow key={a._id}>
              <TableCell>{a.customer.name}</TableCell>
              <TableCell>{a.address}</TableCell>
              <TableCell>{a.customer.phone}</TableCell>
              <TableCell>
                {format(new Date(a.createdAt), "dd/MM/yyyy")}
              </TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  className={props.classes.button}
                  onClick={() => props.openEditModal(a)}
                >
                  <ShowIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default withStyles(styles)(body);
