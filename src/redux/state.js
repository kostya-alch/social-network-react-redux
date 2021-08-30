const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: 'Hi!, i am friend!', likesCount: 15 },
        { id: 1, message: 'Bye!, Friends!', likesCount: 10 },
        { id: 2, message: 'REACT', likesCount: 222 },
      ],
      newPostText: 'hehe1',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Костя' },
        { id: 2, name: 'Миша' },
        { id: 3, name: 'Даня' },
        { id: 4, name: 'Cвета' },
        { id: 5, name: 'Настя' },
      ],
      messages: [
        { id: 1, message: 'Hi man!' },
        { id: 2, message: 'How old are you!' },
        { id: 3, message: 'Hi man!' },
        { id: 4, message: 'Hi man!' },
      ],
      newMessageBody: '',
    },
    getState() {
      return this._state;
    },
  },

  _callSubscriber() {
    console.log('stateeee');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 3,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export let sendMessegeCreator = () => ({ type: SEND_MESSAGE });

export let updateMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default store;
