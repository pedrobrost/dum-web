import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const drawerButton = props => (
  <ListItem
    button
    component={Link}
    to={props.path}
    onClick={props.onClose || null}
  >
    <ListItemIcon>{props.icon}</ListItemIcon>
    <ListItemText primary={props.name} />
  </ListItem>
);

export default drawerButton;
