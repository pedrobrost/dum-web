import { connect } from "react-redux";

import { closeModal } from "../../../store/ducks/showOrderModal";
import ShowModal from "./showModalContainer/ShowModal";

const mapStateToProps = (state) => ({
  open: state.showOrderModal.modalOpen,
  order: state.showOrderModal.order,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);
