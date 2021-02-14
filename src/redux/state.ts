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
    outmessage?: string
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
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessageText: (newText: string) => void
    // addMessageDlgText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

// type AddPostActionType = ReturnType<typeof addPostAC>
// type AddPostActionType = {
//     type: 'ADD-POST'
// }
// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
// type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
// type AddMessageTextActionType = ReturnType<typeof addMessageTextAC>
// type AddMessageTextActionType = {
//     type: 'ADD-MESSAGE-TEXT'
//     text: string
// }
// type AddMessageDLGTextActionType = {
//     type: 'ADD-MESSAGE-DLG-TEXT'
//     messageText: string
// }

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageTextAC> |
    ReturnType<typeof updateNewMessageTextAC>;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hallo, haw are you?', likes: 43},
                {id: 2, message: 'My first post', likes: 52},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Boris'},
                {id: 2, name: 'Olia'},
                {id: 3, name: 'Gleb'},
                {id: 4, name: 'Pasha'},
                {id: 5, name: 'Ania'},
                {id: 6, name: 'Eva'},
                {id: 7, name: 'Nazar'}
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Haw are you?'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("renderTree called")
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsTypes) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === ADD_MESSAGE_TEXT) {
            let newMassage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMassage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMText;
            this._callSubscriber();
        }
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const);
export const updateNewPostTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const);
export const addMessageTextAC = (text: string) =>
    ({type: "ADD-MESSAGE-TEXT", text: text} as const);
export const updateNewMessageTextAC = (newMText: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMText: newMText} as const)

export default store;