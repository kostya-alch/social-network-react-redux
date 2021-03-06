import * as axios from 'axios';
import { getAuthUserData } from '../redux/auth-reducer';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '733add68-4608-4009-93dd-bbd690aeebcb',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(u) {
    return instance.post(`follow/${u}`);
  },
  unFollow(u) {
    return instance.delete(`follow/${u}`);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status,
    });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(profile) {
    return instance.put('profile', profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`, {
      withCredentials: true,
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const LoginAPI =
  (email, password, rememberMe, setSubmitting, setFieldError, setStatus) =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        setStatus(response.data.messages);
        //response.data.messages  тут лежит строка "Incorrect anti-bot symbols" либо  'Incorrect Email or Password'
      }
    });
  };

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};
