import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";

export type MyPostType = {
    posts: Array<PostType>
    // addPostCallback: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPost: React.FC<MyPostType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostText = () => {
        if (newPostElement.current) {
            // let newText = newPostElement.current.value
            // let action = {type: 'ADD-POST'};
            props.dispatch({type: "ADD-POST"})
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
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