import React from 'react';
import profile from './Profile.module.css';
import ProfileInfo  from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../types/types';


export type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={profile.profile}>
      <ProfileInfo saveProfile={props.saveProfile} profile={props.profile} updateStatus={props.updateStatus} status={props.status} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
      <MyPostsContainer  />
    </div>
  )
}

export default Profile;