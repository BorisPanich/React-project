import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";

const MyPost = (props: MyPostPropsType) => {
    let lockalState = props.profilePage
    let postsElement = lockalState.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostText = lockalState.newPostText

    const addPostText = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.myPost}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={newPostText}/>
                </div>
                <div>
                    <button onClick={addPostText}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPost;