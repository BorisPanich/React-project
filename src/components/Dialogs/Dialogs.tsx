import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import {Field, InjectedFormProps} from 'redux-form';
import { reduxForm} from 'redux-form';
import {Textarea} from '../common/FormControls/FormControls';
import {maxLengthCreator, requiredField} from '../../utils/validators/validators';

type DialogsPropsType = {
	dialogsPage: MessagePageType
	sendMessage: (newMessageBody: string) => void
	isAuth: boolean
}

export type DialogsDataType = {
	id: string
	name: string
	image: string
}
export type MessagesDataType = {
	id: string
	message: string
}

export type MessagePageType = {
	messagesData: Array<MessagesDataType>
	dialogsData: Array<DialogsDataType>
}

const maxLength100 = maxLengthCreator(100)

const Dialogs = (props: DialogsPropsType) => {

	const state = props.dialogsPage;

	const dialogsElements = state.dialogsData.map(dialog => {
		return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} image={dialog.image}/>;
	})
	const messagesElements = state.messagesData.map(message => {
		return <Message message={message.message} key={message.id}/>
	})


	// if (!props.isAuth) {
	// 	 return <Redirect to={'/login'}/>
	// }

	const addNewMessage = (values: any) => {
		console.log(values)
		props.sendMessage(values.newMessageBody);
	}

	return (
		<div className={dialogs.dialogs__wrapper}>
			<div className={dialogs.dialogs}>
				<ul className={dialogs.dialog__list}>
					{dialogsElements}
				</ul>
			</div>
			<div className={dialogs.messages}>
				<ul className={dialogs.message__list}>
					<div>{messagesElements}</div>
				</ul>
				<DialogsFormDataRedux onSubmit={addNewMessage}/>
			</div>
		</div>
	)
}

type DialogsFormDataType = {
	newMessageBody: string
}

const DialogsFormData: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
	return (
		<form className={dialogs.box} onSubmit={props.handleSubmit}>
			<div>
				<Field name={'newMessageBody'} placeholder='Type your message..' className={dialogs.textarea}
							 component={Textarea}
							 validate={[requiredField, maxLength100]}
				/>
			</div>
			<div>
				<button className={dialogs.btn}>Send</button>
			</div>
		</form>
	)
}

const DialogsFormDataRedux = reduxForm<DialogsFormDataType>({
	form: 'dialogAddMessageForm'
})(DialogsFormData)


export default Dialogs;
