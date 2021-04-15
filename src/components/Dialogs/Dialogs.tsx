import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {FormElementTextarea} from "../common/FormControls/FormControls";
import {maxLength, minLength, required} from "../../utils/validations";


type FormDataType = {
    newMText: string
}

const Dialogs = (props: DialogsPropsType) => {
    let lockalState = props.dialogsPage

    let dialogsElement = lockalState.dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let messagesElement = lockalState.messages.map((m) => <Message message={m.message}/>)
    // let newMessageText = lockalState.newMessageText

    // const onClickAddMessage = () => {
    //     props.addMessageText(newMessageText)
    // }
    //
    // const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newMText = e.currentTarget.value
    //     props.updateNewMessageText(newMText)
    // }
    const addNewMessage = (data: FormDataType): void => {
        props.addMessageText(data.newMText)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength100 = maxLength(100);
const minLength2 = minLength(2, 100);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageInput}>
                <Field component={FormElementTextarea}
                       validate={[required, maxLength100, minLength2]}
                       placeholder="send Message here"
                       name="newMessageText"/>
                <div>
                    <button>add message</button>
                </div>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;