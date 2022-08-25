import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <span>{props.profile.fullName}</span>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <span>{props.profile.aboutMe}</span>
    </div>
  );
};

export default ProfileInfo;
