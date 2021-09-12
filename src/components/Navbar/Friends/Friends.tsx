import React from 'react';
import style from './Friends.module.css';
import {NavBarDataType} from './FriendsContainer';

type FriendsTypeProps = {
  navBarData: Array<NavBarDataType>
}

const Friends = (props: FriendsTypeProps) => {
  const arrayOfFriends = props.navBarData

  const nameOfArrayFriend = arrayOfFriends.map(friend => {
    return <div className={style.name} key={friend.id}>{friend.friend}</div>
  })

  return (
    <div>
      <h3 className={style.title}>Friend Lists</h3>
      <div className={style.container}>
        {nameOfArrayFriend}
      </div>
    </div>
  )
}

export default Friends;
