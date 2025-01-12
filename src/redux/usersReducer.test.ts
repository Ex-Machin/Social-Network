import usersReducer, { actions, InitialStateType } from "./usersReducer";



let state: InitialStateType

beforeEach(() => {
    state = {
        users: [
            { id: 0, name: "somebody 0", followed: false, photos: { small: null, large: null }, status: "test 1" },
            { id: 1, name: "somebody 1", followed: false, photos: { small: null, large: null }, status: "test 2" },
            { id: 2, name: "somebody 2", followed: true, photos: { small: null, large: null }, status: "test 3" },
            { id: 3, name: "somebody 3", followed: true, photos: { small: null, large: null }, status: "test 4" }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    };
})


test("follow success", () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
})