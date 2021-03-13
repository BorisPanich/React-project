import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';

export type UsersLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: { small: string | null, large: string | null}
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
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 4,
    isFetching: true
}

export type UsersReducerInitialStateType = typeof initialState;

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
        case TOGGLE_ISFETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: "FOLLOW", userId} as const);
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users} as const);
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_ISFETCHING", isFetching} as const);

export default usersReducer;


