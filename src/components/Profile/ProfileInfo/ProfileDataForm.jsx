import React from 'react';
import {FormElementInput, FormElementTextarea, createField} from './../../common/FormControls/FormControls';
import styles from "./../common/FormControls/FormsControls.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';

export type ProfileDataFormType = {
    profile: ProfileType
    // handleSubmit:
}

export const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div className={s.photoFullName}>
            <b>Full name</b>: {createField("Full name", "fullname", FormElementInput, [])}
        </div>
        <div>
            <b>Looking for a jod</b>:
            {createField("", "lookingForAJob", [], FormElementInput, "checkbox")}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", [], FormElementTextarea)}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
            {createField("About me", "aboutMe", [], FormElementTextarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile ? profile.contacts : "").map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], FormElementInput)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;