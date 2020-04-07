import { connect } from "react-redux";

import {
  closeModal,
  changeName,
  changePrice,
  confirm,
} from "../../../store/ducks/editModal";
import EditModal from "./editModalContainer/EditModal";

const mapStateToProps = (state) => ({
  open: state.editModal.modalOpen,
  name: state.editModal.name,
  price: state.editModal.price,
  sending: state.editModal.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
  changeName: (name) => dispatch(changeName(name)),
  changePrice: (price) => dispatch(changePrice(price)),
  confirm: () => dispatch(confirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
