import { connect } from "react-redux";

import {
  closeAddProductModal,
  changeProduct,
  changeAmount,
  addProduct,
} from "../../../store/ducks/newOrder";
import AddModal from "./addModalContainer/AddModal";

const mapStateToProps = (state) => ({
  open: state.newOrder.addProductModal,
  product: state.newOrder.product,
  products: state.products,
  amount: state.newOrder.amount,
  sending: state.newOrder.sending,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeAddProductModal()),
  changeProduct: (product) => dispatch(changeProduct(product)),
  changeAmount: (amount) => dispatch(changeAmount(amount)),
  confirm: () => dispatch(addProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
