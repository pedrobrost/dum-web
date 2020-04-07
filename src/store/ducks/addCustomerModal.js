import axios from "../../axios";
import { addCustomer } from "./customers";
import { enqueueError, enqueueMessage } from "./notifications";

const types = {
  ADD_CUSTOMER_MODAL_OPEN: "ADD_CUSTOMER_MODAL_OPEN",
  ADD_CUSTOMER_MODAL_CLOSE: "ADD_CUSTOMER_MODAL_CLOSE",
  ADD_CUSTOMER_MODAL_CHANGE_NAME: "ADD_CUSTOMER_MODAL_CHANGE_NAME",
  ADD_CUSTOMER_MODAL_CHANGE_ADDRESS: "ADD_CUSTOMER_MODAL_CHANGE_ADDRESS",
  ADD_CUSTOMER_MODAL_CHANGE_PHONE: "ADD_CUSTOMER_MODAL_CHANGE_PHONE",
  ADD_CUSTOMER_MODAL_REQUEST: "ADD_CUSTOMER_MODAL_REQUEST",
  ADD_CUSTOMER_MODAL_SUCCESS: "ADD_CUSTOMER_MODAL_SUCCESS",
  ADD_CUSTOMER_MODAL_FAILURE: "ADD_CUSTOMER_MODAL_FAILURE",
};

export const openModal = () => ({
  type: types.ADD_CUSTOMER_MODAL_OPEN,
});

export const closeModal = () => ({
  type: types.ADD_CUSTOMER_MODAL_CLOSE,
});

export const changeName = (name) => ({
  type: types.ADD_CUSTOMER_MODAL_CHANGE_NAME,
  name,
});

export const changeAddress = (address) => ({
  type: types.ADD_CUSTOMER_MODAL_CHANGE_ADDRESS,
  address,
});

export const changePhone = (phone) => ({
  type: types.ADD_CUSTOMER_MODAL_CHANGE_PHONE,
  phone,
});

const request = () => ({
  type: types.ADD_CUSTOMER_MODAL_REQUEST,
});

const success = (stock) => ({
  type: types.ADD_CUSTOMER_MODAL_SUCCESS,
  stock,
});

const failure = () => ({
  type: types.ADD_CUSTOMER_MODAL_FAILURE,
});

export const confirm = () => async (dispatch, getState) => {
  const {
    addCustomerModal: { name, address, phone },
  } = getState();
  if (name && address && phone) {
    dispatch(request());
    try {
      const { data } = await axios.post("/customers", {
        name,
        address,
        phone,
      });
      dispatch(enqueueMessage("El cliente se agregó correctamente"));
      dispatch(addCustomer(data));
      dispatch(success());
    } catch (error) {
      dispatch(enqueueError("Ocurrió un error al agregar el cliente"));
      dispatch(failure());
    }
  } else {
    dispatch(enqueueError("Debe ingresar todos los campos"));
  }
};

const initialState = {
  modalOpen: false,
  name: "",
  address: "",
  phone: "",
  sending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CUSTOMER_MODAL_OPEN:
      return { ...state, modalOpen: true, name: "", price: "" };
    case types.ADD_CUSTOMER_MODAL_CLOSE:
      return { ...state, modalOpen: false };
    case types.ADD_CUSTOMER_MODAL_CHANGE_NAME:
      return { ...state, name: action.name };
    case types.ADD_CUSTOMER_MODAL_CHANGE_ADDRESS:
      return { ...state, address: action.address };
    case types.ADD_CUSTOMER_MODAL_CHANGE_PHONE:
      return { ...state, phone: action.phone };
    case types.ADD_CUSTOMER_MODAL_REQUEST:
      return { ...state, sending: true };
    case types.ADD_CUSTOMER_MODAL_SUCCESS:
      return { ...state, sending: false, modalOpen: false };
    case types.ADD_CUSTOMER_MODAL_FAILURE:
      return { ...state, sending: false };
    default:
      return state;
  }
};

export default reducer;
