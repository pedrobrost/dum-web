import { connect } from "react-redux";

import { openAddProductModal } from "../../../store/ducks/editOrder";

import Toolbar from "./toolbarContainer/Toolbar";

const mapDispatchToProps = (dispatch) => ({
  openAddModal: () => dispatch(openAddProductModal()),
});

export default connect(null, mapDispatchToProps)(Toolbar);
