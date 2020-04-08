import jwt_decode from "jwt-decode";
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

const getInterceptor = (dispatch) => async (config) => {
  if (config.url !== "/login") {
    const jwt = localStorage.getItem("dum-token");
    if (jwt) {
      const decoded = jwt_decode(jwt);
      const current_time = Date.now() / 1000;
      if (decoded.exp < current_time) {
        localStorage.removeItem("dum-token");
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return Promise.resolve(config);
};

export const checkLogin = (dispatch) => {
  const jwt = localStorage.getItem("dum-token");
  if (jwt) {
    const decoded = jwt_decode(jwt);
    const current_time = Date.now() / 1000;
    if (decoded.exp < current_time) {
      localStorage.removeItem("dum-token");
      dispatch(logout());
    } else {
      const interceptor = getInterceptor(dispatch);
      axios.interceptors.request.use(interceptor);
      dispatch(success());
    }
  }
};

export const login = () => async (dispatch, getState) => {
  const {
    auth: { password },
  } = getState();
  dispatch(request());
  try {
    const { data } = await axios.post("/login", { password });
    if (data.jwt) {
      localStorage.setItem("dum-token", data.jwt);
      const interceptor = getInterceptor(dispatch);
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
