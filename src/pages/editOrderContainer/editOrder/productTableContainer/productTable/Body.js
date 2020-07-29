import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import WarningIcon from "@material-ui/icons/Warning";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

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
  warning: {
    display: "inline-flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.54)",
  },
});

const body = (props) => {
  const { products, page, rowsPerPage } = props;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products.length - page * rowsPerPage);
  return (
    <TableBody>
      {products
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((a, index) => {
          return (
            <TableRow key={`${a.product._id}-${a.amount}`}>
              <TableCell>{a.product.name}</TableCell>
              <TableCell align="right">{a.amount}</TableCell>
              <TableCell align="right">{a.product.price}</TableCell>
              <TableCell padding="none">
                <div className={props.classes.iconContainer}>
                  {a.product.price !== a.product.newPrice && (
                    <Tooltip
                      title={`Precio desactualizado ($${a.product.newPrice})`}
                    >
                      <div className={props.classes.warning}>
                        <WarningIcon />
                      </div>
                    </Tooltip>
                  )}
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => props.removeProduct(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
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
