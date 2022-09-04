import { getCurrentUser } from "./auth-reducer";

const SET_INIT = "app/SET_INIT";

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false,
};

type InitActionType = {
  type: typeof SET_INIT
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

export const setInit = (): InitActionType => ({
  type: SET_INIT,
});

export const initialize = () => {
  return (dispatch: (Function)) => {
    const promise = dispatch(getCurrentUser());
    Promise.all([promise]).then(() => {
      dispatch(setInit());
    });
  };
};

export default appReducer;
