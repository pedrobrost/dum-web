const types = {
  SHOW_ORDER_MODAL_OPEN: "SHOW_ORDER_MODAL_OPEN",
  SHOW_ORDER_MODAL_CLOSE: "SHOW_ORDER_MODAL_CLOSE",
};

export const openModal = (order) => ({
  type: types.SHOW_ORDER_MODAL_OPEN,
  order,
});

export const closeModal = () => ({
  type: types.SHOW_ORDER_MODAL_CLOSE,
});

const initialState = {
  modalOpen: false,
  order: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ORDER_MODAL_OPEN:
      return { ...state, modalOpen: true, order: action.order };
    case types.SHOW_ORDER_MODAL_CLOSE:
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};

export default reducer;
