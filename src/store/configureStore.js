import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

const publicUrl = document.createElement("a");
publicUrl.href = process.env.PUBLIC_URL;
const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL ? publicUrl.pathname : null
});

export default function configureStore(preloadedState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );
  return { store, history };
}
