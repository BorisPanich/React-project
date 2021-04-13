import React, {ComponentType} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {
    addMessageTextAC,
    DlgReducerInitialStateType,
} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DlgReducerInitialStateType
}
type MapDispatchToPropsType = {
    // updateNewMessageText: (newMText: string) => void
    addMessageText: (data: { newMText: string }) => void
    // addMessage: (value: { messageText: string }) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessageText: (newMText: string) => {  //!!!!!!!!!!!!!!!!!!!!!!!
            dispatch(addMessageTextAC(newMText))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {mapDispatchToProps}),
    withAuthRedirect
)
(Dialogs);