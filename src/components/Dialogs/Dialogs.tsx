import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {FormElementTextarea} from "../common/FormControls/FormControls";
import {maxLength, minLength, required} from "../../utils/validations";
import {DlgReducerInitialStateType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    addMessageText: (newMText: string) => void
    isAuth: boolean
    dialogsPage: DlgReducerInitialStateType
}

const Dialogs = (props: DialogsPropsType) => {
    // let localState = props.dialogsPage

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name} key={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)
    // let newMessageBody = localState.newMessageText

    const addNewMessage = (value: FormDataType) => {
        debugger
        props.addMessageText(value.newMessageText)
    }

    // if (!props.isAuth) return <Redirect to={"/login"} /> ;

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

type FormDataType = {
    newMessageText: string
}

const maxLength20 = maxLength(20);
const minLength2 = minLength(2, 20);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageInput}>
                <Field component={FormElementTextarea}
                       validate={[required, maxLength20, minLength2]}
                       placeholder="send Message here"
                       name="newMessageText"/>
                <div>
                    <button type={'submit'}>add message</button>
                </div>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;