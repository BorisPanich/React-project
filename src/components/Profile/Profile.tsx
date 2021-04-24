import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfilePageType, ProfileType} from "../../redux/profileReducer";
import { Redirect } from 'react-router-dom';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    // updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         // updateStatus={props.updateStatus}
            />
            <MyPostContainer />
        </div>
    )
}

export default Profile;