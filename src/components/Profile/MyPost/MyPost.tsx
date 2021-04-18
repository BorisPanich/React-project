import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utils/validations";
import {FormElementTextarea} from "../../common/FormControls/FormControls";


const MyPost = (props: MyPostPropsType) => {
    let localState = props.profilePage
    let postsElement = localState.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    const addNewPost = (data: FormDataType) => {
        props.addPost(data.newPostText)
    }

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

const maxLength20 = maxLength(20);
const minLength2 = minLength(2, 20);

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={FormElementTextarea}
                   placeholder="send Post here"
                   name="newPostText"
                   validate={[required, maxLength20, minLength2]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>

}
const AddPostFormRedux = reduxForm<FormDataType>({form: "addPostForm"})(AddPostForm)


export default MyPost;