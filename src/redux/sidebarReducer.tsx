import {ActionsTypes} from "./redux-store";

let initialState = {}

export type SdbReducerInitialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action: ActionsTypes): SdbReducerInitialStateType => {

    return state;
}

export default sidebarReducer;