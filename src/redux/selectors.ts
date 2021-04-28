import { createSelector } from "reselect";
import { RootReduxState } from "./redux-store";


// Users

const Get = (state: RootReduxState) => {
    return state.usersPage
}

// примитивный (простой) селектор
const getUsers = (state: RootReduxState) => {
    return Get(state).users
}
// сложный (созданный с помощью библиотеки reselect) селектор, в который передается простой
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state: RootReduxState) => {
    return Get(state).pageSize
}
export const getTotalUsersCount = (state: RootReduxState) => {
    return Get(state).totalUsersCount
}
export const getCurrentPage = (state: RootReduxState) => {
    return Get(state).currentPage
}
export const getIsFetching = (state: RootReduxState) => {
    return Get(state).isFetching
}
export const getFollowingInProcess = (state: RootReduxState) => {
    return Get(state).followingInProcess
}
export const getIsAuth = (state: RootReduxState) => {
    return state.auth.isAuth
}