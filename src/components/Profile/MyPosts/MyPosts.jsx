import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../FormsControl/FormsControl";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = ({handleSubmit}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="post"
        component={TextArea}
        placeholder={"Post a message"}
        validate={[required, maxLength10]}
      />
      <button type="submit">Add Post</button>
      <button>Remove</button>
    </Form>
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
        {[...postsData].reverse().map((item) => {
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
