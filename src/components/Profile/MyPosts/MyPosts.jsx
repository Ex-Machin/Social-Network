import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>New Post</div>
      <div className={s.posts}>
        <Post message="Bye World" likeCount = "13"/>
        <Post message="Abrakadabra" likeCount = "15"/>
      </div>
    </div>
  );
};

export default MyPosts;
