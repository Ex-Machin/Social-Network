import { ThunkAction } from "redux-thunk";
import { getCurrentUser } from "./auth-reducer";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { Action } from "redux";

let initialState = {
  initialized: false,
};

export const actions = {
  initialize: () => ({type: "app/SET_INIT"})
}
type ActionsType = InferActionsTypes<typeof actions>
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const appReducer = (state = initialState, action: ActionsType): typeof initialState => {
  switch (action.type) {
    case "app/SET_INIT":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initialize = () => {
  return (dispatch: any) => {
    const promise = dispatch(getCurrentUser());
    Promise.all([promise]).then(() => {
      dispatch(actions.initialize());
    });
  };
};

export default appReducer;
