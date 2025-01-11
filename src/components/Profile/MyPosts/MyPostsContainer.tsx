import { connect } from "react-redux";
import { actions } from "../../../redux/profileReducer";
import MyPosts, { DispatchPropsType, MapPropsType } from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    postsData: state.profilePage.posts,
  }
};

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
  addPost: actions.addPost
})(MyPosts);

export default MyPostsContainer;
