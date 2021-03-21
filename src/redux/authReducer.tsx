import {ActionsTypes} from "./redux-store";

const SET_DATA_AUTH_STATE = 'SET_DATA_AUTH_STATE';

export type DataUserType = {
    id: number | null
    login: string | null
    email: string | null
    // isFetching: boolean
}
type InitialStateType = {
    dataUser: DataUserType
    isAuth: boolean
}

let initialState: InitialStateType  = {
    dataUser: {} as DataUserType,
    isAuth: false,
}

// export type InitialStateType = typeof initialState;
type ActionsType = SetAuthUserDataActionType
type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_DATA_AUTH_STATE:
            return {
                ...state,
                dataUser: {...state.dataUser, ...action.data},
                isAuth: true
            }
        default:
            return state;
    }}

// export type setAuthUserDataActionType = {
//     id: number
//     email: string
//     login: string
// }

export const setAuthUserData = (data: DataUserType) => ({type: "SET_DATA_AUTH_STATE", data} as const);

export default authReducer;


