import React from 'react';
import posts from './Post.module.css';

type MessageType = {
  message: string
  likeCount: number
  image: string
}

const Post = (props: MessageType) => {
  return (
    <div className={posts.wrap}>
      <img className={posts.img} src={props.image} />
      <div className={posts.text}>{props.message}</div>
      <button className={posts.like__btn}>&#10084;</button>
      <p className={posts.like}>{props.likeCount}</p>
    </div>
  )
}

export default Post;