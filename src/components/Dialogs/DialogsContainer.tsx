import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {addMessageText, DlgReducerInitialStateType, updateNewMessageText} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addMessageText})(AuthRedirectComponent);

export default DialogsContainer;