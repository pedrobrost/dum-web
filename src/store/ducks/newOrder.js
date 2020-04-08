import axios from "../../axios";
import { enqueueError, enqueueMessage } from "./notifications";

const types = {
  NEW_ORDER_ADD_PRODUCT_MODAL_OPEN: "NEW_ORDER_ADD_PRODUCT_MODAL_OPEN",
  NEW_ORDER_ADD_PRODUCT_MODAL_CLOSE: "NEW_ORDER_ADD_PRODUCT_MODAL_CLOSE",
  NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT:
    "NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT",
  NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT:
    "NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT",
  NEW_ORDER_ADD_PRODUCT: "NEW_ORDER_ADD_PRODUCT",
  NEW_ORDER_CHANGE_CUSTOMER: "NEW_ORDER_CHANGE_CUSTOMER",
  NEW_ORDER_CHANGE_ADDRESS: "NEW_ORDER_CHANGE_ADDRESS",
  NEW_ORDER_CHANGE_DESCRIPTION: "NEW_ORDER_CHANGE_DESCRIPTION",
  NEW_ORDER_REQUEST: "NEW_ORDER_REQUEST",
  NEW_ORDER_SUCCESS: "NEW_ORDER_SUCCESS",
  NEW_ORDER_FAILURE: "NEW_ORDER_FAILURE",
  NEW_ORDER_FINISH_MODAL_CLOSE: "NEW_ORDER_FINISH_MODAL_CLOSE",
};

export const openAddProductModal = () => ({
  type: types.NEW_ORDER_ADD_PRODUCT_MODAL_OPEN,
});

export const closeAddProductModal = () => ({
  type: types.NEW_ORDER_ADD_PRODUCT_MODAL_CLOSE,
});

export const closeFinishModal = () => ({
  type: types.NEW_ORDER_FINISH_MODAL_CLOSE,
});

export const changeProduct = (product) => ({
  type: types.NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT,
  product,
});

export const changeAmount = (amount) => ({
  type: types.NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT,
  amount,
});

export const changeCustomer = (customer) => (dispatch) => {
  dispatch({
    type: types.NEW_ORDER_CHANGE_CUSTOMER,
    customer,
  });
  dispatch(changeAddress(customer.address));
};

export const changeAddress = (address) => ({
  type: types.NEW_ORDER_CHANGE_ADDRESS,
  address,
});

export const changeDescription = (description) => ({
  type: types.NEW_ORDER_CHANGE_DESCRIPTION,
  description,
});

const request = () => ({
  type: types.NEW_ORDER_REQUEST,
});

const success = () => ({
  type: types.NEW_ORDER_SUCCESS,
});

const failure = () => ({
  type: types.NEW_ORDER_FAILURE,
});

export const addProduct = () => async (dispatch, getState) => {
  const {
    newOrder: { product, amount },
  } = getState();
  if (product && amount) {
    dispatch({
      type: types.NEW_ORDER_ADD_PRODUCT,
      product: { product, amount },
    });
  } else {
    dispatch(enqueueError("Debe ingresar todos los campos"));
  }
};

export const confirm = () => async (dispatch, getState) => {
  const {
    newOrder: { products, customer, address, description },
  } = getState();
  if (customer && address && products.length) {
    dispatch(request());
    try {
      await axios.post("/orders", {
        customer: customer._id,
        address: address,
        description,
        products: products.map((p) => ({
          product: p.product._id,
          price: p.product.price,
          amount: p.amount,
        })),
      });
      dispatch(enqueueMessage("El pedido se agregó correctamente"));
      dispatch(success());
    } catch (error) {
      dispatch(enqueueError("Ocurrió un error al agregar el pedido"));
      dispatch(failure());
    }
  } else {
    if (!customer || !address) {
      dispatch(enqueueError("Debe ingresar cliente y dirección"));
    } else {
      dispatch(enqueueError("Debe ingresar al menos un producto"));
    }
  }
};

const initialState = {
  addProductModal: false,
  customer: null,
  address: "",
  description: "",
  finishModal: false,
  product: null,
  amount: 1,
  sending: false,
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_ORDER_ADD_PRODUCT_MODAL_OPEN:
      return { ...state, addProductModal: true, product: null, amount: 1 };
    case types.NEW_ORDER_ADD_PRODUCT_MODAL_CLOSE:
      return { ...state, addProductModal: false };
    case types.NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT:
      return { ...state, product: action.product };
    case types.NEW_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT:
      return { ...state, amount: action.amount };
    case types.NEW_ORDER_ADD_PRODUCT:
      return {
        ...state,
        addProductModal: false,
        products: [...state.products, action.product],
      };
    case types.NEW_ORDER_CHANGE_CUSTOMER:
      return { ...state, customer: action.customer };
    case types.NEW_ORDER_CHANGE_ADDRESS:
      return { ...state, address: action.address };
    case types.NEW_ORDER_CHANGE_DESCRIPTION:
      return { ...state, description: action.description };
    case types.NEW_ORDER_REQUEST:
      return { ...state, sending: true, finishModal: true };
    case types.NEW_ORDER_SUCCESS:
      return { ...state, sending: false };
    case types.NEW_ORDER_FAILURE:
      return { ...state, sending: false, finishModal: false };
    case types.NEW_ORDER_FINISH_MODAL_CLOSE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
