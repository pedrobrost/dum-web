import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Preloader from "../../components/UI/Preloader";
import Title from "./orderList/Title";
import OrderTableContainer from "./orderList/OrderTableContainer";
import ToolbarContainer from "./orderList/ToolbarContainer";
import AddModalContainer from "./orderList/AddModalContainer";
import ShowModalContainer from "./orderList/ShowModalContainer";

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

const orderList = (props) => {
  const { classes } = props;
  return props.isFetching ? (
    <Preloader />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paper elevation={1}>
            <Grid container className={classes.title}>
              <Grid item xs>
                <Title />
              </Grid>
            </Grid>
            <ToolbarContainer />
            <div className={classes.tableContainer}>
              <OrderTableContainer />
            </div>
          </Paper>
          <AddModalContainer />
          <ShowModalContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(orderList);
