import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
} 
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
} 

export const getIsFetchinSelector = (state) => {
    return state.usersPage.isFetching;
} 

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress;
} 