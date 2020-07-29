import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const title = () => {
  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Editar pedido
      </Typography>
      <Typography component="p">
        Ingrese los datos del pedido a modificar
      </Typography>
    </Fragment>
  );
};

export default title;
