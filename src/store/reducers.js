import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loading from "./ducks/loading";
import error from "./ducks/error";
import notifications from "./ducks/notifications";
import products from "./ducks/products";
import productFilters from "./ducks/productFilters";
import addModal from "./ducks/addModal";
import editModal from "./ducks/editModal";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    loading,
    error,
    notifications,
    products,
    productFilters,
    addModal,
    editModal,
  });
export default createRootReducer;
