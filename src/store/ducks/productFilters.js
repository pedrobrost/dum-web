import escapeStringRegexp from "escape-string-regexp";

const types = {
  PRODUCT_FILTERS_CHANGE_SEARCH: "PRODUCT_FILTERS_CHANGE_SEARCH",
};

export const changeSearch = (search) => ({
  type: types.PRODUCT_FILTERS_CHANGE_SEARCH,
  search,
});

const initialState = {
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_FILTERS_CHANGE_SEARCH:
      return { ...state, search: action.search };
    default:
      return state;
  }
};

export default reducer;

export const getProducts = (state) => {
  const regex = new RegExp(
    `.*${escapeStringRegexp(state.productFilters.search)}.*`,
    "i"
  );
  return state.products
    .filter((a) => a.name.match(regex))
    .sort((a, b) => a.name.localeCompare(b.name));
};
