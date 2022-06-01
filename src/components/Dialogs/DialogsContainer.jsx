import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  let state = store.getState().dialogsPage;

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBodyCreator={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
