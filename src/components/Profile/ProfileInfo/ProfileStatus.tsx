import React, {ChangeEvent, useEffect, useState} from 'react';
import {RootReduxState} from '../../../redux/redux-store';
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    // useEffect(() => {
    //     setStatus(props.status)
    // }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
                </div>
                : <div>
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatus;