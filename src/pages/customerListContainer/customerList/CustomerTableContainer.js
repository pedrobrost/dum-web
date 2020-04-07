import { connect } from "react-redux";

import { openModal } from "../../../store/ducks/editCustomerModal";
import { getCustomers } from "../../../store/ducks/customerFilters";
import CustomerTable from "./customerTableContainer/CustomerTable";

const mapStateToProps = (state) => ({
  customers: getCustomers(state),
});

const mapDispatchToProps = (dispatch) => ({
  openEditModal: (customer) => dispatch(openModal(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable);
