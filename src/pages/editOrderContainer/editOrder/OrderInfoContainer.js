import { connect } from "react-redux";

import OrderInfo from "./orderInfoContainer/OrderInfo";
import {
  changeCustomer,
  changeAddress,
  changeDescription,
} from "../../../store/ducks/editOrder";

const mapStateToProps = (state) => ({
  customers: state.customers,
  customer: state.editOrder.customer,
  address: state.editOrder.address,
  description: state.editOrder.description,
});

const mapDispatchToProps = (dispatch) => ({
  changeCustomer: (customer) => dispatch(changeCustomer(customer)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  changeDescription: (description) => dispatch(changeDescription(description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);
