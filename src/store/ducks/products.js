import axios from "../../axios";

const types = {
  PRODUCTS_REQUEST: "PRODUCTS_REQUEST",
  PRODUCTS_SUCCESS: "PRODUCTS_SUCCESS",
  PRODUCTS_FAILURE: "PRODUCTS_FAILURE",
  PRODUCTS_ADD: "PRODUCTS_ADD",
  PRODUCTS_UPDATE: "PRODUCTS_UPDATE",
};

const requestProducts = () => ({
  type: types.PRODUCTS_REQUEST,
});

const successProducts = (products) => ({
  type: types.PRODUCTS_SUCCESS,
  products,
});

const failedProducts = () => ({
  type: types.PRODUCTS_FAILURE,
  message: "Ha ocurrido un error al intentar obtener los productos",
});

export const addProduct = (product) => ({
  type: types.PRODUCTS_ADD,
  product,
});

export const updateProduct = (product) => ({
  type: types.PRODUCTS_UPDATE,
  product,
});

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(requestProducts());
    try {
      const { data } = await axios.get("/products");
      dispatch(successProducts(data));
    } catch (error) {
      dispatch(failedProducts());
    }
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS:
      return action.products;
    case types.PRODUCTS_ADD:
      return [...state, action.product];
    case types.PRODUCTS_UPDATE:
      return state.map((p) =>
        p._id === action.product._id ? action.product : p
      );
    default:
      return state;
  }
};

export default reducer;
