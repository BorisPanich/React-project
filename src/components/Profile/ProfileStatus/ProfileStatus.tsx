import React, {ChangeEvent} from 'react';
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component<any, any> {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: event.currentTarget.value
		})
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}

	}

	render() {
		return (
			<div className={style.box}>
				{!this.state.editMode &&
        <div>
					<p className={style.status} onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</p>
        </div>
				}

				{this.state.editMode &&
        <div>
					<input onChange={this.onStatusChange} autoFocus value={this.state.status} onBlur={this.deactivateEditMode}/>
        </div>
				}
			</div>
		)
	}

}

export default ProfileStatus;