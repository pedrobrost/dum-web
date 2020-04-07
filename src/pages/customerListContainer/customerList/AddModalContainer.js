import { connect } from "react-redux";

import {
  closeModal,
  changeName,
  changeAddress,
  changePhone,
  confirm,
} from "../../../store/ducks/addCustomerModal";
import AddModal from "./addModalContainer/AddModal";

const mapStateToProps = (state) => ({
  open: state.addCustomerModal.modalOpen,
  name: state.addCustomerModal.name,
  address: state.addCustomerModal.address,
  phone: state.addCustomerModal.phone,
  sending: state.addCustomerModal.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeModal()),
  changeName: (name) => dispatch(changeName(name)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  changePhone: (phone) => dispatch(changePhone(phone)),
  confirm: () => dispatch(confirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
