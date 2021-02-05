import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPostCallback: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPostCallback={props.addPostCallback}
                    updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;