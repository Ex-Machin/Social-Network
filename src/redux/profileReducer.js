import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Bye World", likeCount: "12" },
    { id: 2, message: "Abrakadabra", likeCount: "11" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
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

export const addPost = (post) => ({
  type: ADD_POST,
  post,
});

function lowerFirstCharakter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUser = (id) => {
  return (dispatch) => {
    usersAPI.getUser(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (id) => {
  return async (dispatch) => {
    const data = await profileAPI.getStatus(id);

    dispatch(setStatus(data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    const data = profileAPI.updateStatus(status);
    if (data.result_code === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    const data = profileAPI.savePhoto(file);
    if (data.result_code === 0) {
      dispatch(savePhotoSuccess(data.photos));
    }
  };
};
export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
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
