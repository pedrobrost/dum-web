import { connect } from "react-redux";

import ProductTable from "./productTableContainer/ProductTable";

const mapStateToProps = (state) => ({
  products: state.newOrder.products,
});

export default connect(mapStateToProps)(ProductTable);
