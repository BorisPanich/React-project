import {addNewPostActionCreator, deletePostAC, profilePageReducer} from './profilepage-reducer';
import {v1} from 'uuid';

const id1 =  v1()
const id2 =  v1()

const state = {
	postsData: [
		{
			id: id1,
			message: 'Do you know who killed Kennedy?',
			likeCount: 3,
			image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'
		},
		{
			id: id2,
			message: 'Do you have plans to weekend?',
			likeCount: 10,
			image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'
		},
	],
	profile: null,
	status: ''
}

it('new post should be added', () => {
	//1) test data
	const action = addNewPostActionCreator('new post')
	//2) action
	const newState = profilePageReducer(state, action)
	//3) expectation
	expect(newState.postsData.length).toBe(3)
	expect(newState.postsData[2].message).toBe('new post')
})

it('delete post', () => {
	//1) test data
	const action = deletePostAC(id2)
	//2) action
	const newState = profilePageReducer(state, action)
	//3) expectation
	expect(newState.postsData.length).toBe(1)
})

it('after deleting length shouldn t be decrement if id is incorrect', () => {
	//1) test data
	const action = deletePostAC(v1())
	//2) action
	const newState = profilePageReducer(state, action)
	//3) expectation
	expect(newState.postsData.length).toBe(2)
})