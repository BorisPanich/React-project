import {getAuthUserDataTh} from "./authReducer";
import {Dispatch} from "redux";

const INITIALIZED_APP = 'INITIALIZED_APP';

type initialStateType = {
    initializedSuccess: boolean
}
let initialState = {
    initializedSuccess: false
}

const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_APP:
            return {
                ...state,
                initializedSuccess: true
            }
        default:
            return state;
    }
}

export type ActionsType = ReturnType<typeof initializedApp>
export let initializedApp = () => ({type: INITIALIZED_APP} as const)

// Thunk

export const initializedAppTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserDataTh())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedApp())
        })
}

export default appReducer;


