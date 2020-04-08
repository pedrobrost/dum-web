import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createLoadingSelector,
  createErrorMessageSelector,
} from "../utils/selectors";
import ApiError from "../components/UI/ApiError";
import { getProducts } from "../store/ducks/products";
import { getCustomers } from "../store/ducks/customers";

import NewOrder from "./newOrderContainer/NewOrder";

class NewOrderContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCustomers();
  }

  render() {
    const { error } = this.props;
    return !error ? <NewOrder {...this.props} /> : <ApiError error={error} />;
  }
}

const actionNames = ["PRODUCTS", "CUSTOMERS"];
const loadingSelector = createLoadingSelector(actionNames);
const errorSelector = createErrorMessageSelector(actionNames);

const mapStateToProps = (state) => ({
  total: state.newOrder.products.reduce(
    (ac, cv) => ac + cv.product.price * cv.amount,
    0
  ),
  isFetching: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getCustomers: () => dispatch(getCustomers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderContainer);
