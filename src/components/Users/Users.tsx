import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/photo.png'
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProcess: Array<number>
    toggleIsFollowingProcess: (isFetching: boolean, userId: number) => void
    isAuth: boolean
}

const Users: React.FC<PropsType> = ({
                                        totalUsersCount,
                                        currentPage,
                                        pageSize,
                                        onPageChanged,
                                        users,
                                        follow,
                                        unfollow,
                                        followingInProcess,
                                        toggleIsFollowingProcess,
                                        isAuth
                                    }) => {
    return <div>
    <Paginator totalItemsCount={totalUsersCount}
               currentPage={currentPage}
               pageSize={pageSize}
               onPageChanged={onPageChanged}
               portionSize={10}
    />
    <div>
        {users.map(u => <User key={u.id} user={u} follow={follow} unfollow={unfollow}
                              followingInProcess={followingInProcess} />)}
    </div>
    </div>
}

export default Users;