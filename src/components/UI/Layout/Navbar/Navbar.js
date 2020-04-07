import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import UserControll from "./UserControll";

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  flex: {
    flex: 1,
  },
  navIconHide: {
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

const navbar = (props) => {
  const { classes } = props;
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.onDrawerToggle}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          data-testid="title"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.flex}
        >
          DUM - Gastronomía
        </Typography>
        <UserControll />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(navbar);
