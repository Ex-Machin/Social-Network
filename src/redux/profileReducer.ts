import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { profileAPI, usersAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType } from "./redux-store";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Bye World", likeCount: "12" },
    { id: 2, message: "Abrakadabra", likeCount: "11" },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  post: "",
};

export type initialStateType = typeof initialState;

type ActionsTypes =
  | addPostType
  | DeletePostType
  | SetUserProfileType
  | SetStatusType
  | SavePhotoSuccessType;

const profileReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.post,
        likeCoint: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

type addPostType = {
  type: typeof ADD_POST;
  post: string;
};

export const addPost = (post: string): addPostType => ({
  type: ADD_POST,
  post,
});

function lowerFirstCharakter(string: string): string {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

type DeletePostType = {
  type: typeof DELETE_POST;
  id: number;
};
export const deletePost = (id: number): DeletePostType => ({
  type: DELETE_POST,
  id,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const getUser = (id: number): ThunkType => {
  return async (dispatch) => {
    usersAPI.getUser(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (id: number): ThunkType => {
  return async (dispatch, getState) => {
    const data = await profileAPI.getStatus(id);

    dispatch(setStatus(data));
  };
};

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    try {
      const data = profileAPI.updateStatus(status);

      if (data.result_code === 0) {
        dispatch(setStatus(status));
      }
    } catch (error) {
      console.warn(error);
    }
  };
};

export const savePhoto = (file: any): ThunkType => {
  return async (dispatch) => {
    const data = profileAPI.savePhoto(file);
    if (data.result_code === 0) {
      dispatch(savePhotoSuccess(data.photos));
    }
  };
};

export const saveProfile = (profile: ProfileType) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
      dispatch(getUser(userId));
    } else {
      const regex = /\(([^\)]+)/;
      const string1 = data.messages[0].split(regex);
      const string = string1[1].split("->");
      if (string[1]) {
        dispatch(
          stopSubmit("editProfile", {
            [lowerFirstCharakter(string[0])]: {
              [lowerFirstCharakter(string[1])]: data.messages[0],
            },
          })
        );
      } else {
        dispatch(
          stopSubmit("editProfile", {
            [lowerFirstCharakter(string[0])]: data.messages[0],
          })
        );
      }
      return Promise.reject(data.messages[0]);
    }
  };
};
export default profileReducer;
