import {ActionsTypes, BaseThunkType, InferActionsTypes, PostType} from "./redux-store";
import {profileAPI} from "../components/api/API";
import {Dispatch} from "redux";
// import {v1} from "uuid";
import {FormAction, stopSubmit} from "redux-form";
import actions from "redux-form/lib/actions";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export type PostsType = {
    id: number
    likes: number
    content: string | number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText?: string
    profile: ProfileType | null
    status: string
}
export type ProfileType = {
    aboutMe?: string | undefined
    contacts?: ContactsType | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?: string | undefined
    fullName?: string | undefined
    userId?: number | undefined
    photos: PhotosType
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hallo, haw are you?', likes: 43},
        {id: 2, message: 'My first post', likes: 52}
    ] as Array<PostType>,
    profile: null,
    status: ''
}

export type PrfReducerInitialStateType = typeof initialState;

export const profileReducer = (state: PrfReducerInitialStateType = initialState,
                               action: ActionsTypes): PrfReducerInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3, message: action.newPostText, likes: 44
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPostAC = ( newPostText: string) => ({type: "ADD_POST", newPostText} as const);
export const setUsersProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const);
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const);
export const deletePost = (postId: number) => ({type: "DELETE_POST", postId} as const);
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const);

// Thunk

export const getUsersProfile = (userId: number): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file: File): ThunkType => async (dispatch: Dispatch<ActionsTypes>) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.dataUser
    const data = await profileAPI.saveProfile(profile)

    if (data.data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUsersProfile(+userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.data.messages[0] }))
        return Promise.reject(data.data.messages[0])
    }
};


type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

