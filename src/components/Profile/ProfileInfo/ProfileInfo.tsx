import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileInfoType = {}

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileImg}>
                <img src='https://www.visit-belarus.com/wp-content/uploads/2016/07/nature_avdevich4_compressed.jpg'/>
            </div>
            <div className={s.avaDiscr}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;