import {authAPI} from "../components/api/API";
import {Dispatch} from "redux";

const SET_DATA_AUTH_STATE = 'SET_DATA_AUTH_STATE';

export type DataUserType = {
    id?: number | null
    login?: string | null
    email?: string | null
    isFetching?: boolean
    isAuth?: boolean
    logout?: () => void
}

let initialState = {
    dataUser: {} as DataUserType,
    isAuth: false
}

export type InitialStateType = typeof initialState;
type ActionsType = SetAuthUserDataActionType
type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_DATA_AUTH_STATE:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
                // dataUser: {...state.dataUser, ...action.data},
            }
        default:
            return state;
    }
}

export const setAuthUserData = (data: DataUserType, isAuth: boolean) => ({type: "SET_DATA_AUTH_STATE", data, isAuth} as const);

// Thunk

export const getAuthUserDataTh = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me().then(response => {
        // this.props.toggleIsFetching(false);
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data, true));
        }
    })
}

export const login = (email: string | null, password: string | null, rememberMe: boolean = false, captcha: string | null) =>
    (dispatch: Dispatch<ActionsType>) => {
        authAPI.login(email, password, rememberMe, captcha).then(response => {
            // this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data, true))
                // dispatch(setAuthUserData({email: null, id: null, login: null, isAuth: false, isFetching: false}, true))
            }
        })
    }
export const logout = () =>
    (dispatch: Dispatch<ActionsType>) => {
        authAPI.logout().then(response => {
            // this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData({email: null, id: null, login: null}, false))
                // dispatch(setAuthUserData({email: null, id: null, login: null, isAuth: false, isFetching: false}, false))
            }
        })
    }

export default authReducer;


