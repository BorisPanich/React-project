import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';

export const requestUsers = (state: AppStateType) => {
	return state.usersPage.users
}

export const requestUsersSelector = createSelector(requestUsers, (users) => {
	return users.filter(user => true)
})

export const getPageSize = (state: AppStateType) => {
	return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
	return state.usersPage.totalUsersCount
}


export const getCurrentPage = (state: AppStateType) => {
	return state.usersPage.currentPage
}

export const getInProgress = (state: AppStateType) => {
	return state.usersPage.inProgress
}

export const getFollowingInProgress = (state: AppStateType) => {
	return state.usersPage.followingInProgress
}