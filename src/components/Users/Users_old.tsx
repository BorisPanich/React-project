import React from 'react';
import us from './Users.module.css';
import axios from 'axios';
import defaultImg from './../../assets/image/usersPage/default_user.png';
import {UsersPropsType} from './UsersContainer';



export const Users_old = (props: UsersPropsType) => {
	let users = props.users;

	const getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					users = response.data.items
					// props.setUsers(users);
				})
		}
	}

	return (
		<div className={us.box_wrap}>

			<div className={us.titleBox}>
				<h2 className={us.title}>Friend Lists</h2>
				<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg7.jpg' className={us.box_bg}/>
			</div>
			<button onClick={getUsers}>get users</button>
			<div className={us.box}>
				{
					props.users.map(user => {

					const unFollowing = () => props.unFollow(user.id);
					const following = () => props.follow(user.id);

					return (
						<div key={user.id} className={us.container}>
							<img src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg8.jpg' className={us.bg}/>
							<div className={us.wrapper}>
								<img src={user.photos.small === null ? defaultImg : user.photos.small} className={us.avatar}/>
								<div className={us.inner}>
									<p className={us.name}>@{user.name}</p>
									<p>{user.status}</p>
									{
										user.followed ?
											<button onClick={unFollowing} className={us.follow_btn}>Unfollow</button> :
											<button onClick={following} className={us.follow_btn}>Follow</button>
									}
								</div>
							</div>
						</div>
					)
				})
				}
			</div>
			<button className={us.show_more_btn}>Show more</button>
		</div>
	)
}

