import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, InjectedFormProps} from 'redux-form';
import { reduxForm} from 'redux-form';
import {MyPostsType} from '../../../redux/profilepage-reducer';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormControls';

type MyPostsPropsType = {
	postsData: Array<MyPostsType>
	addNewPost: (newPostContent: string) => void
}

const maxLength10 = maxLengthCreator(100)

// shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
// 	return nextProps !== this.props || nextState !== this.state
// }

const MyPosts = React.memo((props: MyPostsPropsType) => {


	const postsData = props.postsData

	const postElements = postsData.map(post => <Post message={post.message}
																									 likeCount={post.likeCount}
																									 key={post.id}
																									 image={post.image}/>)

	const addNewPost = (values: any) => {
		props.addNewPost(values.newPostContent)
	}

	return (
		<div>
			<div className={posts.post}>
				<p className={posts.title}>Create Post</p>
				<AddPostFormRedux onSubmit={addNewPost}/>
			</div>
			<div>
				{postElements}
			</div>
		</div>
	)
})

type FormDataType = {
	newPostContent: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form className={posts.wrap} onSubmit={props.handleSubmit}>
			<img className={posts.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
			<Field  component={Textarea} name='newPostContent' placeholder="Write something here..."
				validate={[requiredField, maxLength10]}
			/>
			<button className={posts.add__btn} >Add post</button>
		</form>
	)
}

const AddPostFormRedux = reduxForm<FormDataType>({
	form: 'newPostContent'
})(AddMessageForm)

export default MyPosts;