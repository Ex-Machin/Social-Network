import React from "react";
import { UserType } from "../../types/types";
import Paginator from "../Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType } from "../../redux/usersReducer";


type PropsType = {
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  onFilterChange: (filter: FilterType) => void
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (id: number) => void
  follow: (id: number) => void
};

const Users: React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  onFilterChange,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChange}/>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
          />
        );
      })}
    </div>
  );
};

export default Users;
