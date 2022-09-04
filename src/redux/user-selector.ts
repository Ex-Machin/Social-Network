import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getPageSizeSelector = (state: AppStateType) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCountSelector = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPageSelector = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetchinSelector = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgressSelector = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
