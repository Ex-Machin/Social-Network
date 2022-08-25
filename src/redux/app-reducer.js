import { getCurrentUser } from "./auth-reducer";

const SET_INIT = "app/SET_INIT";

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

export default appReducer;
