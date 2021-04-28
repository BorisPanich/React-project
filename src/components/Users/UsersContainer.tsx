import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    UserType, toggleIsFollowingProcess, getUsers
} from "../../redux/usersReducer";
import {RootReduxState} from "../../redux/redux-store";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Redirect} from 'react-router-dom';
import {
    getUsersSelector, getPageSize, getTotalUsersCount,
    getCurrentPage, getIsFetching, getFollowingInProcess, getIsAuth
} from '../../redux/selectors';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProcess: Array<number>
    isAuth: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProcess: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/Login'}/>
        return this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             onPageChanged={this.onPageChanged}
                                                             users={this.props.users}
                                                             follow={this.props.follow}
                                                             unfollow={this.props.unfollow}
                                                             followingInProcess={this.props.followingInProcess}
                                                             toggleIsFollowingProcess={this.props.toggleIsFollowingProcess}
                                                             isAuth={this.props.isAuth}
        />
    }
}

const mapStateToProps = (state: RootReduxState) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state),
        isAuth: getIsAuth(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingProcess, getUsers})
)(UsersContainer);