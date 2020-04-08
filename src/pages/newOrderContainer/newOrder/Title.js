import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const title = () => {
  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Nuevo pedido
      </Typography>
      <Typography component="p">Ingrese los datos del nuevo pedido</Typography>
    </Fragment>
  );
};

export default title;
