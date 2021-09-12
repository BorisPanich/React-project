import {v1} from 'uuid';
import {NavbarPageType} from '../components/NavBar/Friends/FriendsContainer';

let initialState: NavbarPageType = {
	navBarData: [
		{id: v1(), friend: 'Boris'},
		{id: v1(), friend: 'Denis'},
		{id: v1(), friend: 'Iosif'},
		{id: v1(), friend: 'Jack'},
		{id: v1(), friend: 'Larisa'}
	]
}
export const navBarPageReducer = (state: NavbarPageType = initialState, action: any):NavbarPageType => {

	return state
}