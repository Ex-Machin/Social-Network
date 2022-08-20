import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;
