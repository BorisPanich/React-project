import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {addMessageText, DlgReducerInitialStateType, updateNewMessageText} from "../../redux/dialogsReducer";

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

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addMessageText})(Dialogs);

export default DialogsContainer;