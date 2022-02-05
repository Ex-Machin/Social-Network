import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Bye World', likeCount: '12'},
    {id: 2, name: 'Abrakadabra',  likeCount: '11'},
  ]
  
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>New Post</div>
      <div className={s.posts}>
        {postsData.map(item => {
          return <Post message={item.message} likeCount = {item.likeCount} key={item.id} />  
        }) }
      </div>
    </div>
  );
};

export default MyPosts;
