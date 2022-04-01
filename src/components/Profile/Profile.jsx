import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ postsData, addPost }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postsData={postsData} addPosts={addPost} />
    </div>
  );
};

export default Profile;
