import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

type ProfileType = {
    // store: StoreType
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;