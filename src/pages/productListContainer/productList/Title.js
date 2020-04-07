import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const title = () => {
  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Productos
      </Typography>
      <Typography component="p">Listado de productos</Typography>
    </Fragment>
  );
};

export default title;
