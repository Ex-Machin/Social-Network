import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCEESS = "auth/GET_CAPTCHA_URL_SUCCEESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTCHA_URL_SUCCEESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCEESS,
  payload: { captchaUrl },
});

export const getCurrentUser = () => async (dispatch) => {
  let response = await authAPI.getCurrentUser();

  if (response.resultCode === 0) {
    let { email, id, login } = response.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    // success, get auth data
    dispatch(getCurrentUser());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message =
      data.messages.length > 0 ? data.messages[0] : "Unhandled error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  };
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
