import { RootReduxState } from "./redux-store";

export const getSelectorUsers = (state: RootReduxState) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootReduxState) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootReduxState) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootReduxState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootReduxState) => {
    return state.usersPage.isFetching
}
export const getFollowingInProcess = (state: RootReduxState) => {
    return state.usersPage.followingInProcess
}
export const getIsAuth = (state: RootReduxState) => {
    return state.auth.isAuth
}