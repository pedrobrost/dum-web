import axios from "../../axios";

const types = {
  CUSTOMERS_REQUEST: "CUSTOMERS_REQUEST",
  CUSTOMERS_SUCCESS: "CUSTOMERS_SUCCESS",
  CUSTOMERS_FAILURE: "CUSTOMERS_FAILURE",
  CUSTOMERS_ADD: "CUSTOMERS_ADD",
  CUSTOMERS_UPDATE: "CUSTOMERS_UPDATE",
};

const requestCustomers = () => ({
  type: types.CUSTOMERS_REQUEST,
});

const successCustomers = (customers) => ({
  type: types.CUSTOMERS_SUCCESS,
  customers,
});

const failedCustomers = () => ({
  type: types.CUSTOMERS_FAILURE,
  message: "Ha ocurrido un error al intentar obtener los clientes",
});

export const addCustomer = (customer) => ({
  type: types.CUSTOMERS_ADD,
  customer,
});

export const updateCustomer = (customer) => ({
  type: types.CUSTOMERS_UPDATE,
  customer,
});

export const getCustomers = () => {
  return async (dispatch) => {
    dispatch(requestCustomers());
    try {
      const { data } = await axios.get("/customers");
      dispatch(successCustomers(data));
    } catch (error) {
      dispatch(failedCustomers());
    }
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.CUSTOMERS_SUCCESS:
      return action.customers;
    case types.CUSTOMERS_ADD:
      return [...state, action.customer];
    case types.CUSTOMERS_UPDATE:
      return state.map((c) =>
        c._id === action.customer._id ? action.customer : c
      );
    default:
      return state;
  }
};

export default reducer;
