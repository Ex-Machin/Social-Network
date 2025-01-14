import { ChangeEvent, useState } from "react";
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileType } from "../../../types/types";
import Preloader from "../../Preloader/Preloader";
import ProfielDataForm from "./ProfielDataForm";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../../../redux/redux-store";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { saveProfile } from "../../../redux/profileReducer"

export type ProfileInfoPropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => {
  const [editMode, setEditMode] = useState(false);

  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch()

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData: ProfileType) => {
    // TODO: remove then
    dispatch(saveProfile(formData)).then(() => setEditMode(false));
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

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goEditMode }) => {
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
              contactValue={profile.contacts[key as keyof typeof profile.contacts]}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactProfileType = {
  contactTitle: string
  contactValue: string
}

export const Contact: React.FC<ContactProfileType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};


export default ProfileInfo;
