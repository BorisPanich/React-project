import {ActionsTypes, PostType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [] //as Array<PostType>
}

export type UsersReducerInitialStateType = typeof initialState;

const usersReducer = (state: UsersReducerInitialStateType = initialState, action: ActionsTypes): UsersReducerInitialStateType => {
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const);
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const);
export const setUsersAC = (users) => ({type: "SET_USERS", users} as const);

export default usersReducer;


