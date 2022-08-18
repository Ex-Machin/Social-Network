import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5d8a7eff-a740-483e-8ca3-78892103be5c",
  },
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getCurrentUser: () => {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getUser: (id) => {
    return instance.get(`profile/${id}`).then((response) => {
      return response.data;
    });
  },
  follow: (id) => {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollow: (id) => {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  }
};
