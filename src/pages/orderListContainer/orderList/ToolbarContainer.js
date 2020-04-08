import { connect } from "react-redux";

import { changeSearch } from "../../../store/ducks/orderFilters";

import Toolbar from "./toolbarContainer/Toolbar";

const mapStateToProps = (state) => ({
  search: state.orderFilters.search,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (search) => dispatch(changeSearch(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
