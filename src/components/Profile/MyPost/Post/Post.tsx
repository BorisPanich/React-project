import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/redux-store";

const Post: React.FC<PostType> = (props) => {
    return (
            <div className={s.item}>
                <img src='https://vjoy.cc/wp-content/uploads/2019/07/3-38.jpg'/>
                { props.message }
                    <div>
                        <span>like</span> {props.likes}
                    </div>
            </div>
    )
}

export default Post;