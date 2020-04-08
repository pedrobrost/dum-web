import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DialogContentText from "@material-ui/core/DialogContentText";

const addModal = (props) => {
  return (
    <Dialog
      fullWidth
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
          <Autocomplete
            options={props.products}
            getOptionLabel={(option) => option.name}
            value={props.product}
            onChange={(e, newValue) => props.changeProduct(newValue)}
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label="Producto" margin="dense" />
            )}
          />
          <TextField
            style={{ marginTop: 15 }}
            value={props.amount}
            onChange={(e) => props.changeAmount(e.target.value)}
            margin="dense"
            label="Cantidad"
            type="number"
            fullWidth
          />
          {props.product && <p>Precio: {props.product.price}</p>}
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
