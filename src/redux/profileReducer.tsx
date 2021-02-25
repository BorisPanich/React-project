import {ActionsTypes, PostType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hallo, haw are you?', likes: 43},
        {id: 2, message: 'My first post', likes: 52},
    ] as Array<PostType>,
    newPostText: ''
}

export type PrfReducerInitialStateType = typeof initialState;

const profileReducer = (state: PrfReducerInitialStateType = initialState, action: ActionsTypes): PrfReducerInitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0,
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const);
export const updateNewPostTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const);

export default profileReducer;


