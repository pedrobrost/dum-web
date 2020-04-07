import { connect } from "react-redux";

import { openModal } from "../../../store/ducks/editModal";
import { getProducts } from "../../../store/ducks/productFilters";
import ProductTable from "./productTableContainer/ProductTable";

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  openEditModal: (product) => dispatch(openModal(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
