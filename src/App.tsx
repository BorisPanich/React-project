import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, MessageType, PostType, ProfilePageType, RootStateType, RootReduxState} from "./redux/redux-store";
import {Settings} from "./components/Settings/Settings";
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {Sidebar} from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';

export type AppType = {
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const App: React.FC<AppType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/sidebar' render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
