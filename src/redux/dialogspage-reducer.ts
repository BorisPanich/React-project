import { v1 } from 'uuid';
import { DialogsDataType, MessagesDataType } from '../components/Dialogs/Dialogs';

const SEND_MESSAGE = 'SEND_MESSAGE';

type SendMessageBodyActionType = ReturnType<typeof SendMessageBodyActionCreator>

type ActionType = SendMessageBodyActionType

export const SendMessageBodyActionCreator = (message: string) => {
	return {
		type: SEND_MESSAGE,
		message
	} as const
}


type InitialStateType = {
	messagesData: Array<MessagesDataType>
	dialogsData: Array<DialogsDataType>
	newMessageBody?: string | undefined
}

const initialState = {
	dialogsData: [
		{ id: v1(), name: 'Boris', image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg' },
		{ id: v1(), name: 'Olga', image: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg' },
		{ id: v1(), name: 'Anya', image: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg' },
		{ id: v1(), name: 'Gleb', image: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg' },
		{ id: v1(), name: 'Eva', image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg' },
	],
	messagesData: [
		{ id: v1(), message: 'Go outside! Go to work' },
		{ id: v1(), message: 'How is it going?' }
	]
}


// type InitialStateType = typeof initialState

export const dialogsPageReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

	switch (action.type) {
		case SEND_MESSAGE: {
			const body = action.message;
			return {
				...state,
				messagesData: [...state.messagesData, { id: v1(), message: body }]
			}
		}
		default:
			return state
	}
}