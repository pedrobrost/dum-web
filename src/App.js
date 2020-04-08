import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import color from "@material-ui/core/colors/blue";
import { Route, Switch, withRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import Layout from "./components/UI/Layout/Layout";
import Notifier from "./components/UI/Notifier";

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
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
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
        </SnackbarProvider>
      </MuiThemeProvider>
    </div>
  );
};

export default withRouter(app);
