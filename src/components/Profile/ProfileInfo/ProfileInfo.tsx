import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ContactsType, ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/photo.png';
import ProfileDataForm from './ProfileDataForm';

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    profile,
                                                    status,
                                                    updateUserStatus,
                                                    isOwner,
                                                    savePhoto,
                                                    saveProfile
                                                }) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (profile: ProfileType) => {
        const promise = saveProfile(profile)
        promise.then(
            () => {
                setEditMode(false)
            }
        );
    }

    return (
        <div>
            <div className={s.avaDiscr}>
                <img alt="avatar" src={profile?.photos.small || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                        profile={profile}
                        isOwner={isOwner}/>}

                <ProfileStatus status={status}
                               updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    )
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType | null> = ({profile, isOwner, goToEditMode}) => {

    if (!profile) {
        return <Preloader/>
    }
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={s.photoFullName}>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a jod</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}


type ContactType =
    {
        contactTitle: string
        contactValue: string | null
    }

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;