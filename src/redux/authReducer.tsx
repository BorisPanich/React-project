import {authAPI} from "../components/api/API";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_DATA_AUTH_STATE = 'react_project/authReduceer/SET_DATA_AUTH_STATE';

export type DataUserType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching?: boolean
    isAuth: boolean
    logout: () => void
}

let initialState = {
    dataUser: {} as DataUserType,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;
type ActionsType = ReturnType<typeof setAuthUserData>

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_DATA_AUTH_STATE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({
        type: "react_project/authReduceer/SET_DATA_AUTH_STATE",
        payload: {isAuth}
    } as const);

// Thunk

export const getAuthUserDataTh = () => async (dispatch: Dispatch<ActionsType>) => {
    let response = await authAPI.me()
    // this.props.toggleIsFetching(false);
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true));
    } else {
    }
}

export const login = (email: string | null, password: string | null, rememberMe: boolean = false, captcha: string | null) =>
    async (dispatch: Dispatch<any>) => {          //!!!!!!!!!!!!!!!!! Type
        let response = await authAPI.login(email, password, rememberMe, captcha)
        // this.props.toggleIsFetching(false);
        if (response.resultCode === 0) {
            dispatch(getAuthUserDataTh())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Same error";
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
export const logout = () =>
    async (dispatch: Dispatch<ActionsType>) => {
        let response = await authAPI.logout()
        // this.props.toggleIsFetching(false);
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

export default authReducer;


