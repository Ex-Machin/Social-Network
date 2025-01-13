import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector, getIsFetchinSelector, getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersFilter,
  getUsersSelector
} from "../../redux/user-selector";
import {
  FilterType,
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
  filter: FilterType

}

type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter} = this.props
    this.props.getUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (page: number) => {
    const { pageSize, filter } = this.props;
    this.props.getUsers(page, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props

    this.props.getUsers(1, pageSize, filter)
  }

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
            onFilterChange={this.onFilterChanged}
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
    filter: getUsersFilter(state)
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
