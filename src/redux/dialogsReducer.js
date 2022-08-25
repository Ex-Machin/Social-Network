let SEND_MESSAGE = "dialogs/SEND-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
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

export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
