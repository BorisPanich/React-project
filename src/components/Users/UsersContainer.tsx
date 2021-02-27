import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.user
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;