import React from 'react';
import us from './Users.module.css';
import defaultImg from '../../assets/image/usersPage/default_user.png';
import {userType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';


type UserFuncPropsType = {
	followingInProgress: Array<number>
	followThunkCreator: (userID: number) => void
	unFollowThunkCreator: (userID: number) => void
	user: userType
}


export const User = ({user, followingInProgress, followThunkCreator, unFollowThunkCreator}: UserFuncPropsType) => {
	return (
		<div className={us.container}>
			<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg8.jpg'
					 className={us.bg}/>
			<div className={us.wrapper}>
				<NavLink to={'/profile/' + user.id}>
					<img src={user.photos.small === null ? defaultImg : user.photos.small} className={us.avatar}/>
				</NavLink>

				<div className={us.inner}>
					<p className={us.name}>@{user.name}</p>
					<p>{user.status}</p>
					{
						user.followed ?
							<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
								unFollowThunkCreator(user.id)
							}}
											className={us.follow_btn}>Unfollow</button> :
							<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
								followThunkCreator(user.id)
							}}
											className={us.follow_btn}>Follow</button>
					}
				</div>
			</div>
		</div>
	)
}
