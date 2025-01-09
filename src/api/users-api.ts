import { GetItemsType, instance, APIResponseType } from "./api";
import { UserType } from "../types/types";

export const usersAPI = {
    getUsers(page = 1, pageSize = 5) {
        return instance
            .get<GetItemsType<UserType>>(`users?page=${page}&count=${pageSize}`)
            .then((response) => response.data);
    },
    follow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`).then((response) => response.data);
    },
    unfollow(id: number) {
        return instance.delete<APIResponseType>(`follow/${id}`).then((response) => response.data);
    },
};