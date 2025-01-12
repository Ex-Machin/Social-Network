import { actions, follow, unfollow } from "./usersReducer"

import { APIResponseType, ResultCodeEnum } from "../api/api";
import { usersAPI } from "../api/users-api";

jest.mock("../api/users-api");

let dispatchMock: jest.Func
let getStateMock: jest.Func

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result: APIResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}

beforeEach(() => {
    dispatchMock = jest.fn()
    getStateMock = jest.fn()
})

test("success follow thunk ", async () => {
    usersAPIMock.follow.mockResolvedValue(result);

    const thunk = follow(1);

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test("unsuccess follow thunk ", async () => {
    usersAPIMock.unfollow.mockResolvedValue(result);

    const thunk = unfollow(1);

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})