import { getAuthUserData } from './auth-reducer';
// Редьюсер, отвечающий за глобальные функции приложения, например инициализацию.

const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS';

export type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALAZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export type initialazedSuccessActionType = {
  type: typeof INITIALAZED_SUCCESS;
};

export const initialazedSuccess = (): initialazedSuccessActionType => ({
  type: INITIALAZED_SUCCESS,
});

export const initialazeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initialazedSuccess());
  });
};

export default appReducer;
