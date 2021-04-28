import { createSelector } from "reselect";
import { RootReduxState } from "./redux-store";


// Users

const GetUsers = (state: RootReduxState) => {
    return state.usersPage
}

// примитивный (простой) селектор
const getUsers = (state: RootReduxState) => {
    return GetUsers(state).users
}
// сложный (созданный с помощью библиотеки reselect) селектор, в который передается простой
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state: RootReduxState) => {
    return GetUsers(state).pageSize
}
export const getTotalUsersCount = (state: RootReduxState) => {
    return GetUsers(state).totalUsersCount
}
export const getCurrentPage = (state: RootReduxState) => {
    return GetUsers(state).currentPage
}
export const getIsFetching = (state: RootReduxState) => {
    return GetUsers(state).isFetching
}
export const getFollowingInProcess = (state: RootReduxState) => {
    return GetUsers(state).followingInProcess
}
export const getIsAuth = (state: RootReduxState) => {
    return state.auth.isAuth
}

//Headers

const GetHeaders = (state: RootReduxState) => {
    return state.auth
}

export const getLogin = (state: RootReduxState) => {
    return state.auth.dataUser.login
}

//Profile

const GetProfile = (state: RootReduxState) => {
    return state.profilePage
}

export const getProfile= (state: RootReduxState) => {
    return GetProfile(state).profile
}
export const getStatusSelector= (state: RootReduxState) => {
    return GetProfile(state).status
}
export const getMyUserId= (state: RootReduxState) => {
    return state.auth.dataUser.id
}

