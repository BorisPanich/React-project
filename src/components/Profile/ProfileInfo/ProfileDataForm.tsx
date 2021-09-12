import React, {FC} from 'react';
import {createField, GetStringKeys, Input, Textarea} from '../../common/FormControls/FormControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType} from '../../../types/types';
import s from './ProfileDataForm.module.css'

type PropsType = {
	profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile, handleSubmit, error}) => {

	return (
		<form onSubmit={handleSubmit} className={s.box}>
			<div>
				<button>save</button>
			</div>
			{error && <div className={s.error}>{error}</div>}
			<div>
				<b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
			</div>
			<div>
				<b>Looking for a job</b>: { createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"} )}
			</div>

			<div>
				<b>My professional skills</b>:
				{ createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea  )}
			</div>

			<div>
				<b>About me</b>:
				{ createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea  )}
			</div>
			<div>
				<div className={s.contacts}><b>Contacts:</b></div>
				{Object.keys(profile.contacts).map(key => {
				return <div key={key} >
					<b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
				</div>
			})}
			</div>
		</form>
	)
}


const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
