import React from "react";
import { createRef } from "react/cjs/react.production.min";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";
import DialogItem from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

const Dialogs = ({ dialogsData, messagesData, newMessageBody, dispatch }) => {
  let newMessageElement = createRef();

  const onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map((item) => {
          return <DialogItem key={item.id} name={item.name} path={item.id} />;
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map((item) => {
          return <Message messageContent={item.message} key={item.id} />;
        })}
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
            ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
