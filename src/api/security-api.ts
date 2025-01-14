import { instance } from "./api";

type getCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl: () => instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`).then((res) => res.data)
};