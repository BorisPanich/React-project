import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, MessageType, PostType, ProfilePageType, RootStateType} from "./redux/state";
import {Settings} from "./components/Settings/Settings";
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {Sidebar} from './components/Sidebar/Sidebar';

export type AppType = {
    state: RootStateType
    // addPostCallback: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    // addMessageDlgText: (newText: string) => void
    // addMessageText: (text: string) => void
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                        // updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state}
                        dispatch={props.dispatch}
                        // addMessageText={props.addMessageText}
                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/sidebar' render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
