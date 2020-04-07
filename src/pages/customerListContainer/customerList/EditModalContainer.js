import { connect } from "react-redux";

import {
  closeModal,
  changeName,
  changeAddress,
  changePhone,
  confirm,
} from "../../../store/ducks/editCustomerModal";
import EditModal from "./editModalContainer/EditModal";

const mapStateToProps = (state) => ({
  open: state.editCustomerModal.modalOpen,
  name: state.editCustomerModal.name,
  address: state.editCustomerModal.address,
  phone: state.editCustomerModal.phone,
  sending: state.editCustomerModal.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
  changeName: (name) => dispatch(changeName(name)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  changePhone: (phone) => dispatch(changePhone(phone)),
  confirm: () => dispatch(confirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
