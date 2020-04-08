import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";

const editModal = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      disableRestoreFocus
      disableBackdropClick={props.sending}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Editar Cliente</DialogTitle>
      <DialogContent>
        <>
          <DialogContentText>Edite los datos del cliente</DialogContentText>
          <TextField
            value={props.name}
            onChange={(e) => props.changeName(e.target.value)}
            margin="dense"
            label="Nombre"
            fullWidth
          />
          <TextField
            style={{ marginTop: 15 }}
            value={props.address}
            onChange={(e) => props.changeAddress(e.target.value)}
            margin="dense"
            label="Dirección"
            fullWidth
          />
          <TextField
            style={{ marginTop: 15 }}
            value={props.phone}
            onChange={(e) => props.changePhone(e.target.value)}
            margin="dense"
            label="Teléfono"
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
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default editModal;
