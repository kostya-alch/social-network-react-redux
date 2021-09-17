import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = ' SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
// Редьюсер, отвечающий за логику профиля.
let initialState = {
  posts: [
    { id: 0, message: 'Hi!, i am friend!', likesCount: 15 },
    { id: 1, message: 'Bye!, Friends!', likesCount: 10 },
    { id: 2, message: 'REACT', likesCount: 222 },
  ],
  profile: null,
  status: '',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 3,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: '' };

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};

export let addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export let setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export let setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export let setPhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export let getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export let getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export let updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export let savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data.data.photos));
  }
};
export default profileReducer;
