import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

// type PropsType = {
//     // state: RootStateType
//     // dispatch: (action: ActionsTypes) => void
//     updateNewMessageText: (newMText: string) => void
//     addMessageText: (newMessageText: string) => void
//     dialogsPage: DialogsPageType
// }

const Dialogs = (props: DialogsPropsType) => {
    let lockalState = props.dialogsPage

    let dialogsElement = lockalState.dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = lockalState.messages.map((m) => <Message message={m.message}/>)
    let newMessageText = lockalState.newMessageText

    const onClickAddMessage = () => {
        props.addMessageText(newMessageText)
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMText = e.currentTarget.value
        props.updateNewMessageText(newMText)
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