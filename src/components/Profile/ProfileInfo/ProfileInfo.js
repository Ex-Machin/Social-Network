import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <span>{profile.fullName}</span>
        <img src={profile.photos.large} alt="" />
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
      <span>{profile.aboutMe}</span>
    </div>
  );
};

export default ProfileInfo;
