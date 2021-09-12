import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS'

type initialedSuccessACType = ReturnType<typeof initialedSuccessAC>

type ActionType = initialedSuccessACType


const initialState = {
	initialized: false
}

export type InitialUsersStateType = {
	initialized: boolean
}


export const appReducer = (state: InitialUsersStateType = initialState, action: ActionType): InitialUsersStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}

export const initialedSuccessAC = ( ) => ({type: INITIALIZED_SUCCESS})

export  const initializeAppTC = () => (dispatch: any) => {
	const promise = dispatch(getAuthUserData())

	Promise.all([promise]).then(() => {
		dispatch(initialedSuccessAC())
	})
}
