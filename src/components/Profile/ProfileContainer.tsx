import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profilepage-reducer';
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';

type PathParamsType = {
	userID: string
}

type CommonComponentPropsType = RouteComponentProps<PathParamsType> & PropsType


type mapStateToPropsType = {
	// profile:  null
	// status: string
	// authorizedUserID: string
	// isAuth: boolean
}

type mapDispatchToPropsType = {
	setUserProfile: (profile: any) => void
}


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any, CommonComponentPropsType> {

	refreshProfile() {
		// console.log(this.props.authorizedUserID)
		let userID = this.props.match.params.userID
		// userID = 12438
		if (!userID) {
			userID = this.props.authorizedUserID
			if (!userID) {
				this.props.history.push('/login')
			}
		}

		this.props.getUserProfile(userID);
		this.props.getStatus(userID)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<CommonComponentPropsType>, snapshot?: any) {
		if (this.props.match.params.userID !== prevProps.match.params.userID) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile  {...this.props} profile={this.props.profile}
								isOwner={!this.props.match.params.userID}
								status={this.props.status} updateStatus={this.props.updateStatus}
								savePhoto={this.props.savePhoto}
								saveProfile={this.props.saveProfile}
			/>
		)
	}
}

const mapStateToProps = (state: AppStateType) => {
	console.log('mapStateToProps render from ProfileContainer')
	return ({
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserID: state.auth.userID,
		isAuth: state.auth.isAuth,
	})
}


export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer) as React.FunctionComponent<any>

//тоже самое что и запись через константы:
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile,  getStatus, updateStatus})(WithUrlDataContainerComponent);