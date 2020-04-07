import { connect } from "react-redux";

import { openModal } from "../../../store/ducks/addCustomerModal";
import { changeSearch } from "../../../store/ducks/customerFilters";

import Toolbar from "./toolbarContainer/Toolbar";

const mapStateToProps = (state) => ({
  search: state.customerFilters.search,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (search) => dispatch(changeSearch(search)),
  openAddModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
