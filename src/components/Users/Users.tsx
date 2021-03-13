import React from 'react';
import styles from './users.module.css';
import {UserPropsType} from "./UsersContainer";
import axios from 'axios';
import userPhoto from '../../assets/images/photo.png'


class Users extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++)
            pages.push(i);

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={p === this.props.currentPage ? styles.selectedPage : ''}
                    onClick={() => {this.onPageChanged(p);}} >{p}</span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos?.small ? u.photos?.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    }
};

export default Users;