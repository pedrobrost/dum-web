import escapeStringRegexp from "escape-string-regexp";

const types = {
  ORDER_FILTERS_CHANGE_SEARCH: "ORDER_FILTERS_CHANGE_SEARCH",
};

export const changeSearch = (search) => ({
  type: types.ORDER_FILTERS_CHANGE_SEARCH,
  search,
});

const initialState = {
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_FILTERS_CHANGE_SEARCH:
      return { ...state, search: action.search };
    default:
      return state;
  }
};

export default reducer;

export const getOrders = (state) => {
  const regex = new RegExp(
    `.*${escapeStringRegexp(state.orderFilters.search)}.*`,
    "i"
  );
  return state.orders.filter((a) => a.customer.name.match(regex));
};
