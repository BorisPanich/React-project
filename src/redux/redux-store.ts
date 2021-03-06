import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, deletePost, profileReducer, savePhotoSuccess, setStatus, setUsersProfile} from "./profileReducer";
import dialogsReducer, {addMessageTextAC} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProcess, followSuccess, unfollowSuccess
} from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";


export type PostType = {
    id?: number
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostElement?: string
    addPostCallback?: (postText: string) => void
    newPostText: string
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id?: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    // usersPage: UserType
}

export type ActionsTypes = (
    ReturnType<typeof addPostAC> |
    // ReturnType<typeof updateNewPostText> |
    ReturnType<typeof addMessageTextAC> |
    // ReturnType<typeof updateNewMessageText> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUsersProfile> |
    ReturnType<typeof toggleIsFollowingProcess> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePost> |
    // ReturnType<typeof updateUserStatus> |
    ReturnType<typeof savePhotoSuccess>
    );

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type RootReduxState = ReturnType<typeof reducers>
// type RootReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType
// export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootReduxState, unknown, A>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;