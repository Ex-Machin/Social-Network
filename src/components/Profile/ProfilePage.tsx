import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  getStatus,
  getUser,
  savePhoto,
  updateStatus
} from "../../redux/profileReducer";
import { AppStateType } from "../../redux/redux-store";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfilePage: React.FC = () => {

  const params = useParams()
  const navigate = useNavigate();
  const authorisedUserId = useSelector((state: AppStateType) => state.auth.userId)
  const profile = useSelector((state: AppStateType) => state.profilePage.profile)
  const status = useSelector((state: AppStateType) => state.profilePage.status)
  
  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch()

  useEffect(() => {
    refreshProfile();
  }, [params.id]);

  const refreshProfile = () => {
    let userId: number | null = params.id ? +params.id : null;
    if (!userId) {
      userId = authorisedUserId;
      if (!userId) {
        navigate("/login", { replace: true });
      }
    }
    if (userId) {
      dispatch(getUser(userId))
      dispatch(getStatus(userId))
    }
  }

  return (
      <div className={s.content}>
        <ProfileInfo
          profile={profile}
          isOwner={!params.id}
          savePhoto={savePhoto}
          status={status}
          updateStatus={updateStatus}
        />
        <MyPostsContainer />
      </div>
  );
}

export default ProfilePage