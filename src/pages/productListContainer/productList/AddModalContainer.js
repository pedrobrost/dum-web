import { connect } from "react-redux";

import {
  closeModal,
  changeName,
  changePrice,
  confirm,
} from "../../../store/ducks/addModal";
import AddModal from "./addModalContainer/AddModal";

const mapStateToProps = (state) => ({
  open: state.addModal.modalOpen,
  name: state.addModal.name,
  price: state.addModal.price,
  sending: state.addModal.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
  changeName: (name) => dispatch(changeName(name)),
  changePrice: (price) => dispatch(changePrice(price)),
  confirm: () => dispatch(confirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
