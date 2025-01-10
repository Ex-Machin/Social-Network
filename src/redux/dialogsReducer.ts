import { InferActionsTypes } from "./redux-store";


type MessageType = {
  id: number;
  message: string;
};

type DialogsType = {
  id: number;
  name: string;
};

let initialState = {
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "What da fuck!" },
    { id: 3, message: "Esketit" },
  ] as Array<MessageType>,
  dialogs: [
    { id: 1, name: "Lisa" },
    { id: 2, name: "Vika" },
    { id: 3, name: "Lilia" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Dima" },
  ] as Array<DialogsType>,
};

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "dialogs/SEND-MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: action.newMessageBody },
        ],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) => ({type: "dialogs/SEND-MESSAGE", newMessageBody}),
}

export default dialogsReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>