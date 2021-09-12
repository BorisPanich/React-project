import {authAPI, securityAPI} from '../api/api';
import {FormAction, stopSubmit} from 'redux-form';
import {Dispatch} from 'redux';
import {BaseThunkType} from './redux-store';

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS'

// const initialState = {
// 	userID: null,
// 	login: null,
// 	email: null,
// 	isFetching: false,
// 	isAuth: false,
// 	captchaUrl: null as string | null
// }

// export type InitialUsersStateType = {
// 	userID: null | number
// 	login: null | string
// 	email: null | string
// 	isFetching: boolean
// 	isAuth: boolean
// 	captchaUrl: string
// }
const initialState = {
	userID: null as (number | null),
	email: null as string | null,
	login: null as string | null,
	isFetching: false,
	isAuth: false,
	captchaUrl: null as string | null // if null, then captcha is not required
};

export type InitialUsersStateType = typeof initialState;


export const authReducer = (state = initialState, action: ActionType): InitialUsersStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		case GET_CAPTCHA_URL_SUCCESS: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state
	}
}

type setUserDataACType = ReturnType<typeof setAuthUserDataAC>
type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

type ActionType =
	setUserDataACType  | getCaptchaUrlSuccessType

export const setAuthUserDataAC = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
	type: SET_USER_DATA,
	payload: {
		userID, email, login, isAuth
	}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
	type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
} as const)

export const getAuthUserData = (): ThunkType => async (dispatch: Dispatch) => {
	const data = await authAPI.getAuthMe()
	if (data.resultCode === 0) {
		const {id, email, login} = data.data;
		console.log(data.data)
		dispatch(setAuthUserDataAC(id, email, login, true));
	}
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async(dispatch) => {
	const data = await authAPI.login(email, password, rememberMe, captcha)

	if (data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (data.resultCode === 1) {
			dispatch(getCaptchaUrl())
		}
		const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		const action = stopSubmit('login', {_error: message});
		dispatch(action)
	}
}

export const logout = (): ThunkType => async (dispatch: Dispatch) => {
	const data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setAuthUserDataAC(null, null, null, false));
	}
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: Dispatch) => {
	const data = await securityAPI.getCaptchaUrl()
	const captchaUrl = data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

type ThunkType = BaseThunkType<ActionType | FormAction>