import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = ({ name, path }) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${path}`}>{name}</NavLink>
    </div>
  );
};

export const Message = ({messageContent}) => {
  return <div className={s.message}>{messageContent}</div>;
};


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Lisa" path="1" />
        <DialogItem name="Vika" path="2" />
        <DialogItem name="Lilia" path="3" />
        <DialogItem name="Vlad" path="4" />
        <DialogItem name="Dima" path="5" />
      </div>
      <div className={s.messages}>
        <Message messageContent='hi'/>
        <Message messageContent='What da fuck!'/>
        <Message messageContent='Esketit'/>
      </div>
    </div>
  );
};

export default Dialogs;
