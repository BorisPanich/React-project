import {ActionsTypes, DialogsPageType} from "./state";

const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE_TEXT:
            let newMassage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMassage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMText;
            return state;
        default:
            return state
    }
}

export const addMessageTextAC = (text: string) =>
    ({type: "ADD-MESSAGE-TEXT", text: text} as const);
export const updateNewMessageTextAC = (newMText: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMText: newMText} as const)

export default dialogsReducer;