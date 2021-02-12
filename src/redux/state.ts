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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessageText: (newText: string) => void
    addMessageDlgText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

let store = {
    _state:  {
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
    _callSubscriber()  {
        console.log("renderTree called")
    },
    addPost() {
        const newPost = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    addMessageText(text: string) {
        let newMassage = {id: 4, message: text}
        this._state.dialogsPage.messages.push(newMassage);
        this._callSubscriber();
    },
    addMessageDlgText(messageText: string) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber();
    },
    subscribe (observer: () => void) {
        this._callSubscriber = observer
    }
}

export default store;