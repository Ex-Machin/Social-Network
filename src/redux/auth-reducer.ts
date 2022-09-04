import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI } from "../api/api";
import { AppStateType } from "./redux-store";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCEESS = "auth/GET_CAPTCHA_URL_SUCCEESS";


let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean | null,
  captchaUrl: null as string | null, // if null, then captcha is not required
};

export type InitiaStateType = typeof initialState;

type ActionsTypes = SetAuthUserDataType | GetCaptchaUrlSuccessType | FormAction

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitiaStateType => {
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

type setAuthUserDataPayloadType = {
  email: string | null;
  userId: number | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataPayloadType;
};

export const setAuthUserData = (
  email: string | null,
  userId: number | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: { email, userId, login, isAuth },
});

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCEESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCEESS,
  payload: { captchaUrl },
});


type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const getCurrentUser = (): ThunkType => async (dispatch) => {
  let response = await authAPI.getCurrentUser();

  if (response.resultCode === 0) {
    let { email, id, login } = response.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string) :ThunkType =>
  async (dispatch) => {
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

export const getCaptchaUrl = ():ThunkType => {
  return async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  };
};

export const logout = ():ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
