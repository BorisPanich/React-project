import {ActionsTypes, PostType} from "./redux-store";
import {profileAPI} from "../components/api/API";
import {Dispatch} from "redux";
import {v1} from "uuid";

const ADD_POST = 'ADD_POST';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


export type PostsType = {
    id: string
    likes: number
    content: string | number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText?: string        //!!!!!!!!!!!!
    profile: ProfileType
    status: string
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
        {id: v1(), message: 'Hallo, haw are you?', likes: 43},
        {id: v1(), message: 'My first post', likes: 52}
    ] as Array<PostType>,
    // newPostText: '',
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
    },
    status: ""
}

export type PrfReducerInitialStateType = typeof initialState;

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: v1(), message: action.value.newPostText, likes: 44}, ...state.posts],
                newPostText: ''
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (value: { newPostText: string }) => ({type: "ADD_POST", value} as const);
export const setUsersProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const);
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const);
export const updateUserStatus = (status: string) => ({type: "UPDATE_USER_STATUS", status} as const);

// Thunk

export const getUsersProfile = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(response));
};
export const getStatus = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response));
};
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(updateUserStatus(status));
    }
};

export default profileReducer;


