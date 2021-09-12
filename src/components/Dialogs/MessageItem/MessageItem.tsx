import React from 'react';
import message from './MessageItem.module.css';


type MessageItem = {
  message: string
}

const Message = (props: MessageItem) => {
  return (
    <li className={message.message__item}>
      <p className={message.text}>{props.message}</p>
    </li>
  )
}

export default Message;
