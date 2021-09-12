import React from 'react';
import navbar from './HeaderNavBar.module.css';
import { NavLink } from 'react-router-dom';

type HeaderNavBarPropsType = {
	isAuth: boolean
	login: string | null
	logout: () => void
	profile: any
}

const HeaderNavBar = (props: HeaderNavBarPropsType) => {
	return (
		<div className={navbar.wrap}>
			<div>
				{
					props.isAuth
						? <div className={navbar.loginWrap}>
								<div className={navbar.box}>
									<p className={navbar.title}>{props.login}</p>
									<img className={navbar.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg' alt='ava'/>
								</div>
								<div onClick={props.logout} className={navbar.logout}></div>
							</div>
						: <NavLink to={'/login'} className={navbar.login}>Sing In</NavLink>
				}

			</div>
			<div className={navbar.containerAva}>
				{/*<img className={navbar.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg' alt='ava'/>*/}
				{/*<h3 className={navbar.title}>Bni Cyst</h3>*/}
			</div>
		</div>
	)
}

export default HeaderNavBar;
