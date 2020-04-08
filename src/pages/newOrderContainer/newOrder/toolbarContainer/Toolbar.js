import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

const toolbar = (props) => {
  return (
    <Toolbar>
      <Typography variant="h5" style={{ marginRight: "auto" }}>
        Productos
      </Typography>
      <Tooltip title="Agregar producto">
        <IconButton onClick={props.openAddModal}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default toolbar;
