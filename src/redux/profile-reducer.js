const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 0, message: 'Hi!, i am friend!', likesCount: 15 },
    { id: 1, message: 'Bye!, Friends!', likesCount: 10 },
    { id: 2, message: 'REACT', likesCount: 222 },
  ],
  newPostText: 'Enter New Post',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 3,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: '' };

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, posts: [...state.posts], newPostText: action.newText };
    }
    default:
      return state;
  }
};

export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
