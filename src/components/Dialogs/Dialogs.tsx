import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {ActionsTypes, RootStateType} from "../../redux/state";
import {addMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<PropsType> = (props) => {
    let lockalState = props.state.dialogsPage

    let dialogsElement = lockalState.dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = lockalState.messages.map((m) => <Message message={m.message}/>)
    let newMessageText = lockalState.newMessageText

    const onClickAddMessage = () => {
        props.dispatch(addMessageTextAC(newMessageText))
    }
    // const keyPressAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.charCode === 102) {onClickAddMessage()}
    // }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMText = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(newMText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div className={s.addMessage}>
                </div>
                <div className={s.messageInput}>
                    <textarea onChange={onChangeMessage}
                              value={newMessageText}
                              // onKeyPress={keyPressAddMessage}
                              placeholder='send Message here'
                    />
                </div>
                <div>
                    <button onClick={onClickAddMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;