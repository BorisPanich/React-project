import {ActionsTypes, PostType} from "./redux-store";
import {usersAPI} from "../components/api/API";
import {Dispatch} from "redux";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type PostsType = {
    id: string
    likes: number
    content: string | number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string | null
    contacts: userProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: PhotosType
}

export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type userProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    "github": string | null
    mainLink: string | null
}
export type PhotosType = { small: string, large: string }


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hallo, haw are you?', likes: 43},
        {id: 2, message: 'My first post', likes: 52},
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    }
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: "ADD_POST"} as const);
export const updateNewPostText = (newText: string) =>
    ({type: "UPDATE_NEW_POST_TEXT", newText: newText} as const);
export const setUsersProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const);

// Thunk

export const getUsersProfile = (userId: number) => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    })
};

export default profileReducer;


