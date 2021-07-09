import React from 'react';
import MyPost from "./MyPost";
import { RootReduxState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {addPostAC, PrfReducerInitialStateType} from "../../../redux/profileReducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    profilePage: PrfReducerInitialStateType
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;