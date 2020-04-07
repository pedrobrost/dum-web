import axios from "../../axios";
import { updateCustomer } from "./customers";
import { enqueueError, enqueueMessage } from "./notifications";

const types = {
  EDIT_CUSTOMER_MODAL_OPEN: "EDIT_CUSTOMER_MODAL_OPEN",
  EDIT_CUSTOMER_MODAL_CLOSE: "EDIT_CUSTOMER_MODAL_CLOSE",
  EDIT_CUSTOMER_MODAL_CHANGE_NAME: "EDIT_CUSTOMER_MODAL_CHANGE_NAME",
  EDIT_CUSTOMER_MODAL_CHANGE_ADDRESS: "EDIT_CUSTOMER_MODAL_CHANGE_ADDRESS",
  EDIT_CUSTOMER_MODAL_CHANGE_PHONE: "EDIT_CUSTOMER_MODAL_CHANGE_PHONE",
  EDIT_CUSTOMER_MODAL_REQUEST: "EDIT_CUSTOMER_MODAL_REQUEST",
  EDIT_CUSTOMER_MODAL_SUCCESS: "EDIT_CUSTOMER_MODAL_SUCCESS",
  EDIT_CUSTOMER_MODAL_FAILURE: "EDIT_CUSTOMER_MODAL_FAILURE",
};

export const openModal = (customer) => ({
  type: types.EDIT_CUSTOMER_MODAL_OPEN,
  customer,
});

export const closeModal = () => ({
  type: types.EDIT_CUSTOMER_MODAL_CLOSE,
});

export const changeName = (name) => ({
  type: types.EDIT_CUSTOMER_MODAL_CHANGE_NAME,
  name,
});

export const changeAddress = (address) => ({
  type: types.EDIT_CUSTOMER_MODAL_CHANGE_ADDRESS,
  address,
});

export const changePhone = (phone) => ({
  type: types.EDIT_CUSTOMER_MODAL_CHANGE_PHONE,
  phone,
});

const request = () => ({
  type: types.EDIT_CUSTOMER_MODAL_REQUEST,
});

const success = (stock) => ({
  type: types.EDIT_CUSTOMER_MODAL_SUCCESS,
  stock,
});

const failure = () => ({
  type: types.EDIT_CUSTOMER_MODAL_FAILURE,
});

export const confirm = () => async (dispatch, getState) => {
  const {
    editCustomerModal: { name, address, phone, _id },
  } = getState();
  if (name && address && phone) {
    dispatch(request());
    try {
      const { data } = await axios.patch(`/customers/${_id}`, {
        name,
        address,
        phone,
      });
      dispatch(enqueueMessage("El cliente se editó correctamente"));
      dispatch(updateCustomer(data));
      dispatch(success());
    } catch (error) {
      dispatch(enqueueError("Ocurrió un error al editar el cliente"));
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
  address: "",
  phone: "",
  sending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_CUSTOMER_MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
        name: action.customer.name,
        address: action.customer.address,
        phone: action.customer.phone,
        _id: action.customer._id,
      };
    case types.EDIT_CUSTOMER_MODAL_CLOSE:
      return { ...state, modalOpen: false };
    case types.EDIT_CUSTOMER_MODAL_CHANGE_NAME:
      return { ...state, name: action.name };
    case types.EDIT_CUSTOMER_MODAL_CHANGE_ADDRESS:
      return { ...state, address: action.address };
    case types.EDIT_CUSTOMER_MODAL_CHANGE_PHONE:
      return { ...state, phone: action.phone };
    case types.EDIT_CUSTOMER_MODAL_REQUEST:
      return { ...state, sending: true };
    case types.EDIT_CUSTOMER_MODAL_SUCCESS:
      return { ...state, sending: false, modalOpen: false };
    case types.EDIT_CUSTOMER_MODAL_FAILURE:
      return { ...state, sending: false };
    default:
      return state;
  }
};

export default reducer;
