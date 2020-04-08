import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import { checkLogin } from "./store/ducks/auth";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import App from "./App";

const { store, history } = configureStore();
const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

checkLogin(store.dispatch);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
