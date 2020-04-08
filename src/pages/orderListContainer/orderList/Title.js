import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const title = () => {
  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Pedidos
      </Typography>
      <Typography component="p">Listado de pedidos</Typography>
    </Fragment>
  );
};

export default title;
