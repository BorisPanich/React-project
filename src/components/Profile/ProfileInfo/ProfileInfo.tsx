import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: any // !!!!!!!!!!!!!!!!!!
}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profileImg}>
                <img src='https://www.visit-belarus.com/wp-content/uploads/2016/07/nature_avdevich4_compressed.jpg'/>
            </div>
            <div className={s.avaDiscr}>
                <img src={props.profile.photos.small}/>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;