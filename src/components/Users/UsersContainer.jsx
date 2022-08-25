import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector, getIsFetchinSelector, getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector
} from "../../redux/user-selector";
import {
  follow,
  getUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollowingProgress,
  unfollow
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (page) => {
    const { pageSize } = this.props;
    this.props.getUsers(page, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchinSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
