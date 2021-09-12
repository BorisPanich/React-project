import React from 'react';
import dialogs from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


type DialogItem = {
  id: string
  name: string
  image: string
}

const DialogItem = (props: DialogItem) => {
  const path = '/dialogs/' + props.id;

  return (
    <div>
      <li className={`${dialogs.dialog__item} ${dialogs.active}`}>
        <img src={props.image} alt={'ava'} className={dialogs.img}/>
        <NavLink to={path} className={dialogs.link}>{props.name}</NavLink>
      </li>
    </div>
  )
}

export default DialogItem;
