import React, {ChangeEvent, FC, useState} from 'react';
import profileInfo from './ProfileInfo.module.css';
import SocialLink from './SocialLink/SocialLink';
import Analytics from './Analitics/Analitics';
import Loader from '../../common/Loader/Loader';
import ava from './../../../assets/image/usersPage/default_user.png';
import {ProfileStatusWithHooks} from '../ProfileStatus/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import {ContactsType, ProfileType} from '../../../types/types';
import s from './ProfileDataForm.module.css';


type ProfileInfoType = {
	profile: ProfileType
	status: string
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (photo: File) => void
	saveProfile: (profile: ProfileType) => Promise<any>
}


const ProfileInfo = ({isOwner, profile, savePhoto, status, updateStatus, saveProfile}: ProfileInfoType) => {
	const [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Loader/>
	}

	const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {

		if (event.target.files && event.target.files.length) {
			savePhoto(event.target.files[0])
		}
	}
	const onSubmit = (formData: ProfileType) => {
		console.log(formData)
		saveProfile(formData).then(
			() => {
				setEditMode(false);
			}
		);
	}

	return (
		<div className={profileInfo.content__wrapper}>
			<img className={profileInfo.content__img}
					 src='https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg' alt="bg"/>
			<div className={profileInfo.info}>
				<img className={profileInfo.ava__img} src={profile.photos.small || ava}/>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
				<p className={profileInfo.name}>{profile.fullName}</p>
				<p className={profileInfo.status}>{profile.lookingForAJobDescription}</p>
				<div className={profileInfo.editPhoto}>
					{isOwner &&
          <>
            <input type='file' className={profileInfo.uploadInput} onChange={onMainPhotoSelected}/>
          </>
					}
				</div>
			</div>
			<div className={profileInfo.editMode}>
				{editMode
					? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
					: <ProfileData goToEditMode={() => {
						setEditMode(true)
					}} profile={profile} isOwner={isOwner}/>}
			</div>
			<div className={profileInfo.social}>
				<SocialLink/>
				<Analytics/>
			</div>
		</div>
	)
}

type ProfileDataPropsType = {
	profile: ProfileType
	isOwner: boolean
	goToEditMode?: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
	return (
		<>
			<div>
				{isOwner && <div>
          <button onClick={goToEditMode}>edit</button>
        </div>}
				<div>
					<b>Full name</b>: {profile.fullName}
				</div>
				<div>
					<b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
				</div>
				{profile.lookingForAJob &&
        <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
				<div>
					<b>About me</b>: {profile.aboutMe}
				</div>
				<div>
					<div className={profileInfo.contacts}><b>Contacts:</b></div> {
					Object
						.keys(profile.contacts)
						.map((key) => {
							return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
						})}
				</div>
			</div>
		</>
	)
}

type ContactsPropsType = {
	contactTitle: string
	contactValue: string
}

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
	return (
		<div className={s.contactsBox}>
			<span><b>{contactTitle}</b></span>
			<span><b>{contactValue}</b></span>
		</div>
	)
}


export default ProfileInfo;