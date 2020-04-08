import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import format from "date-fns/format";

const styles = (theme) => ({
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
});

const showModal = (props) => {
  return (
    <Dialog
      fullWidth
      open={props.open}
      onClose={props.onClose}
      disableRestoreFocus
      disableBackdropClick={props.sending}
      aria-labelledby="form-dialog-title"
    >
      {props.sending || !props.customer ? (
        <div className={props.classes.spinnerContainer}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <DialogTitle id="form-dialog-title">
            Pedido de {props.customer.name} confirmado
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.address} - {props.customer.phone} -{" "}
              {format(new Date(), "dd/MM/yyyy")}
            </DialogContentText>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.products.map((p) => (
                  <TableRow key={`${p.product._id}-${p.amount}`}>
                    <TableCell>{p.product.name}</TableCell>
                    <TableCell align="right">{p.amount}</TableCell>
                    <TableCell align="right">{p.product.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography variant="h6" style={{ marginTop: 30, fontWeight: 400 }}>
              Total: $
              {props.products.reduce(
                (ac, cv) => ac + cv.product.price * cv.amount,
                0
              )}
            </Typography>
          </DialogContent>
        </>
      )}
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Imprimir
        </Button>
        <Button onClick={props.onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(showModal);
