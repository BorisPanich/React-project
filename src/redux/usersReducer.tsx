import {ActionsTypes} from "./redux-store";
import {usersAPI} from "../components/api/API";
import {Dispatch} from "redux";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

export type UsersLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: { small: string | null, large: string | null }
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProcess: Array<number>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProcess: []
}

export type UsersReducerInitialStateType = typeof initialState;

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROCESS: {
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId} as const);
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users} as const);
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const);
export const toggleIsFollowingProcess = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE_IS_FOLLOWING_PROCESS",
    isFetching,
    userId
} as const);

// Thunk

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollow = async (dispatch: Dispatch<ActionsTypes>,
                              userId: number,
                              apiMethod: Function,
                              actionCreator: Function) => {
    dispatch(toggleIsFollowingProcess(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProcess(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        let apiMethod = await usersAPI.follow.bind(userId);
        let actionCreator = followSuccess
        followUnfollow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        followUnfollow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess)
    }
}

export default usersReducer;


