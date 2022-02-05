import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { logDOM } from "@testing-library/react";

export const DialogItem = ({ name, path }) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${path}`}>{name}</NavLink>
    </div>
  );
};

export const Message = ({ messageContent }) => {
  return <div className={s.message}>{messageContent}</div>;
};

const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Lisa" },
    { id: 2, name: "Vika" },
    { id: 3, name: "Lilia" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Dima" },
  ];
  const messagesData = [
    { id: 1, message: "hi" },
    { id: 2, message: "What da fuck!" },
    { id: 3, message: "Esketit" },
  ];
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
