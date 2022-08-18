import React from "react";
import s from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt=""
      />
      <div className={s.loginBlock}>{props.login ? props.login : "Login"}</div>
    </header>
  );
};

export default Header;
