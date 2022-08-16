import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        src="https://images.ctfassets.net/hrltx12pl8hq/8MpEm5OxWXiNqLvWzCYpW/24f02cfe391aa8f25845de858982d449/shutterstock_749707636__1__copy.jpg?fit=fill&w=840&h=350"
        alt=""
      />
      <div className={s.descriptionBlock}>
        <span>{props.profile.fullName}</span>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <span>{props.profile.aboutMe}</span>
    </div>
  );
};

export default ProfileInfo;
