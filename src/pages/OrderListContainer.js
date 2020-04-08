import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createLoadingSelector,
  createErrorMessageSelector,
} from "../utils/selectors";
import ApiError from "../components/UI/ApiError";
import { getOrders } from "../store/ducks/orders";

import OrderList from "./orderListContainer/OrderList";

class OrderListContainer extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { error } = this.props;
    return !error ? <OrderList {...this.props} /> : <ApiError error={error} />;
  }
}

const actionNames = ["ORDERS"];
const loadingSelector = createLoadingSelector(actionNames);
const errorSelector = createErrorMessageSelector(actionNames);

const mapStateToProps = (state) => ({
  isFetching: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(getOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);
