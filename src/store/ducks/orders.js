import axios from "../../axios";

const types = {
  ORDERS_REQUEST: "ORDERS_REQUEST",
  ORDERS_SUCCESS: "ORDERS_SUCCESS",
  ORDERS_FAILURE: "ORDERS_FAILURE",
  ORDERS_ADD: "ORDERS_ADD",
};

const requestOrders = () => ({
  type: types.ORDERS_REQUEST,
});

const successOrders = (orders) => ({
  type: types.ORDERS_SUCCESS,
  orders,
});

const failedOrders = () => ({
  type: types.ORDERS_FAILURE,
  message: "Ha ocurrido un error al intentar obtener los pedidos",
});

export const addOrder = (order) => ({
  type: types.ORDERS_ADD,
  order,
});

export const getOrders = () => {
  return async (dispatch) => {
    dispatch(requestOrders());
    try {
      const { data } = await axios.get("/orders");
      dispatch(successOrders(data));
    } catch (error) {
      dispatch(failedOrders());
    }
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.ORDERS_SUCCESS:
      return action.orders;
    case types.ORDERS_ADD:
      return [...state, action.order];
    default:
      return state;
  }
};

export default reducer;
