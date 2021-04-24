import {authAPI} from "../components/api/API";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_DATA_AUTH_STATE = 'SET_DATA_AUTH_STATE';

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
    isAuth: false
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
        type: "SET_DATA_AUTH_STATE",
        payload: {isAuth}
    } as const);

// Thunk

export const getAuthUserDataTh = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me().then(response => {
        // this.props.toggleIsFetching(false);
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true));
        } else {

        }
    })
}

export const login = (email: string | null, password: string | null, rememberMe: boolean = false, captcha: string | null) =>
    (dispatch: Dispatch<any>) => {          //!!!!!!!!!!!!!!!!! Type
        authAPI.login(email, password, rememberMe, captcha).then(response => {
            // this.props.toggleIsFetching(false);
            if (response.resultCode === 0) {
                dispatch(getAuthUserDataTh())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Same error";
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
export const logout = () =>
    (dispatch: Dispatch<ActionsType>) => {
        authAPI.logout().then(response => {
            // this.props.toggleIsFetching(false);
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }

export default authReducer;


