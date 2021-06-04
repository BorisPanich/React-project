import React, {lazy, Suspense, useEffect} from 'react';
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
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {compose, Store} from 'redux';
import {Preloader} from "./components/common/Preloader/Preloader";
import {connect, ConnectedProps} from 'react-redux';
import {initializedAppTC} from './redux/appReducer';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

type MapStateToPropsType = {
    initializedSuccess: boolean
}
type MapDispatchToPropsType = {
    initializedAppTC: () => void
}
export type AppType = {
    store: Store
}

const App: React.FC<AppType & MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    useEffect(() => {
        props.initializedAppTC()
    }, [])

    if (!props.initializedSuccess) {
        return <Preloader/>
    }

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        </section>
                    </Suspense>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/sidebar' render={() => <Sidebar/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>)
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => ({
    initializedSuccess: state.app.initializedSuccess
})

const connector = connect(mapStateToProps, {initializedAppTC})
export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(connector)(App);