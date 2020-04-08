import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import color from "@material-ui/core/colors/blue";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import Layout from "./components/UI/Layout/Layout";
import Notifier from "./components/UI/Notifier";
import AppLoading from "./components/UI/AppLoading";
import Login from "./components/UI/Login";

import Products from "./pages/ProductListContainer";
import Customers from "./pages/CustomerListContainer";
import Orders from "./pages/OrderListContainer";
import NewOrder from "./pages/NewOrderContainer";

const theme = createMuiTheme({
  palette: {
    primary: color,
    background: {
      default: "#F5F5F5",
    },
  },
});

const app = (props) => {
  let content = null;
  if (!props.loggedIn) {
    content = <Login />;
  } else {
    content = (
      <React.Fragment>
        <Notifier />
        <Layout>
          <Switch>
            <Route path="/pedidos" exact component={Orders} />
            <Route path="/pedidos/nuevo" exact component={NewOrder} />
            <Route path="/clientes" exact component={Customers} />
            <Route component={Products} />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          {!props.loading ? content : <AppLoading />}
        </SnackbarProvider>
      </MuiThemeProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
});

export default withRouter(connect(mapStateToProps)(app));
