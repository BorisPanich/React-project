import {renderTree} from "../render";

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

export let state: RootStateType = {
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
}

export const addPost = () => {
    const newPost = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likes: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
}

export const addMessageText = (text: string) => {
    let newMassage = {id: 4, message: text }
    state.dialogsPage.messages.push(newMassage);
    renderTree(state);
}

export const addMessageDlgText = (messageText: string) => {
    state.dialogsPage.newMessageText = messageText;
    renderTree(state);
}

export default state;