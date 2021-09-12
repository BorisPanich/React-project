import React from 'react';
import us from './Users.module.css';
import { userType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';


type UsersFuncPropsType = {
	users: Array<userType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (userID: number) => void
	unFollow: (userID: number) => void
	onPageChanged: (page: number) => void
	followingInProgress: Array<number>
	setToggleFollowingProgress: (following: boolean, userID: number) => void
	followThunkCreator: (userID: number) => void
	unFollowThunkCreator: (userID: number) => void
}

const Users = (props: UsersFuncPropsType) => {
	return (
		<div className={us.box_wrap}>
			<div className={us.titleBox}>
				<h2 className={us.title}>Friend Lists</h2>
				<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg7.jpg' className={us.box_bg}/>
			</div>
			<div className={us.box}>
				{props.users.map(user => {
					return <User followingInProgress={props.followingInProgress} followThunkCreator={props.followThunkCreator}
											 unFollowThunkCreator={props.unFollowThunkCreator} user={user} key={user.id}/>
				})
				}
				<Paginator pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}
									 totalItemsCount={props.totalUsersCount}/>
			</div>
			{/*<button className={us.show_more_btn}>Show more</button>*/}
		</div>
	)
}

export default Users;