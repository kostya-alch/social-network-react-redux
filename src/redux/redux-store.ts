import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
const { createStore, combineReducers, applyMiddleware } = require('redux');

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  userPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export default store;
