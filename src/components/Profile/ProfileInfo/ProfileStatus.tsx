import React, {ChangeEvent, useEffect, useState} from 'react';
import {RootReduxState} from '../../../redux/redux-store';
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>
                : <div>
                   <b>Status:</b> <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
                </div>
            }
        </div>
    )
}


export default ProfileStatus;