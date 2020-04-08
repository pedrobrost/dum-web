import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Preloader from "../../components/UI/Preloader";
import Title from "./newOrder/Title";
import ProductTableContainer from "./newOrder/ProductTableContainer";
import ToolbarContainer from "./newOrder/ToolbarContainer";
import AddModalContainer from "./newOrder/AddModalContainer";
import OrderInfoContainer from "./newOrder/OrderInfoContainer";
import ConfirmButtonContainer from "./newOrder/ConfirmButtonContainer";
import FinishModalContainer from "./newOrder/FinishModalContainer";

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

const newOrder = (props) => {
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
                <Typography variant="h5">Total: {props.total}</Typography>
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

export default withStyles(styles)(newOrder);
