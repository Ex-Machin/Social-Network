import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptcha } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType } from "./app-reducer";
import { InferActionsTypes } from "./redux-store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean | null,
  captchaUrl: null as string | null, // if null, then captcha is not required
};

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitiaStateType => {
  switch (action.type) {
    case "auth/GET_CAPTCHA_URL_SUCCEESS":
    case "auth/SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (email: string | null, userId: number | null, login: string | null, isAuth: boolean) => ({ type: "auth/SET_USER_DATA", payload: { email, userId, login, isAuth } }),
  getCaptchaUrlSucces: (captchaUrl: string) => ({ type: "auth/GET_CAPTCHA_URL_SUCCEESS", payload: { captchaUrl } })
}

export const getCurrentUser = (): ThunkType => async (dispatch) => {
  let response = await authAPI.getCurrentUser();

  if (response.resultCode === ResultCodeEnum.Success) {
    let { email, id, login } = response.data;
    dispatch(actions.setAuthUserData(email, id, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodeEnum.Success) {

    // success, get auth data
    dispatch(getCurrentUser());
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Unhandled error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();

  dispatch(actions.getCaptchaUrlSucces(data.url))

}

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

export type InitiaStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>