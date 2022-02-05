import React from 'react';
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, path }) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${path}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;