import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>New Post</div>
      <Post message="Bye World" likeCount = "13"/>
      <Post message="Abrakadabra" likeCount = "15"/>
    </div>
  );
};

export default MyPosts;
