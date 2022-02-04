import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://images.ctfassets.net/hrltx12pl8hq/8MpEm5OxWXiNqLvWzCYpW/24f02cfe391aa8f25845de858982d449/shutterstock_749707636__1__copy.jpg?fit=fill&w=840&h=350"
        alt=""
      />
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
