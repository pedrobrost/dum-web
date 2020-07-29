import React from "react";
import Fab from "@material-ui/core/Fab";
import ConfirmIcon from "@material-ui/icons/Save";
import { Tooltip } from "@material-ui/core";

const confirmButton = (props) => {
  return (
    <Tooltip title="Guardar pedido">
      <Fab
        onClick={props.confirm}
        color="primary"
        aria-label="add"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <ConfirmIcon />
      </Fab>
    </Tooltip>
  );
};

export default confirmButton;
