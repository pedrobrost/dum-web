import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-20px 0px 0px -20px'
  }
});

const preloader = ({ classes }) => (
  <Grid container spacing={10}>
    <CircularProgress className={classes.progress} size={50} />
  </Grid>
);

export default withStyles(styles)(preloader);
