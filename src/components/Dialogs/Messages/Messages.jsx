import React from "react";
import s from '../Dialogs.module.css';

const Message = ({ messageContent }) => {
  return <div className={s.message}>{messageContent}</div>;
};

export default Message;
