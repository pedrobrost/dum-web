import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  progress: {
    margin: 'auto',
    marginTop: '150px'
  }
});

const preloader = ({ classes }) => (
  <Grid container spacing={10}>
    <CircularProgress className={classes.progress} size={50} />
  </Grid>
);

export default withStyles(styles)(preloader);
