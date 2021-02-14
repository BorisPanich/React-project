import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {ActionsTypes, addMessageTextAC, RootStateType, updateNewMessageTextAC} from "../../redux/state";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<PropsType> = (props) => {
    let lokcalState = props.state.dialogsPage

    let dialogsElement = lokcalState.dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = lokcalState.messages.map((m) => <Message message={m.message}/>)
    let newMessageText = lokcalState.newMessageText

    const onClickAddMessage = () => {
        props.dispatch(addMessageTextAC(newMessageText))
    }
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
                              placeholder='send Message hiere'
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