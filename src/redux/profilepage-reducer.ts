import {v1} from 'uuid';
import { profileAPI} from '../api/api';
import {Dispatch} from 'redux';
import {FormAction, stopSubmit} from 'redux-form';
import {BaseThunkType} from './redux-store';
import {PhotosType, ProfileType} from '../types/types';

const ADD_NEW_POST = 'PROFILE/ADD_NEW_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const DELETE_POST = 'PROFILE/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE_PHOTO_SUCCESS'

export type MyPostsType = {
	id: string
	message: string
	likeCount: number
	image: string
}



const initialState = {
	postsData: [
		{
			id: v1(),
			message: 'Do you know who killed Kennedy?',
			likeCount: 3,
			image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'
		},
		{
			id: v1(),
			message: 'Do you have plans to weekend?',
			likeCount: 10,
			image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'
		},
	],
	profile: null as ProfileType | null,
	status: '',
}
export type InitialStateType = typeof initialState

export const profilePageReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ADD_NEW_POST:
			const newPost: MyPostsType = {
				id: v1(),
				message: action.newPostContent,
				likeCount: 0,
				image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
			}
			return {
				...state,
				postsData: [...state.postsData, newPost],
			}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter(post => post.id !== action.postId)
			}
		}
		case SAVE_PHOTO_SUCCESS:
			return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
		default:
			return state
	}
}

//ACTIONS TYPE
type AddNewPostActionType = ReturnType<typeof addNewPostActionCreator>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setStatusActionType = ReturnType<typeof setStatus>
type deletePostActionType = ReturnType<typeof deletePostAC>
type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>

type ActionType =
	AddNewPostActionType
	| setUserProfileActionType
	| setStatusActionType
	| deletePostActionType
	| savePhotoSuccessActionType


//ACTIONS
export const addNewPostActionCreator = (newPostContent: string) => {
	return {
		type: ADD_NEW_POST,
		newPostContent
	} as const
}

export const deletePostAC = (postId: string) => {
	return {
		type: DELETE_POST,
		postId
	} as const
}

export const setUserProfile = (profile: any) => {
	return {
		type: SET_USER_PROFILE,
		profile: profile
	} as const
}

export const setStatus = (status: string) => {
	return {
		type: SET_STATUS,
		status: status
	} as const
}

export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

//THUNKS
export const getUserProfile = (userID: number) => async (dispatch: Dispatch) => {
	const data = await profileAPI.getUserProfile(userID)
	dispatch(setUserProfile(data));
}

export const getStatus = (userID: number) => async (dispatch: any) => {
	const response = await profileAPI.getStatus(userID)
	dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	} else {
		console.log('resultCode < 0')
	}
}


export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
	const response = await profileAPI.savePhoto(file)

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}



export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
	const userId = getState().auth.userID

	const data = await profileAPI.saveProfile(profile)

	if (data.resultCode === 0) {
		if (userId != null) {
			dispatch(getUserProfile(userId))
		} else {
			throw new Error("userId can't be null")
		}
	} else {
		dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }))
		return Promise.reject(data.messages[0])
	}
}

type ThunkType = BaseThunkType<ActionType | FormAction>


