import { connect } from "react-redux";

import { openModal } from "../../../store/ducks/showOrderModal";
import { getOrders } from "../../../store/ducks/orderFilters";
import OrderTable from "./orderTableContainer/OrderTable";

const mapStateToProps = (state) => ({
  orders: getOrders(state),
});

const mapDispatchToProps = (dispatch) => ({
  openEditModal: (order) => dispatch(openModal(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
