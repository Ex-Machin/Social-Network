import React from 'react';
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type PropsTypes = {
  name: string
  path: number
}

const DialogItem: React.FC<PropsTypes> = ({ name, path }) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${path}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;