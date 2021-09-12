import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';

type MapStateToProps = {
	navBarData: NavbarPageType
}
type mapDispatchToProps = {

}
export type NavBarDataType = {
	id: string
	friend: string
}
export type NavbarPageType = {
	navBarData: Array<NavBarDataType>
}


const mapStateToProps = (state: any) => {
	return {
		navBarData: state.navBarPage.navBarData
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
