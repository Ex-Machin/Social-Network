import React from "react";
import styles from "./users.module.css";

const Users = ({ users, follow, unfollow, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        icon: "https://cdnn21.img.ria.ru/images/07e5/03/11/1601687968_0:93:1280:813_1920x0_80_0_0_fb747e778aea631288755a1989ff6c14.jpg",
        followed: true,
        fullName: "Dmytro",
        status: "I am a bos",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        icon: "https://cdnn21.img.ria.ru/images/07e5/03/11/1601687968_0:93:1280:813_1920x0_80_0_0_fb747e778aea631288755a1989ff6c14.jpg",
        followed: true,
        fullName: "Vlad",
        status: "Spierdałaj",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        icon: "https://cdnn21.img.ria.ru/images/07e5/03/11/1601687968_0:93:1280:813_1920x0_80_0_0_fb747e778aea631288755a1989ff6c14.jpg",
        followed: false,
        fullName: "Angelika",
        status: "Fuck off",
        location: { city: "Luhansk", country: "Ukraine" },
      },
      {
        id: 4,
        icon: "https://cdnn21.img.ria.ru/images/07e5/03/11/1601687968_0:93:1280:813_1920x0_80_0_0_fb747e778aea631288755a1989ff6c14.jpg",
        followed: false,
        fullName: "Lisa",
        status: "LOL",
        location: { city: "Gdynia", country: "Poland" },
      },
    ]);
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user}>
          <span>
            <div>
              <img src={user.icon} alt="" className={styles.userPhoto} />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
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
              <div>{user.fullName} </div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
