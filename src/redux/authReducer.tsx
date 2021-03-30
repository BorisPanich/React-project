import {authAPI} from "../components/api/API";
import {Dispatch} from "redux";

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

export const setAuthUserData = (data: DataUserType) => ({type: "SET_DATA_AUTH_STATE", data} as const);
// Thunk

export const getAuthUserDataTh = () => (dispatch: Dispatch<ActionsType>) => {

        authAPI.me().then(response => {
            // this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                // let {id, login, email} = response.data.data
                dispatch(setAuthUserData(response.data.data));
            }
        })
    }

export default authReducer;


