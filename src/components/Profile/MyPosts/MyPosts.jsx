import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"post"} component={"textarea"} placeholder={"Bro"} />
      <button type="submit">Add Post</button>
      <button>Remove</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "posts",
})(MyPostForm);

const MyPosts = ({ postsData, addPost }) => {

  const onSubmit = (values) => {
    addPost(values.post);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <LoginReduxForm onSubmit={onSubmit} />
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
