import {ActionsTypes} from "./redux-store";

const SET_DATA_AUTH_STATE = 'SET_DATA_AUTH_STATE';

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean | null
    // isFetching: boolean
}

let initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    // isFetching: false
}

export type AuthReducerInitialStateType = typeof initialState;
// export type ActionsTypes = ReturnType<typeof setAuthUserData>

const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_DATA_AUTH_STATE:
            debugger;
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export type setAuthUserDataActionType = {
    id: number
    email: string
    login: string
}

export const setAuthUserData = (data: setAuthUserDataActionType) => ({type: "SET_DATA_AUTH_STATE", data} as const);

export default authReducer;


