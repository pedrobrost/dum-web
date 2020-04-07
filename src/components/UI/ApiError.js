import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  icon: {
    fontSize: 350
  },
  container: { marginTop: theme.spacing(4) }
});

const apiError = ({ error, classes }) => {
  return (
    <Fragment>
      <Grid container justify="center" className={classes.container}>
        <ErrorIcon
          fontSize="inherit"
          color="disabled"
          className={classes.icon}
        />
      </Grid>
      <Grid container justify="center" className={classes.container}>
        <Typography variant="h5">{error}</Typography>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(apiError);
