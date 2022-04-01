import React from "react";
import { createRef } from "react/cjs/react.production.min";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ postsData }) => {
  let newPostElement = createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
  };

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
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
