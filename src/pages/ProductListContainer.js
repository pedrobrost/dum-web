import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createLoadingSelector,
  createErrorMessageSelector,
} from "../utils/selectors";
import ApiError from "../components/UI/ApiError";
import { getProducts } from "../store/ducks/products";

import ProductList from "./productListContainer/ProductList";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { error } = this.props;
    return !error ? (
      <ProductList {...this.props} />
    ) : (
      <ApiError error={error} />
    );
  }
}

const actionNames = ["PRODUCTS"];
const loadingSelector = createLoadingSelector(actionNames);
const errorSelector = createErrorMessageSelector(actionNames);

const mapStateToProps = (state) => ({
  isFetching: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
