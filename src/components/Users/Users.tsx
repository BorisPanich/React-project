import React from 'react';
import styles from './users.module.css';
import {UserPropsType} from "./UsersContainer";



const Users = (props: UserPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://previews.123rf.com/images/snake3d/snake3d1603/snake3d160300081/53550216-smiley-alien-face-cartoon-cute-head-emoticon-monster-ball-golden-green-avatar-cheerful-funny-smile-i.jpg',
                followed: true,
                fullName: 'Boris',
                status: 'It\'s me',
                location: {city: 'Lida', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://previews.123rf.com/images/snake3d/snake3d1603/snake3d160300081/53550216-smiley-alien-face-cartoon-cute-head-emoticon-monster-ball-golden-green-avatar-cheerful-funny-smile-i.jpg',
                followed: true,
                fullName: 'Olga',
                status: 'She my wife',
                location: {city: 'Lida', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://previews.123rf.com/images/snake3d/snake3d1603/snake3d160300081/53550216-smiley-alien-face-cartoon-cute-head-emoticon-monster-ball-golden-green-avatar-cheerful-funny-smile-i.jpg',
                followed: false,
                fullName: 'Dymok',
                status: 'He my friend',
                location: {city: 'Kobrin', country: 'Belarus'}
            },
        ])
    }

    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;