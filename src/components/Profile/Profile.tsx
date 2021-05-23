import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilePageType, ProfileType} from "../../redux/profileReducer";
import { Redirect } from 'react-router-dom';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateUserStatus}) => {

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}
            />
            <MyPostContainer />
        </div>
    )
}

export default Profile;