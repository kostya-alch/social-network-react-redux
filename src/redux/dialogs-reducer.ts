const SEND_MESSAGE = 'SEND_MESSAGE';

// Редьюсер диалогов
type DialogType = {
  id: number;
  name: string;
};

type MessagesType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: 'Костя' },
    { id: 2, name: 'Миша' },
    { id: 3, name: 'Даня' },
    { id: 4, name: 'Cвета' },
    { id: 5, name: 'Настя' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi man!' },
    { id: 2, message: 'How old are you!' },
    { id: 3, message: 'Hi man!' },
    { id: 4, message: 'Hi man!' },
  ] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState;
const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

type sendMessegeCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};
export let sendMessegeCreator = (
  newMessageBody: string
): sendMessegeCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export let updateMessageBodyCreator = (body: string) => {
  return {
    body: body,
  };
};

export default dialogsReducer;
