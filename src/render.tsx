import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessageDlgText, addMessageText, addPost, RootStateType, updateNewPostText} from "./redux/state";

export let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPostCallback={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessageDlgText={addMessageDlgText}
                 addMessageText={addMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


