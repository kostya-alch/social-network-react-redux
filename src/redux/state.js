import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sitebarReducer from './sidebar-reducer';
// Реализация своего стора для понимания работы. Как подсказка при обучении.
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: 'Hi!, i am friend!', likesCount: 15 },
        { id: 1, message: 'Bye!, Friends!', likesCount: 10 },
        { id: 2, message: 'REACT', likesCount: 222 },
      ],
      newPostText: 'Enter New Post',
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
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sitebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
