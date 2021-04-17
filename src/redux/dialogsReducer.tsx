import {ActionsTypes, DialogType, MessageType} from "./redux-store";

const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Boris'},
        {id: 2, name: 'Olia'},
        {id: 3, name: 'Gleb'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Ania'},
        {id: 6, name: 'Eva'},
        {id: 7, name: 'Nazar'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Haw are you?'},
    ] as Array<MessageType>,
    newMessageText: ''
}

export type DlgReducerInitialStateType = typeof initialState;

const dialogsReducer = (state: DlgReducerInitialStateType = initialState, action: ActionsTypes): DlgReducerInitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE_TEXT:
            let newMassage = action.newMessageText
            return {
                ...state,
                // newMessageText: '',
                messages: [...state.messages, {id: 4, message: newMassage}]
            };
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.newMText
        //     }
        default:
            return state
    }
}

export const addMessageTextAC = (newMessageText: string) =>
    ({type: "ADD-MESSAGE-TEXT", newMessageText} as const);
// export const updateNewMessageText = (newMText: string) =>
//     ({type: "UPDATE-NEW-MESSAGE-TEXT", newMText: newMText} as const)

export default dialogsReducer;