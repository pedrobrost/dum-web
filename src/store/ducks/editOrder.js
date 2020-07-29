import axios from "../../axios";
import { enqueueError, enqueueMessage } from "./notifications";

const types = {
  EDIT_ORDER_ADD_PRODUCT_MODAL_OPEN: "EDIT_ORDER_ADD_PRODUCT_MODAL_OPEN",
  EDIT_ORDER_ADD_PRODUCT_MODAL_CLOSE: "EDIT_ORDER_ADD_PRODUCT_MODAL_CLOSE",
  EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT:
    "EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT",
  EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT:
    "EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT",
  EDIT_ORDER_ADD_PRODUCT: "EDIT_ORDER_ADD_PRODUCT",
  EDIT_ORDER_REMOVE_PRODUCT: "EDIT_ORDER_REMOVE_PRODUCT",
  EDIT_ORDER_CHANGE_CUSTOMER: "EDIT_ORDER_CHANGE_CUSTOMER",
  EDIT_ORDER_CHANGE_ADDRESS: "EDIT_ORDER_CHANGE_ADDRESS",
  EDIT_ORDER_CHANGE_DESCRIPTION: "EDIT_ORDER_CHANGE_DESCRIPTION",
  EDIT_ORDER_REQUEST: "EDIT_ORDER_REQUEST",
  EDIT_ORDER_SUCCESS: "EDIT_ORDER_SUCCESS",
  EDIT_ORDER_FAILURE: "EDIT_ORDER_FAILURE",
  EDIT_ORDER_SAVE_REQUEST: "EDIT_ORDER_SAVE_REQUEST",
  EDIT_ORDER_SAVE_SUCCESS: "EDIT_ORDER_SAVE_SUCCESS",
  EDIT_ORDER_SAVE_FAILURE: "EDIT_ORDER_SAVE_FAILURE",
  EDIT_ORDER_FINISH_MODAL_CLOSE: "EDIT_ORDER_FINISH_MODAL_CLOSE",
};

export const openAddProductModal = () => ({
  type: types.EDIT_ORDER_ADD_PRODUCT_MODAL_OPEN,
});

export const closeAddProductModal = () => ({
  type: types.EDIT_ORDER_ADD_PRODUCT_MODAL_CLOSE,
});

export const closeFinishModal = () => ({
  type: types.EDIT_ORDER_FINISH_MODAL_CLOSE,
});

export const changeProduct = (product) => ({
  type: types.EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT,
  product,
});

export const changeAmount = (amount) => ({
  type: types.EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT,
  amount,
});

export const changeCustomer = (customer) => (dispatch) => {
  dispatch({
    type: types.EDIT_ORDER_CHANGE_CUSTOMER,
    customer,
  });
  dispatch(changeAddress(customer.address));
};

export const changeAddress = (address) => ({
  type: types.EDIT_ORDER_CHANGE_ADDRESS,
  address,
});

export const changeDescription = (description) => ({
  type: types.EDIT_ORDER_CHANGE_DESCRIPTION,
  description,
});

const request = () => ({
  type: types.EDIT_ORDER_REQUEST,
});

const success = (order) => ({
  type: types.EDIT_ORDER_SUCCESS,
  order,
});

const failure = () => ({
  type: types.EDIT_ORDER_FAILURE,
});

const saveRequest = () => ({
  type: types.EDIT_ORDER_SAVE_REQUEST,
});

const saveSuccess = () => ({
  type: types.EDIT_ORDER_SAVE_SUCCESS,
});

const saveFailure = () => ({
  type: types.EDIT_ORDER_SAVE_FAILURE,
});

export const getOrder = (id) => async (dispatch) => {
  dispatch(request());
  try {
    const { data } = await axios.get(`/orders/${id}`);
    dispatch(success(data));
  } catch (error) {
    dispatch(failure());
  }
};

export const addProduct = () => async (dispatch, getState) => {
  const {
    editOrder: { product, amount },
  } = getState();
  if (product && amount) {
    dispatch({
      type: types.EDIT_ORDER_ADD_PRODUCT,
      product: { product: { ...product, newPrice: product.price }, amount },
    });
  } else {
    dispatch(enqueueError("Debe ingresar todos los campos"));
  }
};

export const removeProduct = (index) => ({
  type: types.EDIT_ORDER_REMOVE_PRODUCT,
  index,
});

export const confirm = () => async (dispatch, getState) => {
  const {
    editOrder: { products, customer, address, description, id },
  } = getState();
  if (customer && address && products.length) {
    dispatch(saveRequest());
    try {
      await axios.patch(`/orders/${id}`, {
        customer: customer._id,
        address: address,
        description,
        products: products.map((p) => ({
          product: p.product._id,
          price: p.product.price,
          amount: p.amount,
        })),
      });
      dispatch(enqueueMessage("El pedido se modificó correctamente"));
      dispatch(saveSuccess());
    } catch (error) {
      dispatch(enqueueError("Ocurrió un error al editar el pedido"));
      dispatch(saveFailure());
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
  id: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_ORDER_ADD_PRODUCT_MODAL_OPEN:
      return { ...state, addProductModal: true, product: null, amount: 1 };
    case types.EDIT_ORDER_ADD_PRODUCT_MODAL_CLOSE:
      return { ...state, addProductModal: false };
    case types.EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_PRODUCT:
      return { ...state, product: action.product };
    case types.EDIT_ORDER_ADD_PRODUCT_MODAL_CHANGE_AMOUNT:
      return { ...state, amount: action.amount };
    case types.EDIT_ORDER_ADD_PRODUCT:
      return {
        ...state,
        addProductModal: false,
        products: [...state.products, action.product],
      };
    case types.EDIT_ORDER_REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((_, index) => index !== action.index),
      };
    case types.EDIT_ORDER_CHANGE_CUSTOMER:
      return { ...state, customer: action.customer };
    case types.EDIT_ORDER_CHANGE_ADDRESS:
      return { ...state, address: action.address };
    case types.EDIT_ORDER_CHANGE_DESCRIPTION:
      return { ...state, description: action.description };
    case types.EDIT_ORDER_SUCCESS:
      return {
        ...state,
        customer: action.order.customer,
        address: action.order.address,
        description: action.order.description,
        id: action.order._id,
        products: action.order.products.map((p) => ({
          product: { ...p.product, newPrice: p.product.price, price: p.price },
          amount: p.amount,
        })),
      };
    case types.EDIT_ORDER_SAVE_REQUEST:
      return { ...state, sending: true, finishModal: true };
    case types.EDIT_ORDER_SAVE_SUCCESS:
      return { ...state, sending: false };
    case types.EDIT_ORDER_SAVE_FAILURE:
      return { ...state, sending: false, finishModal: false };
    case types.EDIT_ORDER_FINISH_MODAL_CLOSE:
      return { ...state, finishModal: false };
    default:
      return state;
  }
};

export default reducer;
