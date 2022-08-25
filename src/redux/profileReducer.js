import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
    default:
      return state;
  }
};

export const addPost = (post) => ({
  type: ADD_POST,
  post,
});

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

export const getUser = (id) => {
  return (dispatch) => {
    usersAPI.getUser(id).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then((data) => {      
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if(data.result_code === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};



export default profileReducer;
