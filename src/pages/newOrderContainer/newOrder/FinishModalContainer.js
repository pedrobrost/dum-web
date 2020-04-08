import { connect } from "react-redux";

import { closeFinishModal } from "../../../store/ducks/newOrder";
import FinishModal from "./finishModalContainer/FinishModal";

const mapStateToProps = (state) => ({
  open: state.newOrder.finishModal,
  sending: state.newOrder.sending,
  customer: state.newOrder.customer,
  address: state.newOrder.address,
  products: state.newOrder.products,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeFinishModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishModal);
