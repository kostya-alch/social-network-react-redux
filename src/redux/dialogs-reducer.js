const SEND_MESSAGE = 'SEND_MESSAGE';


// Редьюсер диалогов
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export let sendMessegeCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export let updateMessageBodyCreator = (body) => {
  return {
    body: body,
  };
};

export default dialogsReducer;
