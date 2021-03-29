import React from 'react';
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

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProcess: Array<number>
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

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // })
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             onPageChanged={this.onPageChanged}
                                                             users={this.props.users}
                                                             follow={this.props.follow}
                                                             unfollow={this.props.unfollow}
                                                             followingInProcess={this.props.followingInProcess}
                                                             toggleIsFollowingProcess={this.props.toggleIsFollowingProcess}
        />
    }
}

const mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleIsFollowingProcess, getUsers
})(UsersContainer);