import React from "react";
import { Form, InjectedFormProps, reduxForm } from "redux-form";
import {
  required
} from "../../../utils/validators/validators";
import { createField, GetStringKeys, TextArea } from "../../FormsControl/FormsControl";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { PostType } from "../../../types/types";

type PropsType = {

}

type AddPostFormValuesType = {
  newPostText: string
} 

type LoginFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const MyPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>("Post a message", "newPostText", [required], TextArea)}
      <button type="submit">Add Post</button>
      <button>Remove</button>
    </Form>
  );
};

const LoginReduxForm = reduxForm<AddPostFormValuesType>({
  form: "posts",
})(MyPostForm);

type MyPostsPropsType = {
  postsData: Array<PostType>
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({ postsData, addPost }) => {

  const onSubmit = (values: AddPostFormValuesType) => {
    addPost(values.newPostText);
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
