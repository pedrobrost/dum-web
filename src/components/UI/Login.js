import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { login, changePassword } from "../../store/ducks/auth";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const signIn = ({ classes, password, error, login, changePassword }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          DUM - Gastronomía
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            value={password}
            onChange={(e) => changePassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            autoFocus
            error={error}
            helperText={error ? "Contraseña incorrecta" : null}
          />
          <Button
            onClick={login}
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  password: state.auth.password,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  changePassword: (password) => dispatch(changePassword(password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(signIn));
