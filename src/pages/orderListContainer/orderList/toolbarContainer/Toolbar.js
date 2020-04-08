import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Toolbar from "@material-ui/core/Toolbar";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  title: {
    flex: "0 0 auto",
  },
  toolbar: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(6.5),
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
  },
  actions: {
    color: theme.palette.text.secondary,
    marginLeft: "auto",
    marginRight: theme.spacing(3),
  },
  searchIcon: {
    color: "rgba(0,0,0,0.54)",
    marginRight: 7,
  },
});

const toolbar = (props) => {
  const { classes } = props;
  return (
    <Toolbar
      className={classNames(classes.toolbar, {
        [classes.highlight]: false,
      })}
    >
      <SearchIcon className={classes.searchIcon} />
      <Input
        value={props.search}
        onChange={(e) => props.changeSearch(e.target.value)}
        disableUnderline
        fullWidth
        placeholder="Buscar"
      />
      <Tooltip title="Agregar pedido">
        <IconButton
          component={Link}
          to="/pedidos/nuevo"
          onClick={props.openAddModal}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default withStyles(styles)(toolbar);
