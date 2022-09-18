import axios, { AxiosResponse } from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5d8a7eff-a740-483e-8ca3-78892103be5c",
  },
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 5) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getUser(id: number) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getUser(id);
  },
  follow(id: number) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getUser(id: number) {
    return instance.get(`profile/${id}`).then((response) => {
      return response.data;
    });
  },
  getStatus(id: number) {
    return instance.get(`profile/status/${id}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status: string) {
    return instance.put("profile/status", { status }).then((response) => {
      return response.data;
    });
  },
  savePhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  saveProfile(profile: ProfileType) {
    return instance.put("profile", profile).then((response) => {
      return response.data;
    });
  },
};

type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodeEnum;
  messages: string[];
};

type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCodeEnum | ResultCodeForCaptcha
  messages: string[];
};


export enum ResultCodeEnum {
  Succes = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

export const authAPI = {
  getCurrentUser() {
    return instance.get<MeResponseType>(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email: string, password: string, rememberMe = false, captcha: string) {
    return instance
      .post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then((response) => {
      return response.data;
    });
  },
};
