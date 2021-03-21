import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

type ProfileType = {
    profile: any
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;