import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ friendsData }) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(isActive) => (isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(isActive) => (isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(isActive) => (isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={(isActive) => (isActive ? s.active : s.item)}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(isActive) => (isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(isActive) => (isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <div>
        Friends
        <div className={s.friendsBlock}>
          {friendsData.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.src} alt="" className={s.friendsImage}></img>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
