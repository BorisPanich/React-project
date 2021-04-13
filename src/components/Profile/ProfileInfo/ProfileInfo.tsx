import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    // updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.photoFullName}>{props.profile.fullName}</div>
            <div className={s.avaDiscr}>
                <img src={props.profile.photos.small}/>
                <ProfileStatus status={props.status}
                               // updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;