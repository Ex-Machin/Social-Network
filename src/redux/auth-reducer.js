import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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

export const getCurrentUser = () => {
  return (dispatch) => {
    authAPI.getCurrentUser().then((payload) => {
      if (payload.resultCode === 0) {
        console.log("payload :>> ", payload);
        let { email, id, login } = payload.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getCurrentUser());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : "Unhandled error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
