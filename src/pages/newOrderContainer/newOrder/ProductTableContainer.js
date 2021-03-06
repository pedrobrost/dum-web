import { connect } from "react-redux";

import { removeProduct } from "../../../store/ducks/newOrder";
import ProductTable from "./productTableContainer/ProductTable";

const mapStateToProps = (state) => ({
  products: state.newOrder.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (index) => dispatch(removeProduct(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
