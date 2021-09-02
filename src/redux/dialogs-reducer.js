const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export let sendMessegeCreator = () => ({ type: SEND_MESSAGE });

export let updateMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
