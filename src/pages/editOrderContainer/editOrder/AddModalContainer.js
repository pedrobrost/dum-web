import { connect } from "react-redux";

import {
  closeAddProductModal,
  changeProduct,
  changeAmount,
  addProduct,
} from "../../../store/ducks/editOrder";
import AddModal from "./addModalContainer/AddModal";

const mapStateToProps = (state) => ({
  open: state.editOrder.addProductModal,
  product: state.editOrder.product,
  products: state.products,
  amount: state.editOrder.amount,
  sending: state.editOrder.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeAddProductModal()),
  changeProduct: (product) => dispatch(changeProduct(product)),
  changeAmount: (amount) => dispatch(changeAmount(amount)),
  confirm: () => dispatch(addProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
