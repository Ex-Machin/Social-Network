import React from "react";
import { UserType } from "../../types/types";
import Paginator from "../Paginator/Paginator";
import User from "./User";

type PropsType = {
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow:  (id: number) => void
  follow: (id: number) => void
};

const Users: React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
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
