import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ store }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
