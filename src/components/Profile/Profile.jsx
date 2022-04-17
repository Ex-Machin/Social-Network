import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profilePage,dispatch}) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postsData={profilePage.posts} dispatch={dispatch} newPostText={profilePage.newPostText}/>
    </div>
  );
};

export default Profile;
