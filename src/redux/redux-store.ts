import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {addMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "./usersReducer";


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
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageTextAC> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setUsersTotalCountAC>
    );

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type RootReduxState = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store;