import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import { success as login } from "./store/ducks/auth";
import axios from "./axios";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import App from "./App";

const startApp = async (store) => {
  const jwt = localStorage.getItem("dum-token");
  if (jwt) {
    const decoded = jwt_decode(jwt);
    const current_time = Date.now() / 1000;
    if (decoded.exp < current_time) {
      localStorage.removeItem("dum-token");
    } else {
      const interceptor = async (config) => {
        config.headers.Authorization = `Bearer ${jwt}`;
        return Promise.resolve(config);
      };
      axios.interceptors.request.use(interceptor);
      store.dispatch(login());
    }
  }
};

const { store, history } = configureStore();
const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

startApp(store);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
