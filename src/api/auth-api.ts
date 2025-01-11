import { instance, APIResponseType, ResultCodeEnum, ResultCodeForCaptcha } from "./api";

type MeResponseDataType = {
    id: number
    email: string
    login: string | null
};

type LoginResponseDataType = {
    userId: number
};

export const authAPI = {
    getCurrentUser() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then((response) => {
            return response.data;
        });
    },
    login(email: string, password: string, rememberMe = false, captcha: string) {
        return instance
            .post<APIResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptcha>>(`auth/login`, { email, password, rememberMe, captcha })
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