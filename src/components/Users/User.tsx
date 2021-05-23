import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/photo.png'
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProcess: Array<number>
}

const User: React.FC<PropsType> = ({user, follow, unfollow, followingInProcess}) => {
    return <div>
        <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos?.small ? user.photos?.small : userPhoto} className={styles.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProcess.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>

                            : <button disabled={followingInProcess.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>
                        }
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
    </div>
}

export default User;