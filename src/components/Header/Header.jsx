import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import userPhoto from "../../assets/images/avatar.png";

const Header = (props) => {
  const getContent = () => {
    if (props.profile) {
      if (props.profile.photos.small) {
        return <img src={props.profile.photos.small} alt=""></img>;
      } else {
        if (props.isAuth) {
          return <img src={userPhoto} alt="" />;
        } else {
          return <NavLink to="/login">Login</NavLink>;
        }
      }
    } else {
      return null;
    }
  };

  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt=""
      />
      <div className={s.loginBlock}>{getContent()}</div>
    </header>
  );
};

export default Header;
