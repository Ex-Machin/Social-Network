import React from "react";
import { createRef } from "react/cjs/react.production.min";
import DialogItem from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

const Dialogs = ({ dialogsData, messagesData }) => {
  let newMessageElement = createRef();

  const addMessage = () => {
    let text = newMessageElement.current.value;
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
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
