// import {v1} from 'uuid';
// import {
// 	addNewPostActionCreator,
// 	onPostChangeActionCreator,
// 	profilePageReducer,
// 	setUserProfile
// } from './profilepage-reducer';
// import { dialogsPageReducer, SendMessageBodyActionCreator} from './dialogspage-reducer';
// import {navBarPageReducer} from './navBarPage-reducer';
// import {
// 	follow,
// 	setCurrentPage, setToggle,
// 	setTotalUsersCount,
// 	setUsers,
// 	unFollow
// } from './users-reducer';



// type newMessageBodyType = {
// 	newMessageBody?: string
// }


// export type StoreType = {
// 	_state: stateTypeProps
// 	getState: () => stateTypeProps
// 	subscribe: (callback: () => void) => void
// 	renderHandler: () => void
// 	dispatch: (action: ActionsType) => void
// }


// type AddNewPostActionType = ReturnType<typeof addNewPostActionCreator>
// type TrackTextareaActionType = ReturnType<typeof onPostChangeActionCreator>
// type AddNewMessageBodyActionType = ReturnType<typeof AddNewMessageBodyActionCreator>
// type SendMessageBodyActionType = ReturnType<typeof SendMessageBodyActionCreator>
// type followACActionType = ReturnType<typeof follow>
// type unFollowACActionType = ReturnType<typeof unFollow>
// type setUsersACActionType = ReturnType<typeof setUsers>
// type currentPageActionType = ReturnType<typeof setCurrentPage>
// type totalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
// type toggleLoaderActionType = ReturnType<typeof setToggle>
// type setUserProfileActionType = ReturnType<typeof setUserProfile>

// export type ActionsType =
	// AddNewPostActionType
	// | TrackTextareaActionType
	// | AddNewMessageBodyActionType
	// | SendMessageBodyActionType
	// | followACActionType
	// | unFollowACActionType
	// | setUsersACActionType
	// | currentPageActionType
	// | totalUsersCountActionType
	// | toggleLoaderActionType
	// | setUserProfileActionType

// const store: StoreType = {
// 	_state: {
// 		profilePage: {
// 			postsData: [
// 				{
// 					id: v1(),
// 					message: 'Do you know who killed Kennedy?',
// 					likeCount: 3,
// 					image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'
// 				},
// 				{
// 					id: v1(),
// 					message: 'Do you have plans to weekend?',
// 					likeCount: 10,
// 					image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'
// 				},
// 			],
// 			newPostContent: '',
// 			profile: null
// 		},
// 		dialogsPage: {
// 			dialogsData: [
// 				{id: v1(), name: 'Boris', image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'},
// 				{id: v1(), name: 'Denis', image: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg'},
// 				{id: v1(), name: 'Iosif', image: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg'},
// 				{id: v1(), name: 'Yekaterina', image: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg'},
// 				{id: v1(), name: 'Larisa', image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
// 			],
// 			messagesData: [
// 				{id: v1(), message: 'Go outside!'},
// 				{id: v1(), message: 'What are you doing?'},
// 				{id: v1(), message: 'There is the house where my family lives.'},
// 				{id: v1(), message: 'We go jogging every Sunday!'},
// 				{id: v1(), message: 'They didn’t go to school last year.'},
// 			],
// 			newMessageBody: ''
// 		},
// 		navBarPage: {
// 			navBarData: [
// 				{id: v1(), friend: 'Boris'},
// 				{id: v1(), friend: 'Denis'},
// 				{id: v1(), friend: 'Iosif'},
// 				{id: v1(), friend: 'Jack'},
// 				{id: v1(), friend: 'Larisa'}
// 			]
// 		}
// 	},
// 	getState() {
// 		return this._state
// 	},
// 	subscribe(observer: () => void) {
// 		this.renderHandler = observer;
// 	},
// 	renderHandler() {
// 		console.log('state changed')
// 	},


	// dispatch(action: ActionsType) {
	//
	// 	this._state.profilePage = profilePageReducer(this._state.profilePage, action)
	// 	this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
	// 	this._state.navBarPage = navBarPageReducer(this._state.navBarPage, action)
	//
	// 	this.renderHandler()
	// }
// }

// export default store;


export default undefined