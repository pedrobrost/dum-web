import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loading from "./ducks/loading";
import error from "./ducks/error";
import notifications from "./ducks/notifications";
import products from "./ducks/products";
import productFilters from "./ducks/productFilters";
import addProductModal from "./ducks/addProductModal";
import editProductModal from "./ducks/editProductModal";
import customers from "./ducks/customers";
import customerFilters from "./ducks/customerFilters";
import addCustomerModal from "./ducks/addCustomerModal";
import editCustomerModal from "./ducks/editCustomerModal";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    loading,
    error,
    notifications,
    products,
    productFilters,
    addProductModal,
    editProductModal,
    customers,
    customerFilters,
    addCustomerModal,
    editCustomerModal,
  });
export default createRootReducer;
