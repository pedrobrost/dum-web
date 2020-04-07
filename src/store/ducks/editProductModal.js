import axios from "../../axios";
import { updateProduct } from "./products";
import { enqueueError, enqueueMessage } from "./notifications";

const types = {
  EDIT_PRODUCT_MODAL_OPEN: "EDIT_PRODUCT_MODAL_OPEN",
  EDIT_PRODUCT_MODAL_CLOSE: "EDIT_PRODUCT_MODAL_CLOSE",
  EDIT_PRODUCT_MODAL_CHANGE_NAME: "EDIT_PRODUCT_MODAL_CHANGE_NAME",
  EDIT_PRODUCT_MODAL_CHANGE_PRICE: "EDIT_PRODUCT_MODAL_CHANGE_PRICE",
  EDIT_PRODUCT_MODAL_REQUEST: "EDIT_PRODUCT_MODAL_REQUEST",
  EDIT_PRODUCT_MODAL_SUCCESS: "EDIT_PRODUCT_MODAL_SUCCESS",
  EDIT_PRODUCT_MODAL_FAILURE: "EDIT_PRODUCT_MODAL_FAILURE",
};

export const openModal = (product) => ({
  type: types.EDIT_PRODUCT_MODAL_OPEN,
  product,
});

export const closeModal = () => ({
  type: types.EDIT_PRODUCT_MODAL_CLOSE,
});

export const changeName = (name) => ({
  type: types.EDIT_PRODUCT_MODAL_CHANGE_NAME,
  name,
});

export const changePrice = (price) => ({
  type: types.EDIT_PRODUCT_MODAL_CHANGE_PRICE,
  price,
});

const request = () => ({
  type: types.EDIT_PRODUCT_MODAL_REQUEST,
});

const success = (stock) => ({
  type: types.EDIT_PRODUCT_MODAL_SUCCESS,
  stock,
});

const failure = () => ({
  type: types.EDIT_PRODUCT_MODAL_FAILURE,
});

export const confirm = () => async (dispatch, getState) => {
  const {
    editProductModal: { name, price, _id },
  } = getState();
  if (name && price) {
    dispatch(request());
    try {
      const { data } = await axios.patch(`/products/${_id}`, {
        name,
        price,
      });
      dispatch(enqueueMessage("El producto se editó correctamente"));
      dispatch(updateProduct(data));
      dispatch(success());
    } catch (error) {
      dispatch(enqueueError("Ocurrió un error al editar el producto"));
      dispatch(failure());
    }
  } else {
    dispatch(enqueueError("Debe ingresar todos los campos"));
  }
};

const initialState = {
  modalOpen: false,
  _id: null,
  name: "",
  price: "",
  sending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT_MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
        name: action.product.name,
        price: action.product.price,
        _id: action.product._id,
      };
    case types.EDIT_PRODUCT_MODAL_CLOSE:
      return { ...state, modalOpen: false };
    case types.EDIT_PRODUCT_MODAL_CHANGE_NAME:
      return { ...state, name: action.name };
    case types.EDIT_PRODUCT_MODAL_CHANGE_PRICE:
      return { ...state, price: action.price };
    case types.EDIT_PRODUCT_MODAL_REQUEST:
      return { ...state, sending: true };
    case types.EDIT_PRODUCT_MODAL_SUCCESS:
      return { ...state, sending: false, modalOpen: false };
    case types.EDIT_PRODUCT_MODAL_FAILURE:
      return { ...state, sending: false };
    default:
      return state;
  }
};

export default reducer;
