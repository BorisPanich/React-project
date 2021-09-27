import React from 'react';
import { connect, Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import app from './App.module.css';
import Loader from './components/common/Loader/Loader';
import Header from './components/Header/Header';
import { Login } from './components/Login/Login';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspence';
import { initializeAppTC } from './redux/app-reducer';
import { AppStateType, store } from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<any, any> {

	componentDidMount() {
		this.props.initializeAppTC()
	}

	render() {
		if (!this.props.initialized) {
			return <Loader />
		}
		return (
			<div className={app.app}>
				<Header />
				<div className={app.container}>
					<NavBar />
					<div className={app.content}>
						<Switch>
							<Route exact path='/'
								render={() => <Redirect to={'/profile'} />} />
							<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
							<Route path='/profile/:userID?' render={withSuspense(ProfileContainer)} />
							<Route render={() => <UsersContainer />} path='/users' />
							<Route render={() => <News />} path='/news' />
							<Route render={() => <Music />} path='/music' />
							<Route render={() => <Settings />} path='/settings' />
							<Route render={() => <Login />} path='/login' />
							<Route render={() => <div>404 NOT FOUND</div>} path='*' />
						</Switch>
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
	connect(mapStateToProps, { initializeAppTC }))(App) as React.FunctionComponent<any>

export const MainApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}