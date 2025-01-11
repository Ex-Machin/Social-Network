import { FormAction, stopSubmit } from "redux-form";
import { profileAPI } from "../api/profile-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType } from "./app-reducer";
import { InferActionsTypes } from "./redux-store";

let initialState = {
  posts: [
    { id: 1, message: "Bye World", likeCount: "12" },
    { id: 2, message: "Abrakadabra", likeCount: "11" },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (state = initialState, action: ActionsType): any => {
  switch (action.type) {
    case "profile/ADD-POST":
      let newPost = {
        id: state.posts.length + 1,
        message: action.payload,
        likeCoint: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case "profile/SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case "profile/SET_STATUS": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "profile/DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    case "profile/SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addPost: (post: string) => ({type: "profile/ADD-POST", payload: post}),
  setUserProfile: (profile: ProfileType) => ({type: "profile/SET_USER_PROFILE", payload: profile}),
  setStatus: (status: string) => ({type: "profile/SET_STATUS", payload: status}),
  deletePost: (id: number) => ({type: "profile/DELETE_POST", payload: id}),
  savePhotoSuccess: (photos: PhotosType) => ({type: "profile/SAVE_PHOTO_SUCCESS", payload: photos}),
} 

function lowerFirstCharakter(string: string): string {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export const getUser = (id: number): ThunkType => {
  return async (dispatch) => {
    profileAPI.getUser(id).then((data) => {
      dispatch(actions.setUserProfile(data));
    });
  };
};

export const getStatus = (id: number): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.getStatus(id);

    dispatch(actions.setStatus(data));
  };
};

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    try {
      const data = await profileAPI.updateStatus(status);

      if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
      }
    } catch (error) {
      console.warn(error);
    }
  };
};

export const savePhoto = (file: File): ThunkType => {
  return async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(data.data.photos));
    }
  };
};

export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
      if (userId != null) {
        dispatch(getUser(userId));
      } else {
        throw new Error("usedId can't be null")
      }
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

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>