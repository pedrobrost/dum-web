import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createLoadingSelector,
  createErrorMessageSelector,
} from "../utils/selectors";
import ApiError from "../components/UI/ApiError";
import { getCustomers } from "../store/ducks/customers";

import CustomerList from "./customerListContainer/CustomerList";

class CustomerListContainer extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  render() {
    const { error } = this.props;
    return !error ? (
      <CustomerList {...this.props} />
    ) : (
      <ApiError error={error} />
    );
  }
}

const actionNames = ["CUSTOMERS"];
const loadingSelector = createLoadingSelector(actionNames);
const errorSelector = createErrorMessageSelector(actionNames);

const mapStateToProps = (state) => ({
  isFetching: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCustomers: () => dispatch(getCustomers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerListContainer);
