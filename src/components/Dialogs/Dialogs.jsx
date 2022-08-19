import React from "react";
import { createRef } from "react/cjs/react.production.min";
import DialogItem from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

const Dialogs = ({ dialogsPage, sendMessage, updateNewMessageBody }) => {
  let newMessageElement = createRef();
  const onSendMessageClick = () => {
    sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsPage.dialogs.map((item) => {
          return <DialogItem key={item.id} name={item.name} path={item.id} />;
        })}
      </div>
      <div className={s.messages}>
        {dialogsPage.messages.map((item) => {
          return <Message messageContent={item.message} key={item.id} />;
        })}
        <div>
          <textarea
            value={dialogsPage.newMessageBody}
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
