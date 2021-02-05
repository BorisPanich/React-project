import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

export type MyPostType = {
    posts: Array<PostType>
    addPostCallback: (postText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPost: React.FC<MyPostType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostText = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.myPost}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
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