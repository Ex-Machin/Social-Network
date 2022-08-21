import { getCurrentUser } from "./auth-reducer";

const SET_INIT = "SET_INIT";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInit = () => ({
  type: SET_INIT,
});

export const initialize = () => {
  return (dispatch) => {
    const promise = dispatch(getCurrentUser());
    Promise.all([promise]).then(() => {
      dispatch(setInit());
    });
  };
};

// export const login = (email, password, rememberMe) => (dispatch) => {
//   authAPI.login(email, password, rememberMe).then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(getCurrentUser());
//     } else {
//       const message =
//         data.messages.length > 0 ? data.messages[0] : "Unhandled error";
//       dispatch(stopSubmit("login", { _error: message }));
//     }
//   });
// };

// export const logout = () => {
//   return (dispatch) => {
//     authAPI.logout().then((data) => {
//       if (data.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false));
//       }
//     });
//   };
// };

export default appReducer;
