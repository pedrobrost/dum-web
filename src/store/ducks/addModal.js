import axios from "../../axios";
import { addProduct } from "./products";
import { enqueueError, enqueueMessage } from "./notifications";

const types = {
  ADD_MODAL_OPEN: "ADD_MODAL_OPEN",
  ADD_MODAL_CLOSE: "ADD_MODAL_CLOSE",
  ADD_MODAL_CHANGE_NAME: "ADD_MODAL_CHANGE_NAME",
  ADD_MODAL_CHANGE_PRICE: "ADD_MODAL_CHANGE_PRICE",
  ADD_MODAL_REQUEST: "ADD_MODAL_REQUEST",
  ADD_MODAL_SUCCESS: "ADD_MODAL_SUCCESS",
  ADD_MODAL_FAILURE: "ADD_MODAL_FAILURE",
};

export const openModal = () => ({
  type: types.ADD_MODAL_OPEN,
});

export const closeModal = () => ({
  type: types.ADD_MODAL_CLOSE,
});

export const changeName = (name) => ({
  type: types.ADD_MODAL_CHANGE_NAME,
  name,
});

export const changePrice = (price) => ({
  type: types.ADD_MODAL_CHANGE_PRICE,
  price,
});

const request = () => ({
  type: types.ADD_MODAL_REQUEST,
});

const success = (stock) => ({
  type: types.ADD_MODAL_SUCCESS,
  stock,
});

const failure = () => ({
  type: types.ADD_MODAL_FAILURE,
});

export const confirm = () => async (dispatch, getState) => {
  const {
    addModal: { name, price },
  } = getState();
  if (name && price) {
    dispatch(request());
    try {
      const { data } = await axios.post("/products", {
        name,
        price,
      });
      dispatch(enqueueMessage("El producto se agregó correctamente"));
      dispatch(addProduct(data));
      dispatch(success());
    } catch (error) {
      dispatch(enqueueError("Ocurrió un error al agregar el producto"));
      dispatch(failure());
    }
  } else {
    dispatch(enqueueError("Debe ingresar todos los campos"));
  }
};

const initialState = {
  modalOpen: false,
  name: "",
  price: "",
  sending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MODAL_OPEN:
      return { ...state, modalOpen: true, name: "", price: "" };
    case types.ADD_MODAL_CLOSE:
      return { ...state, modalOpen: false };
    case types.ADD_MODAL_CHANGE_NAME:
      return { ...state, name: action.name };
    case types.ADD_MODAL_CHANGE_PRICE:
      return { ...state, price: action.price };
    case types.ADD_MODAL_REQUEST:
      return { ...state, sending: true };
    case types.ADD_MODAL_SUCCESS:
      return { ...state, sending: false, modalOpen: false };
    case types.ADD_MODAL_FAILURE:
      return { ...state, sending: false };
    default:
      return state;
  }
};

export default reducer;
