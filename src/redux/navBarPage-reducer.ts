import {v1} from 'uuid';
import {NavbarPageType} from '../components/NavBar/Friends/FriendsContainer';

let initialState: NavbarPageType = {
	navBarData: [
		{id: v1(), friend: 'Boris'},
		{id: v1(), friend: 'Olga'},
		{id: v1(), friend: 'Gleb'},
		{id: v1(), friend: 'Eva'},
		{id: v1(), friend: 'Nazar'}
	]
}
export const navBarPageReducer = (state: NavbarPageType = initialState, action: any):NavbarPageType => {

	return state
}