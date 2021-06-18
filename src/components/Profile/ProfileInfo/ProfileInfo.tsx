import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/photo.png';

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.photoFullName}>{profile.fullName}</div>
            <div className={s.avaDiscr}>
                <img alt="avatar" src={profile.photos.small || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={status}
                               updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;