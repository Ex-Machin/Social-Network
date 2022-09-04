import React from "react";
import s from '../Dialogs.module.css';

type PropsType = {
  messageContent: string
}

const Message: React.FC<PropsType> = ({ messageContent }) => {
  return <div className={s.message}>{messageContent}</div>;
};

export default Message;
