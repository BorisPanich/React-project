import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, RootReduxState} from "../../redux/redux-store";
import {addMessageText, DlgReducerInitialStateType, updateNewMessageText} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DlgReducerInitialStateType
}
type MapDispatchToPropsType = {
    updateNewMessageText: (newMText: string) => void
    addMessageText: (newMText: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
// const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchToPropsType => {
//     return {
//         updateNewMessageText: (newMText: string) => {
//             dispatch(updateNewMessageTextAC(newMText))
//         },
//         addMessageText: (newMText: string) => {
//             dispatch(addMessageTextAC(newMText))
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addMessageText})(Dialogs);

export default DialogsContainer;