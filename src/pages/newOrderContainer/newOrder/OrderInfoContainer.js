import { connect } from "react-redux";

import OrderInfo from "./orderInfoContainer/OrderInfo";
import {
  changeCustomer,
  changeAddress,
  changeDescription,
} from "../../../store/ducks/newOrder";

const mapStateToProps = (state) => ({
  customers: state.customers,
  customer: state.newOrder.customer,
  address: state.newOrder.address,
  description: state.newOrder.description,
});

const mapDispatchToProps = (dispatch) => ({
  changeCustomer: (customer) => dispatch(changeCustomer(customer)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  changeDescription: (description) => dispatch(changeDescription(description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);
