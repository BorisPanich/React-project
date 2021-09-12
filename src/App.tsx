import React from 'react';
import app from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeAppTC} from './redux/app-reducer';
import {AppStateType, store} from './redux/redux-store';
import Loader from './components/common/Loader/Loader';
import {withSuspense} from './hoc/withSuspence';
import {Login} from './components/Login/Login';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<any, any> {

	componentDidMount() {
		this.props.initializeAppTC()
	}

	render() {
		if (!this.props.initialized) {
			return <Loader/>
		}
		return (
			<div className={app.app}>
				<Header/>
				<div className={app.container}>
					<NavBar/>
					<div className={app.content}>
						<Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
						<Route path='/profile/:userID?' render={withSuspense(ProfileContainer)}/>
						<Route render={() => <UsersContainer/>} path='/users'/>
						<Route render={() => <News/>} path='/news'/>
						<Route render={() => <Music/>} path='/music'/>
						<Route render={() => <Settings/>} path='/settings'/>
						<Route render={() => <Login/>} path='/login'/>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
})


const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeAppTC}))(App) as React.FunctionComponent<any>

export const MainApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</HashRouter>
}