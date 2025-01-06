import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helper";
import { AppStateType, InferActionsTypes } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // array of users id
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "users/FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case "users/UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case "users/SET_USERS": {
      return { ...state, users: action.users };
    }
    case "users/SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "users/SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case "users/TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "users/TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess:(userId: number) => ({type: "users/FOLLOW", userId} as const),
  unfollowSuccess:(userId: number) => ({type: "users/UNFOLLOW", userId} as const),
  setUsers:(users: Array<UserType>) => ({type: "users/SET_USERS", users} as const),
  setCurrentPage:(currentPage: number) => ({type: "users/SET_CURRENT_PAGE", currentPage} as const),
  setTotalUsersCount:(totalUsersCount: number)=> ({type: "users/SET_TOTAL_USERS_COUNT", totalUsersCount} as const),
  toggleIsFetching:(isFetching: boolean) => ({type: "users/TOGGLE_IS_FETCHING", isFetching} as const),
  toggleFollowingProgress:(isFetching: boolean, userId: number) => ({type: "users/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const),
}


type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const getUsers = (
  page: number,
  pageSize: number
):ThunkType=> {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  id: number,
  apiMethod: any,
  actionCreator: (id: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, id));
  const data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(actions.toggleFollowingProgress(false, id));
};

export const follow = (id: number):ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    );
  };
};

export const unfollow = (id: number):ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    );
  };
};

export default usersReducer;
