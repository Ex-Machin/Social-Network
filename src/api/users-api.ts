import { GetItemsType, instance, APIResponseType } from "./api";
import { UserType } from "../types/types";
import { FilterType } from "../redux/usersReducer";
import { addQuery } from "../utils/objects-helper";

export const usersAPI = {
    getUsers(page = 1, pageSize = 5, filter: FilterType) {
        return instance
            .get<GetItemsType<UserType>>(`users?page=${page}&count=${pageSize}${addQuery('&', 'term', filter.term)}${addQuery('&', 'friend', filter.friend)}`)
            .then((response) => response.data);
    },
    follow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`).then((response) => response.data);
    },
    unfollow(id: number) {
        return instance.delete<APIResponseType>(`follow/${id}`).then((response) => response.data);
    },
};