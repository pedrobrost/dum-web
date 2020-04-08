import axios from "../../axios";

const types = {
  AUTH_REQUEST: "AUTH_REQUEST",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
  AUTH_LOGOUT: "AUTH_LOGOUT",
  AUTH_CHANGE_PASSWORD: "AUTH_CHANGE_PASSWORD",
};

const request = () => ({
  type: types.AUTH_REQUEST,
});

export const success = () => ({
  type: types.AUTH_SUCCESS,
});

const failure = () => ({
  type: types.AUTH_FAILURE,
});

export const changePassword = (password) => ({
  type: types.AUTH_CHANGE_PASSWORD,
  password,
});

export const login = () => async (dispatch, getState) => {
  const {
    auth: { password },
  } = getState();
  dispatch(request());
  try {
    const { data } = await axios.post("/login", { password });
    if (data.jwt) {
      localStorage.setItem("dum-token", data.jwt);
      const interceptor = async (config) => {
        config.headers.Authorization = `Bearer ${data.jwt}`;
        return Promise.resolve(config);
      };
      axios.interceptors.request.use(interceptor);
      dispatch(success());
    } else {
      dispatch(failure());
    }
  } catch (error) {
    dispatch(failure());
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("dum-token");
  dispatch({
    type: types.AUTH_LOGOUT,
  });
};

const initialState = {
  password: "",
  error: false,
  loggedIn: false,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return { ...state, loggeIn: false, loading: true };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: false,
        password: "",
      };
    case types.AUTH_FAILURE:
      return { ...state, loggedIn: false, loading: false, error: true };
    case types.AUTH_LOGOUT:
      return { ...state, loggedIn: false, loading: false, password: "" };
    case types.AUTH_CHANGE_PASSWORD:
      return { ...state, password: action.password };
    default:
      return state;
  }
};

export default reducer;
