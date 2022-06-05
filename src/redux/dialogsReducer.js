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

  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
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
