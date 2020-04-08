import { connect } from "react-redux";

import {
  closeModal,
  changeName,
  changePrice,
  confirm,
} from "../../../store/ducks/addProductModal";
import AddModal from "./addModalContainer/AddModal";

const mapStateToProps = (state) => ({
  open: state.addProductModal.modalOpen,
  name: state.addProductModal.name,
  price: state.addProductModal.price,
  sending: state.addProductModal.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
  changeName: (name) => dispatch(changeName(name)),
  changePrice: (price) => dispatch(changePrice(price)),
  confirm: () => dispatch(confirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
