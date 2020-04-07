import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const title = () => {
  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Clientes
      </Typography>
      <Typography component="p">Listado de clientes</Typography>
    </Fragment>
  );
};

export default title;
