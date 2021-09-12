import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	follow, followThunkCreator, getUsersThunkCreator, setCurrentPage, setToggleFollowingProgress,
	unFollow, unFollowThunkCreator,
	userType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Loader from '../common/Loader/Loader';
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';
import {
	getCurrentPage,
	getFollowingInProgress,
	getInProgress,
	getPageSize,
	getTotalUsersCount,
	requestUsersSelector
} from '../../redux/users-selectors';

export type UsersPropsType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	setCurrentPage: (page: number) => void
	inProgress: boolean
	followingInProgress: Array<number>
	setToggleFollowingProgress: (following: boolean, userID: number) => void
	getUsersThunkCreator: (currentPage: number, pageSize: number) => void
	followThunkCreator: (userID: number) => void
	unFollowThunkCreator: (userID: number) => void
}


class UsersContainer extends Component<UsersPropsType> {

	componentDidMount(): void {
		const {currentPage, pageSize} = this.props
		this.props.getUsersThunkCreator(currentPage, pageSize)
	}

	onPageChanged = (page: number) => {
		const {pageSize} = this.props
		this.props.getUsersThunkCreator(page, pageSize)
	}

	render() {
		return <>
			{this.props.inProgress ? <Loader/> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
				followingInProgress={this.props.followingInProgress}
				setToggleFollowingProgress={this.props.setToggleFollowingProgress}
				followThunkCreator={this.props.followThunkCreator}
				unFollowThunkCreator={this.props.unFollowThunkCreator}
			/>
		</>
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {
		users: requestUsersSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		inProgress: getInProgress(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

// const withRedirect = withAuthRedirect(UsersContainer)
//
// export default connect(mapStateToProps, {
// 	follow,
// 	unFollow,
// 	setCurrentPage,
// 	setToggleFollowingProgress,
// 	getUsersThunkCreator,
// 	followThunkCreator,
// 	unFollowThunkCreator
// })(withRedirect)

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unFollow,
		setCurrentPage,
		setToggleFollowingProgress,
		getUsersThunkCreator,
		followThunkCreator,
		unFollowThunkCreator
	})
)(UsersContainer)