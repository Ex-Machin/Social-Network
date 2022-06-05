let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
let SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "What da fuck!" },
    { id: 3, message: "Esketit" },
  ],
  dialogs: [
    { id: 1, name: "Lisa" },
    { id: 2, name: "Vika" },
    { id: 3, name: "Lilia" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Dima" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return (stateCopy = {
        ...state,
        newMessageBody: action.body,
      });
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return stateCopy = {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
  default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
