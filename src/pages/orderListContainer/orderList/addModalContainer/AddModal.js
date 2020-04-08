import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";

const addModal = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      disableRestoreFocus
      disableBackdropClick={props.sending}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Agregar Producto</DialogTitle>
      <DialogContent>
        <>
          <DialogContentText>Ingrese los datos del producto</DialogContentText>
          <TextField
            value={props.name}
            onChange={(e) => props.changeName(e.target.value)}
            margin="dense"
            label="Nombre"
            fullWidth
          />
          <TextField
            value={props.price}
            onChange={(e) => props.changePrice(e.target.value)}
            margin="dense"
            label="Precio"
            type="number"
            fullWidth
          />
        </>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={props.sending}
          onClick={props.onClose}
          color="primary"
        >
          Cancelar
        </Button>
        <Button
          disabled={props.sending}
          onClick={props.confirm}
          color="primary"
        >
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default addModal;
