import escapeStringRegexp from "escape-string-regexp";

const types = {
  CUSTOMER_FILTERS_CHANGE_SEARCH: "CUSTOMER_FILTERS_CHANGE_SEARCH",
};

export const changeSearch = (search) => ({
  type: types.CUSTOMER_FILTERS_CHANGE_SEARCH,
  search,
});

const initialState = {
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_FILTERS_CHANGE_SEARCH:
      return { ...state, search: action.search };
    default:
      return state;
  }
};

export default reducer;

export const getCustomers = (state) => {
  const regex = new RegExp(
    `.*${escapeStringRegexp(state.customerFilters.search)}.*`,
    "i"
  );
  return state.customers
    .filter((a) => a.name.match(regex))
    .sort((a, b) => a.name.localeCompare(b.name));
};
