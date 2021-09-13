import * as axios from 'axios';

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
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`, {
      withCredentials: true,
    });
  },
};
