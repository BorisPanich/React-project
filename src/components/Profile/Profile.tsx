import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilePageType, ProfileType} from "../../redux/profileReducer";
import { Redirect } from 'react-router-dom';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
            />
            <MyPostContainer />
        </div>
    )
}

export default Profile;