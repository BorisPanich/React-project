import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

type mapStateToPropsForRedirect = {
	isAuth: boolean
}

const mapStateToPropsForRedirect = (state: any ) => ({
	isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

	const AuthRedirectComponent= (props: any) => {
		if (!props.isAuth) return <Redirect to={'/login'}/>

		return <Component {...props} />
	}

	const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

	return ConnectAuthRedirectComponent
}