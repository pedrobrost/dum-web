import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Preloader from "../../components/UI/Preloader";
import Title from "./productList/Title";
import ProductTableContainer from "./productList/ProductTableContainer";
import ToolbarContainer from "./productList/ToolbarContainer";
import AddModalContainer from "./productList/AddModalContainer";
import EditModalContainer from "./productList/EditModalContainer";

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

const productList = (props) => {
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
              <ProductTableContainer />
            </div>
          </Paper>
          <AddModalContainer />
          <EditModalContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(productList);
