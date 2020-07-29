import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createLoadingSelector,
  createErrorMessageSelector,
} from "../utils/selectors";
import ApiError from "../components/UI/ApiError";
import { getProducts } from "../store/ducks/products";
import { getCustomers } from "../store/ducks/customers";
import { getOrder } from "../store/ducks/editOrder";

import EditOrder from "./editOrderContainer/EditOrder";

class EditOrderContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCustomers();
    this.props.getOrder(this.props.match.params.id);
  }

  render() {
    const { error } = this.props;
    return !error ? <EditOrder {...this.props} /> : <ApiError error={error} />;
  }
}

const actionNames = ["PRODUCTS", "CUSTOMERS", "EDIT_ORDER"];
const loadingSelector = createLoadingSelector(actionNames);
const errorSelector = createErrorMessageSelector(actionNames);

const mapStateToProps = (state) => ({
  total: state.editOrder.products.reduce(
    (ac, cv) => ac + cv.product.price * cv.amount,
    0
  ),
  isFetching: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getCustomers: () => dispatch(getCustomers()),
  getOrder: (id) => dispatch(getOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditOrderContainer);
