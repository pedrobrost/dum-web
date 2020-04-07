import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Drawer from './Drawer/Drawer';
import Navbar from './Navbar/Navbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    minWidth: 0
  },
  toolbar: theme.mixins.toolbar
});

class Layout extends Component {
  state = {
    mobileDrawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileDrawerOpen: !this.state.mobileDrawerOpen });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <Navbar onDrawerToggle={this.handleDrawerToggle} />
        <Drawer
          onToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileDrawerOpen}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
