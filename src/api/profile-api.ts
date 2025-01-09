import { instance, APIResponseType } from "./api";
import { PhotosType, ProfileType } from "../types/types";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getUser: (id: number) => instance.get<ProfileType>(`profile/${id}`).then((res) => res.data),
    getStatus: (id: number) => instance.get<string>(`profile/status/${id}`).then((res) => res.data),
    updateStatus: (status: string) => instance.put<APIResponseType>("profile/status", { status }).then((res) => res.data),
    savePhoto: (photo: File) => {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put<APIResponseType<SavePhotoResponseDataType>>("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => res.data);
    },
    saveProfile: (profile: ProfileType) => instance.put<APIResponseType>("profile", profile).then((res) => res.data)
};
