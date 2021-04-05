import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPost, setStatus, setUsersProfile, updateNewPostText} from "./profileReducer";
import dialogsReducer, {addMessageText, updateNewMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProcess, getUsers, followSuccess, unfollowSuccess
} from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


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
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof addMessageText> |
    ReturnType<typeof updateNewMessageText> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUsersProfile> |
    ReturnType<typeof toggleIsFollowingProcess> |
    ReturnType<typeof setStatus>
    // ReturnType<typeof getUsers>          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    );

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootReduxState = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;