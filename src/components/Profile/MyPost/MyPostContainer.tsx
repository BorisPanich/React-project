import React from 'react';
import MyPost from "./MyPost";
import { RootReduxState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {addPost, PrfReducerInitialStateType, updateNewPostText} from "../../../redux/profileReducer";


type MapStateToPropsType = {
    profilePage: PrfReducerInitialStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (postText: string) => void
}
export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}


const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPost);


export default MyPostContainer;