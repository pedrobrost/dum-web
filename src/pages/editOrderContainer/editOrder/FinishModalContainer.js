import { connect } from "react-redux";

import { closeFinishModal } from "../../../store/ducks/editOrder";
import FinishModal from "./finishModalContainer/FinishModal";

const mapStateToProps = (state) => ({
  open: state.editOrder.finishModal,
  sending: state.editOrder.sending,
  customer: state.editOrder.customer,
  address: state.editOrder.address,
  products: state.editOrder.products,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeFinishModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishModal);
