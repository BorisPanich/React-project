import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './ProfileStatus.module.css';


type ProfileStatusWithHooksPropsType = {
	status: string
	updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
	const [status, setStatus] = useState<string>(props.status)
	const [editMode, setEditMode] = useState<boolean>(false)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.currentTarget.value)
	}

	return (
		<div className={style.box}>
			{!editMode &&
      <div>
        <p className={style.status} onDoubleClick={activateEditMode}>{props.status || 'No status'}</p>
      </div>
			}

			{editMode &&
      <div>
        <input onChange={onStatusChange} autoFocus value={status} onBlur={deactivateEditMode}/>
      </div>
			}
		</div>
	)
}