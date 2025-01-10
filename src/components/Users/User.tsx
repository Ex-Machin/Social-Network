import React from "react";
import { NavLink } from "react-router-dom";
import avatarMock from "../../assets/images/avatar.png";
import styles from "./users.module.css";
import { UserType } from "../../types/types";

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div key={user.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small || avatarMock}
                alt=""
                className={styles.userPhoto}
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name} </div>
            <div>{user.status}</div>
          </span>
          <span>
            {/* <div>{user.location.country}</div> 
              <div>{user.location.city}</div> */}
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
