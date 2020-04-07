import { connect } from "react-redux";

import { openModal } from "../../../store/ducks/addModal";
import { changeSearch } from "../../../store/ducks/productFilters";

import Toolbar from "./toolbarContainer/Toolbar";

const mapStateToProps = (state) => ({
  search: state.productFilters.search,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (search) => dispatch(changeSearch(search)),
  openAddModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
