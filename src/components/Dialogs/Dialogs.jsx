import React from "react";
import DialogItem from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

const Dialogs = ({dialogsData, messagesData}) => {
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
      </div>
    </div>
  );
};

export default Dialogs;
