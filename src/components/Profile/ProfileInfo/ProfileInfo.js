import React, { useState } from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/avatar.png";
import ProfielDataForm from "./ProfielDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit =  (formData) => {
   saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <div>
      <img
        style={{ width: "200px", height: "200px" }}
        src={profile.photos.large || userPhoto}
        alt=""
      />
      {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      {editMode ? (
        <ProfielDataForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goEditMode={() => {
            setEditMode(true);
          }}
        />
      )}

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goEditMode }) => {
  return (
    <div className={s.descriptionBlock}>
      {isOwner && <button onClick={goEditMode}>edit</button>}
      <div>{profile.fullName}</div>
      <div>
        <b>Looking for a job </b>
        {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      <div>
        About me <b>{profile.aboutMe}</b>
      </div>
      <div>
        Job Description
        <b>
          {profile.lookingForAJob ? profile.lookingForAJobDescription : null}
        </b>
      </div>
      <div>
        <b>Contacts : </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};


export default ProfileInfo;
