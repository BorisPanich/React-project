import React from 'react';
import HeaderNavBar from './HeaderNavBar';
import {connect} from 'react-redux';
import {logout} from '../../../redux/auth-reducer';
import {AppStateType} from '../../../redux/redux-store';

type HeaderNavBarContainerType = {
	isAuth: boolean
	login: string | null
	logout: () => void
	getAuthUserData: () => void
	profile: any
}

class HeaderNavBarContainer extends React.Component<HeaderNavBarContainerType> {

	render() {
		return <HeaderNavBar {...this.props} />
	}
}

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	photo: state.profilePage.profile
})

export default connect(mapStateToProps, {logout})(HeaderNavBarContainer);
