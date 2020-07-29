import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Preloader from "../../components/UI/Preloader";
import Title from "./editOrder/Title";
import ProductTableContainer from "./editOrder/ProductTableContainer";
import ToolbarContainer from "./editOrder/ToolbarContainer";
import AddModalContainer from "./editOrder/AddModalContainer";
import OrderInfoContainer from "./editOrder/OrderInfoContainer";
import ConfirmButtonContainer from "./editOrder/ConfirmButtonContainer";
import FinishModalContainer from "./editOrder/FinishModalContainer";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  tableContainer: {
    ...theme.mixins.gutters(),
  },
});

const editOrder = (props) => {
  const { classes } = props;
  return props.isFetching ? (
    <Preloader />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.title}>
                <Title />
                <OrderInfoContainer />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.title}>
                <Typography variant="h5">Total: ${props.total}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={8}>
          <Paper elevation={1}>
            <ToolbarContainer />
            <div className={classes.tableContainer}>
              <ProductTableContainer />
            </div>
          </Paper>
          <AddModalContainer />
          <ConfirmButtonContainer />
          <FinishModalContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(editOrder);
