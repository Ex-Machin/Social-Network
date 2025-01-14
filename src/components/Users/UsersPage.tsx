import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../../redux/redux-store";
import { getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchinSelector, getPageSizeSelector, getTotalUsersCountSelector, getUsersFilter, getUsersSelector } from "../../redux/user-selector";
import { FilterType, getUsers, follow, unfollow, actions } from "../../redux/usersReducer";
import Paginator from "../Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import Preloader from "../Preloader/Preloader";
import { useLocation, useNavigate } from "react-router-dom";

type PropsType = {
  pageTitle: string
}

type QueryParamsType = {
  page?: number
  term?: string
  friend?: string
}

const UsersPage: React.FC<PropsType> = ({ pageTitle }) => {
  const users = useSelector(getUsersSelector)
  const totalUsersCount = useSelector(getTotalUsersCountSelector)
  const currentPage = useSelector(getCurrentPageSelector)
  const pageSize = useSelector(getPageSizeSelector)
  const followingInProgress = useSelector(getFollowingInProgressSelector)
  const filter = useSelector(getUsersFilter)
  const isFetching = useSelector(getIsFetchinSelector)

  const dispatch: ThunkDispatch<AppStateType, unknown, AnyAction> = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {    
    const search = location.search;
    const params = new URLSearchParams(search)
    
    let actualPage = currentPage
    let actualFilter = filter

    if (!!params.get("page")) actualPage = Number(params.get("page"))
    if (!!params.get("term")) actualFilter = { ...actualFilter, term: params.get("term") || ""}
    if (!!params.get("friend")) actualFilter = { ...actualFilter, friend: params.get("friend") || "" }
    
    dispatch(getUsers(actualPage, pageSize, actualFilter))
  }, [])
  
  useEffect(() => {
    if (isFetching) {
      const query: QueryParamsType = {}
      if (!!filter.term) query.term = filter.term
      if (filter.friend !== "null") query.friend = filter.friend
      if (currentPage !== 1) query.page = currentPage

      let queryString = ""

      Object.entries(query).map((key, i) => {
        queryString += key.join("=")
        if (i !== Object.entries(query).length - 1) {
          queryString += '&'
        }
      })      

      navigate(`/users?${queryString}`)
    } 
  }, [filter, currentPage])
  
  useEffect(() => () => {
    // clean filters
    dispatch(actions.setFilter({term: "", friend: ""}))
    dispatch(actions.setCurrentPage(1))
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter))
  }

  const handleUnfollow = (id: number) => {
    dispatch(unfollow(id))
  }
  const handleFollow = (id: number) => {
    dispatch(follow(id))
  }


  return (
    <>
      <h2>{pageTitle}</h2>
      {isFetching ? <Preloader /> :
        <div>
          <UsersSearchForm filter={filter} onFilterChanged={onFilterChanged} />
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
                unfollow={handleUnfollow}
                follow={handleFollow}
              />
            );
          })}
        </div>
      }
    </>
  );
};

export default UsersPage