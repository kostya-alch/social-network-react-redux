import { authAPI, securityAPI } from '../api/api';

// редьюсер для авторизации
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | false;
  captchaUrl: string | null;
};
let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

type setAuthUserDataActionTypeProp = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  data: setAuthUserDataActionTypeProp;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export type getCaptchaURLSuccessActiontype = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  data: { captchaUrl: string };
};
export const getCaptchaURLSuccess = (
  captchaUrl: string
): getCaptchaURLSuccessActiontype => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  data: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    setStatus: Function,
    captcha: undefined | null
  ) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      setStatus(response.data.messages);
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaURLSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export default authReducer;
