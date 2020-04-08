import { connect } from "react-redux";

import {
  closeModal,
  changeName,
  changePrice,
  confirm,
} from "../../../store/ducks/editProductModal";
import EditModal from "./editModalContainer/EditModal";

const mapStateToProps = (state) => ({
  open: state.editProductModal.modalOpen,
  name: state.editProductModal.name,
  price: state.editProductModal.price,
  sending: state.editProductModal.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
  changeName: (name) => dispatch(changeName(name)),
  changePrice: (price) => dispatch(changePrice(price)),
  confirm: () => dispatch(confirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
