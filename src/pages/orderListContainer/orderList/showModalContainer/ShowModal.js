import React from "react";
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
import format from "date-fns/format";

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
      {props.order && (
        <>
          <DialogTitle id="form-dialog-title">
            Pedido de {props.order.customer.name}
          </DialogTitle>
          <DialogContent>
            <>
              <DialogContentText>
                {props.order.address} - {props.order.customer.phone} -{" "}
                {format(new Date(props.order.createdAt), "dd/MM/yyyy")}
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
                  {props.order.products.map((p) => (
                    <TableRow>
                      <TableCell>{p.product.name}</TableCell>
                      <TableCell align="right">{p.amount}</TableCell>
                      <TableCell align="right">{p.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p>
                Total:{" "}
                {props.order.products.reduce(
                  (ac, cv) => ac + cv.price * cv.amount,
                  0
                )}
              </p>
            </>
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

export default showModal;