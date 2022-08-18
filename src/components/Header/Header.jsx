import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import userPhoto from "../../assets/images/avatar.png";

const Header = (props) => {

  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt=""
      />
      <div className={s.loginBlock}>{props.login && "Login"}</div>
    </header>
  );
};

export default Header;
