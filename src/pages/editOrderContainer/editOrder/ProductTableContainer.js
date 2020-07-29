import { connect } from "react-redux";

import { removeProduct } from "../../../store/ducks/editOrder";
import ProductTable from "./productTableContainer/ProductTable";

const mapStateToProps = (state) => ({
  products: state.editOrder.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (index) => dispatch(removeProduct(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
