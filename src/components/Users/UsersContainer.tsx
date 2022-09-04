import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector, getIsFetchinSelector, getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector
} from "../../redux/user-selector";
import {
  follow,
  getUsers,
  unfollow
} from "../../redux/usersReducer";
import { UserType } from "../../types/types";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";

type OwnPropsType = {
  pageTitle: string
}

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>

}

type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  getUsers: (currentPage: number, pageSize: number) => void

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (page: number) => {
    const { pageSize } = this.props;
    this.props.getUsers(page, pageSize);
  };

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
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
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  //
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersContainer);
