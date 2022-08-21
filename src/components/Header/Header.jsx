import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt=""
      />
      {props.isAuth ? (
        <div>
          {props.login} <button onClick={props.logout}>Logout</button>
        </div>
      ) : (
        <Link to={"/login"} className={s.loginBlock}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
