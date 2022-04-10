import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        postsData={profilePage.posts}
        newPostText={profilePage.newPostText}
        updateNewPostText={updateNewPostText}
        addPosts={addPost}
      />
    </div>
  );
};

export default Profile;
