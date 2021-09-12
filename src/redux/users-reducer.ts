import {userAPI} from '../api/api';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/objects-helper';

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT'
const TOGGLE_LOADER = 'USERS/TOGGLE_LOADER'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS'


const initialState: initialUsersStateType = {
	users: [],
	pageSize: 6,
	totalUsersCount: 0,
	currentPage: 1,
	inProgress: false,
	followingInProgress: []
}
export type initialUsersStateType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	inProgress: boolean
	followingInProgress: Array<number>
}
export type PhotoType = {
	small: string | null
	large: string | null
}
export type userType = {
	name: string
	id: number
	uniqueUrlName: null
	photos: PhotoType
	status: null
	followed: boolean
}


export const usersReducer = (state: initialUsersStateType = initialState, action: ActionType): initialUsersStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				// users: state.users.map((user) => {
				// 	if (user.id === action.userID) {
				// 		return {...user, followed: true}
				// 	}
				// 	return user
				// })
				users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})

				// users: state.users.map((user) => {
				// 	if (user.id === action.userID) {
				// 		return {...user, followed: false}
				// 	}
				// 	return user
				// })
			}
		case SET_USERS: {
			return {
				...state,
				users: [...action.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_LOADER: {
			return {...state, inProgress: action.loader}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,

				followingInProgress:
					action.following
						? [...state.followingInProgress, action.userID]
						: state.followingInProgress.filter(id => id !== action.userID)

			}
		}
		default:
			return state
	}
}

//ACTIONS
export const setUsers = (users: Array<userType>) => ({type: SET_USERS, users} as const)
export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount
} as const)
export const setToggle = (loader: boolean) => ({type: TOGGLE_LOADER, loader} as const)
export const setToggleFollowingProgress = (following: boolean, userID: number) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	following,
	userID
} as const)

//Thunk
export const getUsersThunkCreator = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
	dispatch(setToggle(true))
	dispatch(setCurrentPage(page))
	const data = await userAPI.getUsers(page, pageSize)
	dispatch(setToggle(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}


const followUnfollowFlow = async (dispatch: Dispatch, userID: number, apiMethod: any, actionCreator: any) => {
	dispatch(setToggleFollowingProgress(true, userID))
	const data = await apiMethod(userID)
	if (data.resultCode === 0) {
		dispatch(actionCreator(userID));
	}
	dispatch(setToggleFollowingProgress(false, userID))
}

export const followThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
	const apiMethod = userAPI.following.bind(userID)
	const actionCreator = follow

	followUnfollowFlow(dispatch, userID, apiMethod, actionCreator)

}

export const unFollowThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
	const apiMethod = userAPI.unFollowing.bind(userID)
	const actionCreator = unFollow

	followUnfollowFlow(dispatch, userID, apiMethod, actionCreator)
}

type followACActionType = ReturnType<typeof follow>
type unFollowACActionType = ReturnType<typeof unFollow>
type setUsersACActionType = ReturnType<typeof setUsers>
type currentPageActionType = ReturnType<typeof setCurrentPage>
type totalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type toggleLoaderActionType = ReturnType<typeof setToggle>
type toggleFollowingProgressActionType = ReturnType<typeof setToggleFollowingProgress>


type ActionType =
	followACActionType
	| unFollowACActionType
	| setUsersACActionType
	| currentPageActionType
	| totalUsersCountActionType
	| toggleLoaderActionType
	| toggleFollowingProgressActionType