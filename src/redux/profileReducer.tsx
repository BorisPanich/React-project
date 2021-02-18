import {ActionsTypes, ProfilePageType, RootStateType, StoreType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const);
export const updateNewPostTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const);

export default profileReducer;


