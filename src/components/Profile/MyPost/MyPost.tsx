import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";
import {InjectedFormProps, Field, reduxForm} from "redux-form";


const MyPost = (props: MyPostPropsType) => {
    let lockalState = props.profilePage
    let postsElement = lockalState.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    // let newPostText = lockalState.newPostText

    const addNewPost = (data: FormDataType) => {
        props.addPost(data.newPostText)
    }
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = e.currentTarget.value;
    //     props.updateNewPostText(newText)
    // }

    return (
        <div className={s.myPost}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea"
                   placeholder="send Post here"
                   name="newPostText"/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>

}
const AddPostFormRedux = reduxForm<FormDataType>({form: "addPostForm"})(AddPostForm)


export default MyPost;