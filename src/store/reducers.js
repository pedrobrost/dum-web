import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./ducks/auth";
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
import orders from "./ducks/orders";
import orderFilters from "./ducks/orderFilters";
import showOrderModal from "./ducks/showOrderModal";
import newOrder from "./ducks/newOrder";
import editOrder from "./ducks/editOrder";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
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
    orders,
    orderFilters,
    showOrderModal,
    newOrder,
    editOrder,
  });
export default createRootReducer;
