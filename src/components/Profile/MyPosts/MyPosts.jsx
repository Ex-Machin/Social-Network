import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ postsData }) => {
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>New Post</div>
      <div className={s.posts}>
        {postsData.map((item) => {
          return (
            <Post
              message={item.message}
              likeCount={item.likeCount}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
