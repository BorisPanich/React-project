import React, {ChangeEvent, useRef, useState} from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {RootStateType} from "../../redux/state";

type PropsType = {
    state: RootStateType
    addMessageDlgText: (newText: string) => void
    addMessageText: (text: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElement = props.state.dialogsPage.dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = props.state.dialogsPage.messages.map((m) => <Message message={m.message}/>)

    const [message, setMessage] = useState<string>('')
    const onClickAddMessage = () => {
        props.addMessageText(message)
    }
    const onChangeAddMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.addMessage}>
                </div>
                <div className={s.messageInput}>
                    <textarea onChange={onChangeAddMessage}
                              value={message}
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