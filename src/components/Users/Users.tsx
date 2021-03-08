import React from 'react';
import styles from './users.module.css';
import {UserPropsType} from "./UsersContainer";
import axios from 'axios';
import userPhoto from '../../assets/images/photo.png'


class Users extends React.Component<UserPropsType> {
    constructor(props: UserPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    // getUsers = () => {
    //     if (this.props.usersPage.users.length === 0) {
    //
    //
    //         // props.setUsers([
    //         //     {
    //         //         id: 1,
    //         //         photoUrl: 'https://previews.123rf.com/images/snake3d/snake3d1603/snake3d160300081/53550216-smiley-alien-face-cartoon-cute-head-emoticon-monster-ball-golden-green-avatar-cheerful-funny-smile-i.jpg',
    //         //         followed: true,
    //         //         fullName: 'Boris',
    //         //         status: 'It\'s me',
    //         //         location: {city: 'Lida', country: 'Belarus'}
    //         //     },
    //         //     {
    //         //         id: 2,
    //         //         photoUrl: 'https://previews.123rf.com/images/snake3d/snake3d1603/snake3d160300081/53550216-smiley-alien-face-cartoon-cute-head-emoticon-monster-ball-golden-green-avatar-cheerful-funny-smile-i.jpg',
    //         //         followed: true,
    //         //         fullName: 'Olga',
    //         //         status: 'She my wife',
    //         //         location: {city: 'Lida', country: 'Belarus'}
    //         //     },
    //         //     {
    //         //         id: 3,
    //         //         photoUrl: 'https://previews.123rf.com/images/snake3d/snake3d1603/snake3d160300081/53550216-smiley-alien-face-cartoon-cute-head-emoticon-monster-ball-golden-green-avatar-cheerful-funny-smile-i.jpg',
    //         //         followed: false,
    //         //         fullName: 'Dymok',
    //         //         status: 'He my friend',
    //         //         location: {city: 'Kobrin', country: 'Belarus'}
    //         //     },
    //         // ])
    //     }
    // }

    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos != null ? u.photos : userPhoto} className={styles.usersPhoto}/>
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
}

export default Users;