import React from "react";
import { createRef } from "react/cjs/react.production.min";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ updateNewPostText, postsData, addPost, newPostText }) => {
  let newPostElement = createRef();

  const onAddPost = () => {
    addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add Post</button>
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
