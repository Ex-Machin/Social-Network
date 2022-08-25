import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (email, userId, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { email, userId, login, isAuth },
});

export const getCurrentUser = () => async (dispatch) => {
  let response = await authAPI.getCurrentUser();

  if (response.resultCode === 0) {
    let { email, id, login } = response.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getCurrentUser());
  } else {
    const message =
      data.messages.length > 0 ? data.messages[0] : "Unhandled error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => {
  return async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
