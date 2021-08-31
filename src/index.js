import './App.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
