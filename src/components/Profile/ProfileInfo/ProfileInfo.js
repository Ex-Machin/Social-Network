import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <span>{props.profile.fullName}</span>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={"Иди нахуй"} />
      </div>
      <span>{props.profile.aboutMe}</span>
    </div>
  );
};

export default ProfileInfo;
