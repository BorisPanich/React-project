import React from 'react';
import MyPost from "./MyPost";
import {ActionsTypes, RootReduxState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {addPost, PrfReducerInitialStateType, updateNewPostText} from "../../../redux/profileReducer";
import {Dispatch} from "redux";


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
// const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchToPropsType => {
//     return {
//         addPost: () => {
//             dispatch(addPostAC())
//         },
//         updateNewPostText: (postText: string) => {
//             dispatch(updateNewPostTextAC(postText))
//         }
//     }
// }

const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPost);


export default MyPostContainer;